import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import './DashboardAdmin.css';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { SmileTwoTone,QuestionCircleTwoTone,ProjectTwoTone,InfoCircleTwoTone,PhoneTwoTone,SoundTwoTone,TrophyTwoTone} from '@ant-design/icons';
import { Carousel } from 'antd';
import { Pie } from '@ant-design/charts';
import { Layout, Menu, Breadcrumb } from 'antd';
import { RingProgress } from '@ant-design/charts';


const { Header, Content, Footer } = Layout;
const DashboardAdmin =  () => {
 
  useSelector(async (state) =>{
    const Centers = await state.centerReducer.centers
    global.Centers = await Centers;
    setTimeout(() => {
    const C = global.Centers.length;
      global.C=C;
      
      
      }, 300);
  })
  useSelector(async (state) =>{
    const Volontaires = await state.volontaireReducer.volontaires
    global.Volontaires = await Volontaires;
    setTimeout(() => {
    const V = global.Volontaires.length;
      global.V=V;
      
      
      }, 300);
  })

   useSelector(async (state) =>{
    const Personnes = await state.personneReducer.personnes;
    global.Personnes= await Personnes;
  

   
    setTimeout(() => {
   const P =  global.Personnes.length;
    global.P = P;
   }, 300);
    return Personnes;
    });
    
   
    const doseUne =0;
    global.doseUne=doseUne;
    const doseDeux =0;
    global.doseDeux=doseDeux;
    const Nonvaccine =0;
    global.Nonvaccine=Nonvaccine;
  
    for (var i = 0; i < global.P; i++) {
      
      if(global.Personnes[i].doses==1){
       
        global.doseUne=  global.doseUne + 1;
        

      }  else if (global.Personnes[i].doses==2){
        global.doseDeux= global.doseDeux + 1;


      }else if (global.Personnes[i].doses==0){
        global.Nonvaccine=global.Nonvaccine + 1;
        console.log(global.Nonvaccine,'tessst')
        
        


      }
  } 
    
     const a = true;
     global.a =  a;
     console.log(a);


  //chart config ( vacciné , 1ere dose , deuxième dose)
  const contentStyle = {
    height: '190px',
    color: '#8B0000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#f6f6f6',
  };
  const data = [
    {
      type: ' vaccinés 1ère dose',
      value: global.doseUne,
    },
    {
      type: 'vaccinés 2ème dose',
      value: global.doseDeux,
    },
    {
      type: 'non vaccinés',
      value: global.Nonvaccine,
    },

  ];
  const config = {
    appendPadding: 7,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.7,
    label: {
      type: 'outer',
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };
  // pourcentage des vaccinés
  const Pourcentage = (global.doseDeux + global.doseUne) / (global.doseDeux + global.doseUne + global.Nonvaccine)
  console.log(Pourcentage);
  const config1 = {
    height: 200,
    width: 200,
    autoFit: true,
    percent: Pourcentage,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '30px',
        },
        formatter: () => 'Personnes vaccinés',
      },
    },
  };
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);
  
  return (
    <Layout>
   
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
   

   <br></br>
   <br></br>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
      <div class="container">
      {isDisplayed &&
              <>
  <div class="row">
  <div class="col-md-3">
    
    <p className='nbi'>Nombre d'inscrits : </p>
    <p className='nbi'>
    {global.P}
    
   
    </p>
    <p className='nbi'>
  
    </p>
    <p className='nbi'>Nombre des centres : </p>
    <p className='nbi'>
    {global.C}
    
   
    </p>
    <p className='nbi'>Nombre des Volontaires : </p>
    <p className='nbi'>
    {global.V}
    
   
    </p>
  
    <p className='nbi'>
  
    </p>
    
  
 </div>
 <div class="col-md-9">
 <Pie {...config} />
 
  </div>

  </div>
  </>}
  {isDisplayed &&
              <>
  <div class="row">
  <div class="col-md-3">
  
    
 </div>
 <div class="col-md-9">
 <RingProgress {...config1} />
 
  </div>
 
  </div>
  </>}
  <br></br>
  <br></br>
 
  <br></br>
  
  <br></br>
 
 </div>
 </div>

    </Content>
    <br></br>
  </Layout>
  
  );
};

export default DashboardAdmin;
