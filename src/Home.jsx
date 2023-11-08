import React, { useState } from 'react';



function Home() {
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedMissingFrom, setSelectedMissingFrom] = useState('');
  const [dataVisible, setDataVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let objData;

  const handleRunClick = () => {
    setLoading(true);
    // Handle the Run button click and make the API request here.
    // Use the selectedSource and selectedMissingFrom to form the API request.
    // Update the data state with the API response.

    // Example API request without selectedItem:
    fetch(`/api/allindex?source=${selectedSource}&missingFrom=${selectedMissingFrom}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((value) => {
        objData = value.data;
        console.log(objData);
        // Update data state with the response data.
        setData(objData);
        setDataVisible(true); // Display data when available
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <main className="main-container">
        <div className="table-responsive">
          <div>
            <label htmlFor="sourceSelect" className='form-label'>Select Source:</label>
            <select
              id="sourceSelect"
              className="form-select"
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
            >
              <option value="">Source</option>
              <option value="CFG Environment">CFG Environment</option>
              <option value="ACC Environment">ACC Environment</option>
              <option value="UAT Environment">UAT Environment</option>
            </select>
          </div>
        </div>
      </main>

      <main className="main-container">
        <div className="table-responsive">
          <div>
            <label htmlFor="missingFromSelect" className='form-label'>Select Target:</label>
            <select
              id="missingFromSelect"
              className="form-select"
              value={selectedMissingFrom}
              onChange={(e) => setSelectedMissingFrom(e.target.value)}
            >
              <option value="">Target</option>
              <option value="ACC Environment">ACC Environment</option>
              <option value="CFG Environment">CFG Environment</option>
              <option value="UAT Environment">UAT Environment</option>
            </select>
            <div>
            <button onClick={handleRunClick} disabled={loading}>
            {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Run'}
            </button>
            </div>
          </div>
        </div>
      </main>

      {dataVisible && data && data.length > 0 &&(
        
        <div>
          <h1 className="">
              Data Count
            </h1>
          <div className="table-container">
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>BDR Name</th>
                <th>Missing Data Count in {selectedMissingFrom}</th>
                <th>Additional Data Count in {selectedMissingFrom}</th>
                <th>Mismatched Data Count in {selectedMissingFrom}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  <td>{rowData.key1}</td>
                  <td>{rowData.First}</td>
                  <td>{rowData.Second}</td>
                  <td>{rowData.Third}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          
        </div>
      )}
    </div>
  );
}


export default Home;










// import React, { useState } from 'react';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Home from './Home';
// import Users from './Users';


// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [selectedItem, setSelectedItem] = useState('');
//   const [dataVisible, setDataVisible] = useState(false); // Define dataVisible state
//   const [data, setData] = useState([]);
//   const [additionalData, setAdditionalData] = useState([]);

//   const onItemSelect = (item) => {
//     setSelectedItem(item); // Update the selectedItem state
//   };

//   const onRunClick = (selectedSource, selectedMissingFrom) => {
//     // console.log("Testing", selectedSource, selectedMissingFrom, selectedItem)
//     if (selectedSource && selectedMissingFrom && selectedItem) {
//       // Send a GET request to the backend with selected data
//      // console.log(`Starting the server for resource: ${selectedSource}, ${selectedMissingFrom}, ${selectedItem}` );
//       fetch(`/api/allindex?item=${selectedItem}&source=${selectedSource}&missingFrom=${selectedMissingFrom}`,{
//         headers:{
//           'Accept':'application/json',
//         'Content-Type':'application/json'
//         }
//       })
//         .then(response => response.json())
//         .then(value => {
//           const objData = value.data;
//           console.log(objData);
//           const mainData = objData.filter(
//             (item) =>
//               item.Source === selectedSource || item.Source === selectedMissingFrom
//           );
//           setData(mainData);
//           const newData = objData.filter(
//             (item) => item.differences !== undefined
//           );
//           setAdditionalData(newData);
//           // Process the data received from the backend
//           setDataVisible(true); // Display data when available
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//     }
//   };

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//       <div className='grid-container'>
//             {<Users selectedItem={selectedItem} onItemSelect={onRunClick} dataVisible={dataVisible}
//             data={data} additionalData={additionalData}/>}
          
//       </div>
//   );
// }

// export default App;










// import React from 'react'
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
//  import 
//  { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
//  from 'recharts';

// function Home() {

//     const data = [
//         {
//           name: 'Page A',
//           uv: 4000,
//           pv: 2400,
//           amt: 2400,
//         },
//         {
//           name: 'Page B',
//           uv: 3000,
//           pv: 1398,
//           amt: 2210,
//         },
//         {
//           name: 'Page C',
//           uv: 2000,
//           pv: 9800,
//           amt: 2290,
//         },
//         {
//           name: 'Page D',
//           uv: 2780,
//           pv: 3908,
//           amt: 2000,
//         },
//         {
//           name: 'Page E',
//           uv: 1890,
//           pv: 4800,
//           amt: 2181,
//         },
//         {
//           name: 'Page F',
//           uv: 2390,
//           pv: 3800,
//           amt: 2500,
//         },
//         {
//           name: 'Page G',
//           uv: 3490,
//           pv: 4300,
//           amt: 2100,
//         },
//       ];
     

//   return (
//     <main className='main-container'>
//         <div className='main-title'>
//             <h3>DASHBOARD</h3>
//         </div>

//         <div className='main-cards'>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>PRODUCTS</h3>
//                     <BsFillArchiveFill className='card_icon'/>
//                 </div>
//                 <h1>300</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CATEGORIES</h3>
//                     <BsFillGrid3X3GapFill className='card_icon'/>
//                 </div>
//                 <h1>12</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CUSTOMERS</h3>
//                     <BsPeopleFill className='card_icon'/>
//                 </div>
//                 <h1>33</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>ALERTS</h3>
//                     <BsFillBellFill className='card_icon'/>
//                 </div>
//                 <h1>42</h1>
//             </div>
//         </div>

        // <div className='charts'>
        //     <ResponsiveContainer width="100%" height="100%">
        //     <BarChart
        //     width={500}
        //     height={300}
        //     data={data}
        //     margin={{
        //         top: 5,
        //         right: 30,
        //         left: 20,
        //         bottom: 5,
        //     }}
        //     >
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <XAxis dataKey="name" />
        //         <YAxis />
        //         <Tooltip />
        //         <Legend />
        //         <Bar dataKey="pv" fill="#8884d8" />
        //         <Bar dataKey="uv" fill="#82ca9d" />
        //         </BarChart>
        //     </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//         </div>
//     </main>
//   )
// }

// export default Home