// import React from 'react';

// const Popup = ({ data, handleClose }) => {
//   const { Address, City, CompanyName, PrincipalFirstName, PrincipalLastName, PrincipalPosition } = data;
//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <button className="close-btn" onClick={handleClose}>Close</button>
//         <h2>{CompanyName}</h2>
//         <p><strong>Registered Name:</strong> {CompanyName}</p>
//         <p><strong>Current Head:</strong> {PrincipalFirstName} {PrincipalLastName} ({PrincipalPosition})</p>
//         <p><strong>Address:</strong> {Address}, {City}</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React from 'react';

const Popup = ({ manufacturer, onClose }) => {
  const { Manufacturer, Country, VehicleTypes } = manufacturer;
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>{Manufacturer}</h2>
        <p><strong>Country:</strong> {Country}</p>
        <p><strong>Vehicle Types:</strong> {VehicleTypes ? VehicleTypes.join(", ") : "N/A"}</p>
      </div>
    </div>
  );
};

export default Popup;
