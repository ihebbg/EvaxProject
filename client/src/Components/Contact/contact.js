import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import './contact.css';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import {PhoneTwoTone,MobileTwoTone,MailTwoTone,EnvironmentTwoTone } from '@ant-design/icons';
import { Carousel } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
const Contact = () => {
 
  

  return (
    <Layout>
   
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
   

   <br></br>
   <br></br>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
      <div class="container">
  <div class="row">
  <div class="col-md-6">
  <h3>Contactez nous pour plus d'information.</h3>
  </div>
 <div class="col-md-6">
 <h3>Voulez-vous vous inscrire ?</h3>
 </div>
  </div>
  <br></br>
  <br></br>
  <div class="row">
  <div class="col-md-6">
  <h5 className='Content' >Appel Gratuit : Centre d'appel disponible Du lundi au Vendredi de 09h à 17h.</h5>
  </div>
 <div class="col-md-6">
 <h5 className='Content' >Pour vous inscrire vous pouvez :</h5>
 </div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-6">
  <h5 className='Content' ><PhoneTwoTone twoToneColor='red'  style={{ fontSize: '25px' }} />

+(216) 8010 20 21

</h5>
  </div>
 <div class="col-md-6">
 <h5 className='Content' ><MobileTwoTone twoToneColor='red'  style={{ fontSize: '25px' }}/>Composer le #2021*

</h5>
 </div>
  </div>
<br></br>

  <div class="row">
  <div class="col-md-6">
  <h5 className='Content' ><EnvironmentTwoTone twoToneColor='red'  style={{ fontSize: '25px' }} />

  www.evax.tn

</h5>
  </div>
 <div class="col-md-6">
 <h5 className='Content' ><MailTwoTone  twoToneColor='red'  style={{ fontSize: '25px' }}/>
Envoyer un SMS à 85 355



</h5>
 </div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-6">

  </div>
 <div class="col-md-6">
 <h5 className='Content' ><PhoneTwoTone  twoToneColor='red'  style={{ fontSize: '25px' }}/>
 Appeler le 8010 2021 du lundi au vendredi de 09h à 17h





</h5>
 </div>
  </div>
  <br></br>
  <div class="row">
  <div class="col-md-6">

  </div>
 <div class="col-md-6">
 <h5 className='Content' ><EnvironmentTwoTone twoToneColor='red'  style={{ fontSize: '25px' }} />
 
Visiter notre site Evax




</h5>
 </div>
  </div>
 </div>
 </div>

    </Content>
    <br></br>
  </Layout>
  
  );
};

export default Contact;
