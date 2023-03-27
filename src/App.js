import React, { useState, useEffect } from "react";
// import Search from "./Search";
// import Filter from "./Filter";
// import Table from "./Table";
// import Popup from "./Popup";
// import Loading from "./Loading";
// import Error from "./Error";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Table from "./components/Table";
import Popup from "./components/Popup";
import Loading from "./components/Loading";
import Error from "./components/Error";

const App = () => {
  // const [vehicleTypes, setVehicleTypes] = useState([]);

  const [manufacturers, setManufacturers] = useState([]);
  const [filteredManufacturers, setFilteredManufacturers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [vehicleTypeFilter, setVehicleTypeFilter] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    debugger
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers")
      .then((response) => response.json())
      // console.log(response);
      .then((data) => {
        debugger
        console.log(data);
        debugger
        setManufacturers(data.Results);
        setLoading(false);
        
        console.log(setManufacturers);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  // useEffect(() => {
  //   setLoading(true);
  //   Promise.all([
  //     fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers"),
  //     fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getvehicletypes")
  //   ])
  //     .then(([manufacturersResponse, vehicleTypesResponse]) => Promise.all([manufacturersResponse.json(), vehicleTypesResponse.json()]))
  //     .then(([manufacturersData, vehicleTypesData]) => {
  //       setManufacturers(manufacturersData.Results);
  //       setVehicleTypes(vehicleTypesData.Results);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, []);
  

  useEffect(() => {
    let filtered = [...manufacturers];
    if (searchQuery !== "") {
      filtered = filtered.filter(
        (manufacturer) =>
          manufacturer.Manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
          manufacturer.Country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (vehicleTypeFilter !== "") {
      filtered = filtered.filter(
        (manufacturer) =>
          manufacturer.VehicleTypes &&
          manufacturer.VehicleTypes.includes(vehicleTypeFilter)
      );
    }
    setFilteredManufacturers(filtered);
  }, [manufacturers, searchQuery, vehicleTypeFilter]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilter = (event) => {
    setVehicleTypeFilter(event.target.value);
  };

  const handleRowClick = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
  };

  const handlePopupClose = () => {
    setSelectedManufacturer(null);
  };

  return (
    <div>
      <h1>Vehicle Manufacturer Catalog</h1>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <>
          <Search onSearch={handleSearch} />
          <Filter onFilter={handleFilter} />
          <Table manufacturers={filteredManufacturers} onRowClick={handleRowClick} />
          {selectedManufacturer && (
            <Popup
              manufacturer={selectedManufacturer}
              onClose={handlePopupClose}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;