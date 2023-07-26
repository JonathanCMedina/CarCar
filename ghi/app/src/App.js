import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from './ManufacturerList';
import ModelList from './ModelList';
import ManufacturerForm from './ManufacturerForm';
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import TechnicianList from './TechnicianList';
import TechnicianForm from './TechnicianForm';
import AppointmentList from './AppointmentList';
import AppointmentListHistory from './AppointmentListHistory';
import AppointmentForm from './AppointmentForm';
import SalespeopleList from './SalespeopleList';
import SalespersonForm from './SalespersonForm';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import SalesList from './SalesList';
import SaleForm from './SaleForm';


function App()
{
  const [manufacturers, setManufacturers] = useState([]);
  const [models, setModels] = useState([]);
  const [autos, setAutos] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [salespeople, setSalesperson] = useState([]);
  const [customers, setCustomer] = useState([]);
  const [sales, setSales] = useState([]);

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
  async function getAutos()
  {
    const url = "http://localhost:8100/api/automobiles/";
    const response = await fetch(url)
    if (response.ok)
    {
      const data = await response.json();
      setAutos(data.autos);
    } else
    {
      console.error('An error has occurred fetching the data')
    }
  }
  async function getTechnicians()
  {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url)
    if (response.ok)
    {
      const data = await response.json();
      setTechnicians(data.technicians);
    } else
    {
      console.error('An error has occurred fetching the data')
    }
  }
  async function getAppointments()
  {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url)
    if (response.ok)
    {
      const data = await response.json();
      setAppointments(data.appointments);
    } else
    {
      console.error('An error has occurred fetching the data')
    }
  }

  async function fetchSaleList() {
      const response = await fetch('http://localhost:8090/api/sales/');
      // if (!response.ok){
      //     setSales([]);
      //     return;
      // }
      if (response.ok) {
      const saleListData = await response.json();
      setSales(saleListData.sales)
      } else {
        console.error('Error fetching sale list data')
      }
  }
  async function fetchSalespeople() {
    const response = await fetch('http://localhost:8090/api/salespeople/');
    if (response.ok){
      const salespersonListData = await response.json();
      setSalesperson(salespersonListData.salespeople)
    } else {
      console.error('Error fetching salespeople data')
    }
  }
  async function fetchCustomers() {
    const response = await fetch('http://localhost:8090/api/customers/');
    if (response.ok){
      const customerListData = await response.json();
      setCustomer(customerListData.customers)
    } else {
      console.error('Error fetching customer data')
    }
    }


  useEffect(() =>
  {
    getManufacturers();
    getModels();
    getAutos();
    getTechnicians();
    getAppointments();
    fetchSalespeople();
    fetchSaleList();
    fetchCustomers();
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
          <Route path="automobiles/">
            <Route index element={<AutomobileList autos={autos} />} />
            <Route path="new" element={<AutomobileForm getAutos={getAutos} />} />
          </Route>
          <Route path="technicians/">
            <Route index element={<TechnicianList technicians={technicians} />} />
            <Route path="new" element={<TechnicianForm getTechnicians={getTechnicians} />} />
          </Route>
          <Route path="appointments/">
            <Route index element={<AppointmentList appointments={appointments} />} />
            <Route path="new" element={<AppointmentForm getAppointments={getAppointments} />} />
            <Route path="history" element={<AppointmentListHistory appointments={appointments} />} />
          </Route>
          <Route path="salespeople/">
            <Route index element={<SalespeopleList salespeople={salespeople} />} />
            <Route path="new" element={<SalespersonForm fetchSalespeople={fetchSalespeople} />} />
          </Route>
          <Route path="customers/">
            <Route index element={<CustomerList customers={customers} />} />
            <Route path="new" element={<CustomerForm fetchCustomers={fetchCustomers} />} />
          </Route>
          <Route path="sales/">
            <Route index element={<SalesList sales={sales} />} />
            <Route path="new" element={<SaleForm fetchSaleList={fetchSaleList} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
