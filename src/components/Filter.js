// import React from 'react';

// const Filter = ({ options, value, onChange }) => {
//   return (
//     <div className="filter-container">
//       <label htmlFor="filter-select">Filter by Vehicle Type:</label>
//       <select
//         id="filter-select"
//         name="filter-select"
//         defaultValue={value}
//         onChange={onChange}
//       >
//         <option value="">All Types</option>
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filter;



import React from 'react';

const Filter = ({ options, value, onChange }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filter-select">Filter by Vehicle Type:</label>
      <select
        id="filter-select"
        name="filter-select"
        defaultValue={value}
        onChange={onChange}
      >
        <option value="">All Types</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

