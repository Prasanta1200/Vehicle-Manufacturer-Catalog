// import React from 'react';

// const Table = ({ data }) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Country</th>
//           <th>Type</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row, index) => (
//           <tr key={index}>
//             <td>{row.Name}</td>
//             <td>{row.Country}</td>
//             <td>{row.Type}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Table;

import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}>
            <td>{row.Name}</td>
            <td>{row.Country}</td>
            <td>{row.Type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
