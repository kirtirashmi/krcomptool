import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Users from './Users';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [dataVisible, setDataVisible] = useState(false); // Define dataVisible state
  const [data, setData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);

  const onItemSelect = (item) => {
    setSelectedItem(item); // Update the selectedItem state
  };

  const onRunClick = (selectedSource, selectedMissingFrom) => {
    // console.log("Testing", selectedSource, selectedMissingFrom, selectedItem)
    if (selectedSource && selectedMissingFrom && selectedItem) {
      // Send a GET request to the backend with selected data
     // console.log(`Starting the server for resource: ${selectedSource}, ${selectedMissingFrom}, ${selectedItem}` );
      fetch(`/api/index?item=${selectedItem}&source=${selectedSource}&missingFrom=${selectedMissingFrom}`,{
        headers:{
          'Accept':'application/json',
        'Content-Type':'application/json'
        }
      })
        .then(response => response.json())
        .then(value => {
          const objData = value.data;
          console.log(objData);
          const mainData = objData.filter(
            (item) =>
              item.Source === selectedSource || item.Source === selectedMissingFrom
          );
          setData(mainData);
          const newData = objData.filter(
            (item) => item.differences !== undefined
          );
          setAdditionalData(newData);
          // Process the data received from the backend
          setDataVisible(true); // Display data when available
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} onItemSelect={onItemSelect}  />
        <Routes>
          <Route
            path="/Users"
            element={<Users selectedItem={selectedItem} onItemSelect={onRunClick} dataVisible={dataVisible}
            data={data} additionalData={additionalData}/>}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
