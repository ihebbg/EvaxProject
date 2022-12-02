import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { BrowserRouter , Route, Switch } from "react-router-dom";
import Dashboard from './components/dashboard/dashboard';
import{getAllPersonne} from './redux/Actions/PersonneActions';
import{getAllvolontaires} from'./redux/Actions/VolontaireActions';
import Navbar from './components/navbar/navbar';
import Contact from './components/Contact/contact';
import DashboardAdmin from './components/DashboardAdmin/DashboardAdmin';
import Print from './components/printAttestation/printAttestation'
import RegisterModal from './components/Inscription/inscription';
import AllVolontaire from'./components/volontaire/AllVolontaire';
import EspaceCitoyen from './components/EspaceCitoyen/EspaceCitoyen';
import ModifInscrit from './components/Inscription/ModifInscrit';
import SuccessModif from './components/Inscription/SuccessModif';





import AllCenter from './components/center/AllCenter'


import { addcenter, getAllCenters } from './redux/Actions/CenterActions'
function App() {
 
   const dispatch = useDispatch()
   const getVolontaires =() => dispatch(getAllvolontaires())
   const getPersonnes = () => dispatch(getAllPersonne())
   const AddCenter = () => dispatch(addcenter)
   const registerUser = () => dispatch(registerUser)
   const GetCenters = () => dispatch(getAllCenters())
   useEffect(() => {
       getPersonnes()
       AddCenter()
       GetCenters()
       getVolontaires()
   }, [])

  
  return (
  
<div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Dashboard} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/DashboardAdmin' component={DashboardAdmin} />
          <Route exact path='/inscrit' component={RegisterModal} />

         <Route exact component={AllCenter} path='/admin/centers' />
          <Route exact path='/print' component={Print} />
          <Route component={AllVolontaire} path='/admin/volontaires'/>
          <Route component={EspaceCitoyen} path='/EspaceCitoyen'/>
          <Route component={ModifInscrit} path='/ModifInscrit'/>
          <Route component={SuccessModif} path='/Success'/>
        </Switch>
      </BrowserRouter>
    
   
</div>
   

  )
}

export default App
