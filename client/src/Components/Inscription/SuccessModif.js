import React, { useEffect, useState }  from 'react';
import './ModifInscrit.css';
import 'antd/dist/antd.css';
import { Layout,Result } from 'antd';


const { Header, Content, Footer } = Layout;
const SuccessModif = () =>  {
  

   
   
 return (
  
    <Layout>
   
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
   

   <br></br>
   <br></br>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
      <div class="container">
      <Result
    status="success"
    title="La modification de l'inscription est effectuée avec succès"
   
  />,

 </div>
 </div>

    </Content>
    <br></br>
  </Layout>
  
  );
};

export default SuccessModif
