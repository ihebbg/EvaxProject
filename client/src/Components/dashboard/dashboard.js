import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Card } from 'antd';
import './dashboard.css';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { SmileTwoTone,QuestionCircleTwoTone,ProjectTwoTone,InfoCircleTwoTone,PhoneTwoTone,SoundTwoTone,TrophyTwoTone} from '@ant-design/icons';
import { Carousel } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ScaleTypes } from '@antv/l7-core';

const { Header, Content, Footer } = Layout;
const Dashboard = () =>  {
    
    
    useSelector(async (state) =>{
     const Personnes = await state.personneReducer.personnes;
     global.Personnes= await Personnes;
     setTimeout(() => {
     console.log(global.Personnes)
     const P = global.Personnes.length;
     global.P = P;
     console.log(P);

    }, 300);
     
    
     return Personnes;
     });


    
  


 
  var getdate = new Date(),
  date = getdate.getFullYear() + '-' + (getdate.getMonth() + 1) + '-' + getdate.getDate();
  var gethour = new Date(),
  time = gethour.getHours() + ':' + gethour.getMinutes() + ':' + gethour.getSeconds();
  const contentStyle = {
    height: '190px',
    color: '#8B0000',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#f6f6f6',
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
      <Card style={{ width: 250,height: 190 ,color:'#8B0000' }}  hoverable = {true} bordered={true}  
      >
  
  <SmileTwoTone twoToneColor='#8B0000'  style={{ fontSize: '32px' }}/>
    <p className='nbi'>Nombre d'inscrits : </p>
    <p className='nbi'>
  {global.P}
    </p>
    <p className='nbi'>
    {date} {time}
    </p>
    
  </Card>
 </div>
 <div class="col-md-9">
  <Carousel autoplay style={{width:840}}>
    <div>
    <h3 style={contentStyle}>Le vaccin n'est pas une punition, le vaccin est une chance.</h3>

    </div>
    <div>
      <h3 style={contentStyle}>Le vaccin est 95% efficace contre les formes graves.</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Je me protège, je vous protège</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Pour que la vie reprenne. #Jemevaccine</h3>
    </div>
  </Carousel>
  </div>
  </div>
  <br></br>
  <br></br>
  <div class="row">
    <h3>Questions fréquentes sur EVAX</h3>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-4"><h5 className='quation'>Quels sont les grands principes de la stratégie de vaccination contre la COVID-19 ?</h5></div>
  <br></br><div class="col-md-4"><h5 className='quation'>Comment s’enregistrer pour la vaccination Covid-19 ?</h5></div>
  <div class="col-md-4"><h5 className='quation'>Quels sont les objectifs de la vaccination ?</h5></div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-4"><h4><ProjectTwoTone twoToneColor='gray'/></h4><h5 className='Content'>La Tunisie s’est fixé les principes suivants :
un accès équitable pour des vaccins gratuits, efficaces, sûrs et de qualité approuvés par les données scientifiques en temps opportun
une prise de décision personnelle basée sur des données transparentes et compréhensibles</h5></div>
  <div class="col-md-4">
    <h4><PhoneTwoTone twoToneColor='green'/></h4>
    <h5 className='Content'>Website : www.evax.tn
SMS : 85355
USSD : *2021#</h5></div>
  <div class="col-md-4"><h4><TrophyTwoTone twoToneColor='gray' /></h4><h5 className='Content'> Le premier objectif de la vaccination, c’est de faire baisser le nombre des formes graves de COVID-19. Les résultats des études cliniques des candidats vaccins semblent converger pour démontrer un fait principal : la vaccination permet de réduire massivement la mortalité due au virus et à ses formes graves.</h5></div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-4"><h5 className='quation'>La vaccination contre la Covid-19 sera-t-elle gratuite ?</h5></div>
  <br></br><div class="col-md-4"><h5 className='quation'>Où se faire vacciner ?</h5></div>
  <div class="col-md-4"><h5 className='quation'>Que faire en cas de problème lors de l'inscription?</h5></div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-4"><h5 className='Content'><h4><SoundTwoTone twoToneColor='#ffff00'/></h4>Oui. La vaccination sera gratuite pour tous en Tunisie, mais selon la priorité établie par l es autorités.</h5></div>
  <div class="col-md-4">
    <h4><QuestionCircleTwoTone twoToneColor='red' /></h4>
    <h5 className='Content'>Il y aura environ 200 centres de vaccination à raison de :
1 à 2 grand (s) centre(s) par gouvernorat ouvert toute la semaine
Et un centre par délégation à identifier par direction régionale de la santé ouvert le weekend</h5></div>
  <div class="col-md-4"> 
  <h4><InfoCircleTwoTone  twoToneColor='#ffff00'/></h4>
  <h5 className='Content' >
    Un numéro vert gratuit a été mis en place pour accompagner les citoyens tout au long de la campagne de vaccination. Le numéro vert : 80102021, ouvert du lundi au vendredi de 09h à 17h</h5></div>
  </div>
  </>}
 </div>
 </div>

    </Content>
    <br></br>
  </Layout>
  
  );
};

export default Dashboard
