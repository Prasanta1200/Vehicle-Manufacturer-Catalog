import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManufacturerCatalog = () => {
// Define state variables for the catalog data and search/filter criteria
const [catalogData, setCatalogData] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const [filterType, setFilterType] = useState('');

// Fetch the catalog data from the API on component mount
useEffect(() => {
axios
.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers')
.then((response) => {
setCatalogData(response.data.Results.filter((result) => result.Name && result.Country && result.VehicleTypes));
})
.catch((error) => console.log(error));
}, []);

// Define a function to handle the click event on a row and show manufacturer details
const handleRowClick = (manufacturerId) => {
axios
.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/${manufacturerId}?format=json')
.then((response) => {
const { Mfr_Name: name, Mfr_Address: address, Mfr_Headquarters: headquarters } = response.data.Results[0];
alert(`${name}\n${headquarters}\n${address}`);
})
.catch((error) => console.log(error));
};

// Define a function to handle the search query input change event
const handleSearchChange = (event) => {
setSearchQuery(event.target.value);
};

// Define a function to handle the filter type selection change event
const handleFilterChange = (event) => {
setFilterType(event.target.value);
};

// Filter the catalog data based on the search query and filter type
const filteredCatalogData = catalogData.filter(
(result) =>
result.Name.toLowerCase().includes(searchQuery.toLowerCase()) &&
(filterType === '' || result.VehicleTypes.toLowerCase().includes(filterType.toLowerCase()))
);

return (
<div>
<h2>Vehicle Manufacturer Catalog</h2>
<label htmlFor="search-input">Search:</label>
<input id="search-input" type="text" value={searchQuery} onChange={handleSearchChange} />
<br />
<label htmlFor="filter-select">Filter by Vehicle Type:</label>
<select id="filter-select" value={filterType} onChange={handleFilterChange}>
<option value="">All</option>
{Array.from(new Set(catalogData.map((result) => result.VehicleTypes)))
.filter((vehicleType) => vehicleType !== null)
.map((vehicleType) => (
<option key={vehicleType} value={vehicleType}>
{vehicleType}
</option>
))}
</select>
<br />
<table>
<thead>
<tr>
<th>Name</th>
<th>Country</th>
<th>Type</th>
</tr>
</thead>
<tbody>
{filteredCatalogData.map((result) => (
<tr key={result.Mfr_ID} onClick={() => handleRowClick(result.Mfr_ID)}>
<td>{result.Name}</td>
<td>{result.Country}</td>
<td>{result.VehicleTypes}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default ManufacturerCatalog;