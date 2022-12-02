import React, { useState } from 'react';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Input, Button, Checkbox, Space, Select   } from 'antd';
import { FormInstance } from 'antd/es/form';
import './inscription.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
/*import {
  Modal,
  ModalHeader,
  ModalBody,
 
  FormGroup,
  Label,

  NavLink,
  CustomInput,
} from 'reactstrap';*/
import { registerUser } from '../../redux/Actions/PersonneActions'; 

const RegisterModal = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };




  //const [modal, setModal] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [cin, setCin] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('visiteur');

  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = () => {
    const newUser = {
      nom,
      prenom,
      cin,
      email,
      password,
      adress,
      role,
      phone,
    };
    dispatch(registerUser(newUser));
    history.push('/dashboard');// elle passe directe au dashbord 
    setEmail('');
    setNom('');
    setPrenom('');
    setPassword('');
    setAdress('');
    setPhone('');
    setCin('');
    setRole('visiteur');


  };

  const { Option } = Select;

 

  return (
    <>
    <div className='container center-form'>
                <div className='row justify-content-center'>
                    <div className='col-md-7'>
                        <div className='card'>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
       <div className='col-md-7'>
      <div className='col-md-2'>
      Nom : 
      </div >
  <div className='col-md-5'>
      <Form.Item
              Label ="name"
              name="name"
              value={nom}
          
              onChange={(e) => setNom(e.target.value)}
              rules={[
                {
                  required: false,
                  message: 'Please input your username!',
                },
              ]}
            >             
                <Input />
              </Form.Item>
              </div>
              </div>
              <div className='col-md-7'>
      <div className='col-md-2'>
      prenom : 
      </div >
  <div className='col-md-5'>

              <Form.Item
              Label ="lastName"
              name="lastName"
              value={prenom}
              rules={[{ required: true, message: 'Please input your username!' }]}
       
              onChange={(e) => setPrenom(e.target.value)}
              >
                <Input />
              </Form.Item>
              </div>
              </div>
              <div className='col-md-7'>
             <div className='col-md-2'>
              num de cin : 
              <div className='col-md-5'>
              <Form.Item
              Label ='CIN'
              name="CIN"
              value={cin}
              rules={[{ required: true, message: 'Please input your CIN!' }]}
      
              onChange={(e) => setCin(e.target.value)}
              >
                <Input />
              </Form.Item>
</div></div></div>
              <Form.Item
              Label ="email"
              name="email"
              value={email}
              rules={[{ required: true, message: 'Please input your email!' }]}
              className='mb-3'
              onChange={(e) => setEmail(e.target.value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
              Label ='password'
              name="password"
              value={password}
              rules={[{ required: true, message: 'Please input your password!' }]}
            
              onChange={(e) => setPassword(e.target.value)}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
              Label ='adresse'
              name="adresse"
              value={adress}
              rules={[{ required: true, message: 'Please input your adresse!' }]}
         
              onChange={(e) => setAdress(e.target.value)}
              >
                <Input />
              </Form.Item>
           
              <Form.Item
              Label ="telephone"
              name="phone"
              value={phone}
              rules={[{ required: true, message: 'Please input your password!' }]}
              className='mb-3'
              onChange={(e) => setPhone(e.target.value)}
              >
                <Input />
              </Form.Item>


              <Form.Item label="role">
             <Select>
             <Select.Option value="test" onChange={(e) => setRole(e.target.value)}  >test</Select.Option>
           
             </Select>
             </Form.Item>
            
              
              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
               </Form.Item>
               <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit"  onClick={registerUser}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>
    </div>
    </> 
     
  );
};

export default RegisterModal;
