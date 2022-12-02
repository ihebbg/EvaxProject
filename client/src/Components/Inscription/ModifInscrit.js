import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Card } from 'antd';
import './ModifInscrit.css';
import 'antd/dist/antd.css';
import {browserHistory} from 'react-router';
import { Link } from 'react-router-dom';
import { SmileTwoTone,QuestionCircleTwoTone,ProjectTwoTone,InfoCircleTwoTone,PhoneTwoTone,SoundTwoTone,TrophyTwoTone} from '@ant-design/icons';
import { Carousel } from 'antd';
import { Layout,Form,Input, Button } from 'antd';
import { ScaleTypes } from '@antv/l7-core';
import{edituser} from'../../redux/Actions/PersonneActions'

const { Header, Content, Footer } = Layout;
const ModifInscrit = () =>  {
    const [form] = Form.useForm()
    // const Personne = await state.personneReducer.personne;
    const Personne ={
        _id:"61c4f6e543b8564da162d5d2",
        numInscription:"5666",
        nom:"test",
        prenom:"chayma",
        email:"mohamedcghjhayma@gmail.com",
        cin:"079958924",
        password:"fffkddld",
        phone:"25456789",
        adress:"manouba",
        codeVerif:"hghkjljk",
        doses:2,
        Nomvaccin:"pfizer"
    }
    const dispatch = useDispatch();
    const [email, setEmail] = useState(Personne.email);
    const [phone, setPhone] = useState(Personne.phone);
    const [password, setPassword] = useState(Personne.password);
    console.log(Personne);

    const editInscription = () => {
        const modifiedInscription = {
         
          email,
          phone,
          password,
        };
       
        dispatch(edituser(Personne._id, modifiedInscription));
     };
    const em="hgjklm"
console.log(em)
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
      <div className='row justify-content-center'>
                    <div className='col-md-7'>
                        <div className='card'>
                            <div className='card-header'>
                                {' '}
                                <h4>Modifier l'inscription</h4>
                            </div>
                            <div className='card-body'>
                            <Form
                    layout='vertical'
                    form={form}
                  
                >
                <div class="row">
                    <div class="col-md-4">
                    <span> Numéro d'inscription:</span>
                    </div>
                    <div class="col-md-8">
                    <input
                    disabled
                        type='text'
                        id='numInscription'
                        name='numInscription'
                        defaultValue={Personne.numInscription}
                        className='form-control'
                        
                        
                    />
                    </div></div>
                    <br></br>
                    <div class="row">
                    <div class="col-md-4">
                    <span> Nom:</span>
                    </div>
                    <div class="col-md-8">
                    <input
                    disabled
                        type='text'
                        id='nom'
                        name='nom'
                        defaultValue={Personne.nom}
                        className='form-control'
                      
                    /><br></br>
                    </div></div>
                    <div class="row">
                    <div class="col-md-4">
                      <span> Prénom:</span>
                      </div>
                      <div class="col-md-8">
                    <input disabled
                        type='text'
                        id='prenom'
                        name='prenom'
                        defaultValue={Personne.prenom}
                        className='form-control'
                        
                        
                    /></div></div><br></br>
                    <div class="row">
                    <div class="col-md-4">
                        <span> Email:</span>
                        </div>
                        <div class="col-md-8">
                    <input
                        type='email'
                        id='email'
                        name='email'
                        defaultValue={email}
                        className='form-control'
                        onChange={(e) => setEmail(e.target.value)}
                        
                    /></div></div>
                    <br></br>
                      <div class="row">
                    <div class="col-md-4">
                    <span> Cin:</span>
                    </div>
                    <div class="col-md-8">
                    <input
                    disabled
                        type='cin'
                        id='cin'
                        name='cin'
                        defaultValue={Personne.cin}
                        className='form-control'
                       
                        
                    /></div></div>
                    <br></br>
                    <div class="row">
                    <div class="col-md-4">
                     <span> password:</span>
                     </div>
                     <div class="col-md-8">
                    <input
                
                        type='password'
                        id='password'
                        name='password'
                        defaultValue={password}
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                    /></div></div>
                    <br></br>
                    <div class="row">
                    <div class="col-md-4">
                      <span> phone:</span>
                      </div>
                      <div class="col-md-8">
                    <input
                
                        type='phone'
                        id='phone'
                        name='phone'
                        defaultValue={phone}
                        className='form-control'
                        onChange={(e) => setPhone(e.target.value)}
                    /></div></div>
                    <br></br>
                
                  
                </Form>
                <Button color='primary' className='confirm'  onClick={editInscription} href='/Success'>
            confirmer
          </Button>{' '}
          <Button className='Annuler' href='/EspaceCitoyen'>
            Annuler
          </Button>   
                            </div>
                        </div>
          
                    </div>
                </div>
                </>
}

 </div>
 </div>

    </Content>
    <br></br>
  </Layout>
  
  );
};

export default ModifInscrit
