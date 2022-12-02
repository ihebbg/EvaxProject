
import React from 'react';
import 'antd/dist/antd.css';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


const Navbar = () => {
  const history = useHistory();
  const ContactPath = () => {
    history.push('/contact')
    window.location.reload(false);
  }
  const EspacePath = () => {
    history.push('/EspaceCitoyen')
    window.location.reload(false);
  }
 const AccueilPath = () => {
    history.push('/home')
    window.location.reload(false);
  }
    return (
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      
      
        <Menu theme="light" mode="horizontal" >
          
          <Menu.Item key="1" onClick={AccueilPath} >Accueil</Menu.Item>
          <Menu.Item key="2" >s'inscrire</Menu.Item>
          <Menu.Item key="3" onClick={ContactPath} >Contactez nous</Menu.Item>
          <Menu.Item key="4">Inscription pharmacie</Menu.Item>
          <Menu.Item key="5" onClick={EspacePath} >Espace citoyen</Menu.Item>
        </Menu>
      </Header>
      </Layout>
    );
  };
  
  export default Navbar;
  