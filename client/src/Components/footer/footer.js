import React from 'react';
import { Card } from 'antd';
import './footer.css';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
 
  return (
      <Layout>
     
   
      <Footer style={{ textAlign: 'center' }}>
          <div class="row"></div>
          <div class="row">Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales Politique de confidentialité .Vous acceptez volontairement les termes et conditions fournis.</div>
          <div class="row">EVAX est le résultat d'un travail et d'un engagement patriotique commun des équipes du CNI, ISIE, CIMS, ANSI, les opérateurs (TT, Ooredoo et Orange), Ministère de la Santé et le Ministère des Technologies de la Communication. Lorsque vous cliquez sur le bouton "Ajouter une demande d'inscription" de votre formulaire de demande d'inscription sur evax.tn, vous indiquez que vous connaissez les conditions générales. Politique de confidentialité . Vous acceptez volontairement les termes et conditions fournis. République de Tunisie - Ministère de la Santé - Portail d’inscription à la campagne de vaccination contre la COVID 19</div>
          <div class="row">Tous droits réservés © 2021</div>
      </Footer>
    </Layout>
    );
  };
  
  export default FooterComponent;
  