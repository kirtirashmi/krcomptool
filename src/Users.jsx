// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import your custom CSS file
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function Users({ selectedItem, onItemSelect }) {
//   const [data, setData] = useState([]);
//   const [selectedSource, setSelectedSource] = useState('');
//   const [selectedMissingFrom, setSelectedMissingFrom] = useState('');
//   const [additionalData, setAdditionalData] = useState([]);
//   const [dataVisible, setDataVisible] = useState(false);

//   useEffect(() => {
//     console.log("selectedSource", selectedSource);
//     console.log("selectedMissingFrom", selectedMissingFrom);
//     console.log("selectedItem", selectedItem);
  
//     if (selectedSource && selectedMissingFrom && selectedItem) {
//       // Send a GET request to the backend with selected data
//       fetch(`/api/index?item=${selectedItem}&source=${selectedSource}&missingFrom=${selectedMissingFrom}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`Network response was not ok, status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log("Received data:", data);
    
//         if (Array.isArray(data)) {
//           setDataVisible(true);
//           setData(data);
    
//           // Filter objects with 'differences' property
//           const newData = data.filter(item => item.differences && Object.keys(item.differences).length > 0);
//           console.log("New data:", newData);
//           setAdditionalData(newData);
//         } else {
//           console.error("Data is not an array");
//         }
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
    

//     }
//   }, [selectedSource, selectedMissingFrom, selectedItem]);
  

//   const getColumnNames = tableData => {
//     const columnNames = new Set();
  
//     tableData.forEach(item => {
//       if (item.primaryKeyValue) {
//         item.primaryKeyValue.forEach(pk => {
//           columnNames.add(pk.key);
//         });
//       }
  
//       if (item.differences) {
//         Object.keys(item.differences).forEach(key => {
//           columnNames.add(key);
//         });
//       }
//     });
  
//     return Array.from(columnNames);
//   };
  
//   console.log("Data:", data);


//   const getFirstTableData = () => {
//     return data.filter(item => item.Source === selectedSource);
//   };
  
//   const getSecondTableData = () => {
//     // Swap selectedSource and selectedMissingFrom for the second table
//     return data.filter(item => item.Source === selectedMissingFrom);
//   };
  
//   const getThirdTableData = () => {
//     return data.filter(item => item.differences);
//   };

//   const renderTable = (title, tableData) => {
//     if (tableData.length === 0) return null;
  
//     const columnNames = getColumnNames(tableData);
  
//     return (
//       <div>
//         <h1>{title}</h1>
//         <div className="table-responsive">
//           <table className="table table-bordered table-striped">
//             <thead className="thead-dark">
//               <tr>
//                 {columnNames.map((columnName, index) => (
//                   <th key={index}>{columnName}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((item, index) => (
//                 <tr key={index}>
//                   {columnNames.map((columnName, columnIndex) => (
//                     <td key={columnIndex}>
//                       {item.primaryKeyValue &&
//                         item.primaryKeyValue.find(pk => pk.key === columnName)?.value}
  
//                       {item.differences &&
//                         item.differences[columnName] &&
//                         item.differences[columnName][selectedSource]}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };

//   const handleRunClick = () => {
//     onItemSelect(selectedSource, selectedMissingFrom);
//   };

//   return (
//     <div>
//       <main className="main-container">
//         <div className="table-responsive">
//           <div className="">
//             <label htmlFor="sourceSelect" className="form-label">
//               Select Source:
//             </label>
//             <select
//               id="sourceSelect"
//               className="form-select"
//               value={selectedSource}
//               onChange={e => {
//                 setSelectedSource(e.target.value);
//               }}
//             >
//               <option value="Source">Source</option>
//               <option value="CFG Environment">CFG Environment</option>
//               <option value="ACC Environment">ACC Environment</option>
//               <option value="UAT Environment">UAT Environment</option>
//             </select>
//           </div>
//         </div>
//       </main>

//       <main className="main-container">
//         <div className="table-responsive">
//           <div className="">
//             <label htmlFor="missingFromSelect" className="form-label">
//               Select Target:
//             </label>
//             <select
//               id="missingFromSelect"
//               className="form-select"
//               value={selectedMissingFrom}
//               onChange={e => {
//                 setSelectedMissingFrom(e.target.value);
//               }}
//             >
//               <option value="Target">Target</option>
//               <option value="CFG Environment">CFG Environment</option>
//               <option value="ACC Environment">ACC Environment</option>
//               <option value="UAT Environment">UAT Environment</option>
//             </select>

//             <button onClick={handleRunClick}>Run</button>
//           </div>
//         </div>
//       </main>

//       {dataVisible && (
//       <div>
//         {renderTable("First Table", getFirstTableData())}
//         {renderTable("Second Table", getSecondTableData())}
//         {renderTable("Third Table", getThirdTableData())}
//       </div>
//     )}
//     </div>
//   );
// }

// export default Users;




























// import React, { useState, useEffect } from 'react';
// import './App.css'; // Import your custom CSS file
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// function Users({ selectedItem, onItemSelect }) {
//   const [data, setData] = useState([]);
//   const [additionalData, setAdditionalData] = useState([]);
//   const [selectedSource, setSelectedSource] = useState('');
//   const [selectedMissingFrom, setSelectedMissingFrom] = useState('');
//   const [oppositeSource, setOppositeSource] = useState('');
//   const [dataVisible, setDataVisible] = useState(false);

//    useEffect(() => {
//    }, [selectedSource, selectedMissingFrom, selectedItem]);

//   const handleRunClick = () => {

//     onItemSelect(selectedSource, selectedMissingFrom);
//     setDataVisible(true);
//     // This code will be executed when the "Run" button is clicked.
//     // The GET request is triggered by the useEffect when the filters are set.
//   };

//   useEffect(() => {
//     // Fetch data from the JSON file
//     fetch('./Diff_Users_CFG Environment_ACC Environment.json') // Replace with the correct path to your JSON file
//       .then((response) => response.json())
//       .then((jsonData) => {
//         const mainData = jsonData.filter(
//           (item) =>
//             item.Source === selectedSource
//         );
//         setData(mainData);

//         const newData = jsonData.filter(
//           (item) => item.differences !== undefined
//         );
//         setAdditionalData(newData);
//       });
//   }, []);

//   // Function to filter data based on the selected source
//   const filteredData = data.filter(
//     (item) =>
//       (selectedSource === '' || item.Source === selectedSource) &&
//       (selectedMissingFrom === '' || item.MissingFrom === selectedMissingFrom)
//   );

//   // Function to filter data for the second table based on the opposite source
//   const secondTableData = data.filter(
//     (item) => (oppositeSource === '' || item.Source === oppositeSource)
//   );

//   // Function to get the keys from the differences object as column names
//   const getColumnNames = () => {
//     const columnNames = new Set();
//     additionalData.forEach((item) => {
//       if (item.differences) {
//         Object.keys(item.differences).forEach((key) => {
//           columnNames.add(key);
//         });
//       }
//     });
//     return Array.from(columnNames);
//   };

//   return (
//     <div>
//       {/* Source Dropdown and MissingFrom Dropdown */}
//       <main className="main-container">
//         <div className="table-responsive">
//           <div className="">
//             <label htmlFor="sourceSelect" className="form-label">
//               Select Source:
//             </label>
//             <select
//               id="sourceSelect"
//               className="form-select"
//               value={selectedSource}
//               onChange={(e) => {
//                 setSelectedSource(e.target.value);
//                 setOppositeSource(
//                   e.target.value === selectedSource
//                     ? selectedMissingFrom
//                     : selectedSource
//                 );
//               }}
//             >
//               <option value="Source">Source</option>
//               <option value="CFG Environment">CFG Environment</option>
//               <option value="ACC Environment">ACC Environment</option>
//               <option value="UAT Environment">UAT Environment</option>
//             </select>
//           </div>
//         </div>
//       </main>

//       {/* MissingFrom Dropdown */}
//       <main className="main-container">
//         <div className="table-responsive">
//           <div className="">
//             <label htmlFor="missingFromSelect" className="form-label">
//               Select Target:
//             </label>
//             <select
//               id="missingFromSelect"
//               className="form-select"
//               value={selectedMissingFrom}
//               onChange={(e) => setSelectedMissingFrom(e.target.value)}
//             >
//               <option value="Target">Target</option>
//               <option value="ACC Environment">ACC Environment</option>
//               <option value="CFG Environment">CFG Environment</option>
//               <option value="UAT Environment">UAT Environment</option>
//             </select>

//             <button onClick={handleRunClick}>Run</button>
//           </div>
//         </div>
//       </main>

//       {/* Main Content */}
//       {dataVisible && (
//         <main className="main-container">
//           <div className="table-responsive">
//             <h1 className="">Missing Data in {oppositeSource}</h1>
//             <div className="table-container">
//               <div className="scrolling-table-container">
//                 <table className="table table-bordered table-striped">
//                   <thead className="thead-dark">
//                     <tr>
//                       {filteredData.length > 0 &&
//                         Object.keys(filteredData[0]).map((key, index) => (
//                           <th key={index}>{key}</th>
//                         ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredData.map((item, index) => (
//                       <tr key={index}>
//                         {Object.keys(item).map((key, innerIndex) => (
//                           <td key={innerIndex}>
//                             {item[key] !== null ? item[key].toString() : ''}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Second Table */}
//             <h1 className="table-responsive">
//               Additional Data in {oppositeSource}
//             </h1>
//             <div className="table-container">
//               <div className="scrolling-table-container">
//                 <table className="table table-bordered table-striped">
//                   <thead className="thead-dark">
//                     <tr>
//                       {secondTableData.length > 0 &&
//                         Object.keys(secondTableData[0]).map((key, index) => (
//                           <th key={index}>{key}</th>
//                         ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {secondTableData.map((item, index) => (
//                       <tr key={index}>
//                         {Object.keys(item).map((key, innerIndex) => (
//                           <td key={innerIndex}>
//                             {item[key] !== null ? item[key].toString() : ''}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Third Table */}
//             <h1 className="table-responsive">Mismatched Data in Environments</h1>
//             <div className="table-container">
//               <div className="scrolling-table-container">
//                 <table className="table table-bordered table-striped">
//                   <thead className="thead-dark">
//                     <tr>
//                       <th>Identity</th>
//                       {getColumnNames().map((columnName) => (
//                         <th key={columnName}>{columnName}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {additionalData.map((item, index) => (
//                       <tr key={index}>
//                         <td>{item.Identity}</td>
//                         {getColumnNames().map((columnName, columnIndex) => (
//                           <td key={columnIndex}>
//                             {item.differences &&
//                             item.differences[columnName] &&
//                             item.differences[columnName].AccEnvironment !== null
//                               ? item.differences[columnName].AccEnvironment.toString()
//                               : ''}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// }

// export default Users;








import React, { useState, useEffect } from 'react';
import './App.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Users({ selectedItem, onItemSelect, dataVisible, 
data, additionalData }) {
  //const [data, setData] = useState([]);
  //const [additionalData, setAdditionalData] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedMissingFrom, setSelectedMissingFrom] = useState('');
  const [oppositeSource, setOppositeSource] = useState('');
  //const [dataVisible, setDataVisible] = useState(false);

  // useEffect(() => {
  //   console.log(selectedSource, selectedMissingFrom, selectedItem);
  //   if (selectedSource && selectedMissingFrom && selectedItem) {
  //    // Send a GET request to the backend with selected data
  //     fetch(`/api/index?item=${selectedItem}&source=${selectedSource}&missingFrom=${selectedMissingFrom}`)
  //       .then(response => response.json())
  //       .then(value => {
  //         //console.log(data);
  //         // Process the data received from the backend
  //         //setDataVisible(true); // Display data when available
  //         //const objData = value.data;

  //         //console.log("Rochak",objData);

  //         // const mainData = objData.filter(
  //         //   (item) =>
  //         //     item.Source === selectedSource
  //         // );
  //         // setData(mainData);
  
  //         // const newData = objData.filter(
  //         //   (item) => item.differences !== undefined
  //         // );
  //         // setAdditionalData(newData);
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });
  //   }
  //  }, [selectedSource, selectedMissingFrom, selectedItem]);

  const handleRunClick = () => {

    onItemSelect(selectedSource, selectedMissingFrom);
   // setDataVisible(true);
    // This code will be executed when the "Run" button is clicked.
    // The GET request is triggered by the useEffect when the filters are set.
  };


  // Function to filter data based on the selected source
  const filteredData = data.filter(
    (item) =>
      (selectedSource === '' || item.Source === selectedSource) &&
      (selectedMissingFrom === '' || item.MissingFrom === selectedMissingFrom)
  );

  // Function to filter data for the second table based on the opposite source
  const secondTableData = data.filter((item) => 
      (selectedSource === '' || item.Source === selectedMissingFrom) &&
      (selectedMissingFrom === '' || item.MissingFrom === selectedSource)
  );

  const missingDataCount = filteredData.length;
  const secondTableCount = secondTableData.length;
  const mismatchedDataCount = additionalData.length;
  

  // Function to get the keys from the differences object as column names
  const getColumnNames = () => {
    const columnNames = new Set();
    additionalData.forEach((item) => {
      if (item.differences) {
        Object.keys(item.differences).forEach((key) => {
          columnNames.add(key);
        });
      }
    });
    return Array.from(columnNames);
  };


  

  return (
    <div>
      {/* Source Dropdown and MissingFrom Dropdown */}
      <main className="main-container">
        <div className="table-responsive">
          <div className="">
            <label htmlFor="sourceSelect" className="form-label">
              Select Source:
            </label>
            <select
              id="sourceSelect"
              className="form-select"
              value={selectedSource}
              onChange={(e) => {
                setSelectedSource(e.target.value);
                setOppositeSource(
                  e.target.value === selectedSource
                    ? selectedMissingFrom
                    : selectedSource
                );
              }}
            >
              <option value="Source">Source</option>
              <option value="CFG Environment">CFG Environment</option>
              <option value="ACC Environment">ACC Environment</option>
              <option value="UAT Environment">UAT Environment</option>
            </select>
          </div>
        </div>
      </main>

      {/* MissingFrom Dropdown */}
      <main className="main-container">
        <div className="table-responsive">
          <div className="">
            <label htmlFor="missingFromSelect" className="form-label">
              Select Target:
            </label>
            <select
              id="missingFromSelect"
              className="form-select"
              value={selectedMissingFrom}
              onChange={(e) => setSelectedMissingFrom(e.target.value)}
            >
              <option value="Target">Target</option>
              <option value="ACC Environment">ACC Environment</option>
              <option value="CFG Environment">CFG Environment</option>
              <option value="UAT Environment">UAT Environment</option>
            </select>

            <button onClick={handleRunClick}>Run</button>
          </div>
        </div>
      </main>

      {/* Main Content */}
      {dataVisible && (
        <main className="main-container">
          <div className="table-responsive">
            <h1 className="">Missing Data in {selectedMissingFrom}</h1>
            <p>Total Missing Records : {missingDataCount}</p>
            <div className="table-container">
              <div className="scrolling-table-container">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                  <tr>
                  {dataVisible && filteredData.length > 0 &&
                    Object.keys(filteredData[0]).map((key, index) => {
                      if (key !== 'primaryKeyValue' && key !== 'Source' && key !== 'MissingFrom') {
                        return <th key={index}>{key}</th>;
                      }
                      return null;
                    })}
                  </tr>
                  </thead>
                  <tbody>
                      {dataVisible && filteredData.map((item, index) => (
                        <tr key={index}>
                          {Object.keys(item).map((key, innerIndex) => {
                            if (key !== 'primaryKeyValue' && key !== 'Source' && key !== 'MissingFrom') {
                              return (
                                <td key={innerIndex}>
                                  {item[key] !== null ? item[key].toString() : 'null'}
                                </td>
                              );
                            }
                            return null;
                          })}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Table */}
            <h1 className="table-responsive">
              Additional Data in {selectedMissingFrom}
            </h1>
            <p>Total Additional Records : {secondTableCount}</p>
            <div className="table-container">
              <div className="scrolling-table-container">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                  <tr>
                  {secondTableData.length > 0 &&
                    Object.keys(secondTableData[0]).map((key, index) => {
                      if (key !== 'primaryKeyValue' && key !== 'Source' && key !== 'MissingFrom') {
                        return <th key={index}>{key}</th>;
                      }
                      return null;
                    })}
                  </tr>
                  </thead>
                  <tbody>
                    {secondTableData.map((item, index) => (
                      <tr key={index}>
                      {Object.keys(item).map((key, innerIndex) => {
                        if (key !== 'primaryKeyValue' && key !== 'Source' && key !== 'MissingFrom') {
                          return (
                            <td key={innerIndex}>
                              {item[key] !== null ? item[key].toString() : 'null'}
                            </td>
                          );
                        }
                        return null;
                      })}
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Third Table */}

            <h1 className="table-responsive">Mismatched Data in {selectedMissingFrom}</h1>
            <p>The columns which are shown in the table below have different values.</p>
            <p>Total Mismatched Records : {mismatchedDataCount}</p>
            <div className="table-container">
              <div className="scrolling-table-container">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      {additionalData && additionalData[0] && additionalData[0].primaryKeyValue && additionalData[0].primaryKeyValue.map((item, index) => (
                        <th key={index}>{item.key}</th>
                      ))}
                      {getColumnNames().map((columnName, columnIndex) => (
                        <th key={columnName}>{columnName}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {additionalData && additionalData.map((item, index) => (
                      <tr key={index}>
                        {item.primaryKeyValue.map((primaryKey, innerIndex) => (
                          <td key={innerIndex}>
                            {primaryKey.value !== null ? primaryKey.value.toString() : ''}
                          </td>
                        ))}
                        {getColumnNames().map((columnName, columnIndex) => (
                          <td key={columnIndex}>
                          {item.differences &&
                            item.differences[columnName] &&
                            item.differences[columnName][selectedMissingFrom] !== undefined &&
                            item.differences[columnName][selectedMissingFrom] !== null
                              ? item.differences[columnName][selectedMissingFrom].toString()
                              : item.differences[columnName] &&
                                item.differences[columnName][selectedMissingFrom] === null
                              ? 'null'
                              : ''}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Users;










