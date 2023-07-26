import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import ManufacturerForm from './ManufacturerForm';
import ModelForm from './ModelForm';


function App()
{
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);

  async function getManufacturers()
  {
    const url = "http://localhost:8100/api/manufacturers/";
    const response = await fetch(url)
    if (response.ok)
    {
      const data = await response.json();
      setManufacturers(data.manufacturers);
    } else
    {
      console.error('An error has occurred fetching the data')
    }
  }
  async function getModels()
  {
    const url = "http://localhost:8100/api/models/";
    const response = await fetch(url)
    if (response.ok)
    {
      const data = await response.json();
      setModels(data.models);
    } else
    {
      console.error('An error has occurred fetching the data')
    }
  }

  useEffect(() =>
  {
    getManufacturers();
    getModels();
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturers/">
            <Route index element={<ManufacturerList manufacturers={manufacturers} />} />
            <Route path="new" element={<ManufacturerForm getManufacturers={getManufacturers} />} />
          </Route>
          <Route path="models/">
            <Route index element={<ModelList models={models} />} />
            <Route path="new" element={<ModelForm getModels={getModels} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
