import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'antd';
import './EspaceCitoyen.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { FileTwoTone,EditTwoTone,ContactsTwoTone} from '@ant-design/icons';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';




const { Header, Content, Footer } = Layout;
const EspaceCitoyen =  () => {
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
   <br></br>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
      <div class="container">
     <br></br> <br></br> <br></br>
  <div class="row">
  <div class="col-md-4">
    
  <FileTwoTone twoToneColor= "#acacac" style={{ fontSize: '80px' }} />
    
  
 </div>
 <div class="col-md-4">
 <EditTwoTone twoToneColor= "#acacac" style={{ fontSize: '80px' }}/>
 
  </div>
  <div class="col-md-4">
  <ContactsTwoTone twoToneColor= "#acacac" style={{ fontSize: '80px' }} />
 
  </div>

  </div>
 
 <br></br>
  <div class="row">
  <div class="col-md-4">
    
  <Button type="danger" href='/print'>
      Imprimer attestation
    </Button>
    
  
 </div>
 <div class="col-md-4">
 <Button type="danger" href='/ModifInscrit' >
      Modifier inscription
    </Button>
 
  </div>
  <div class="col-md-4">

  <Button type="danger"  >
      reporter rendez-vous
    </Button>
  </div>

  </div>
 

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

export default EspaceCitoyen;
