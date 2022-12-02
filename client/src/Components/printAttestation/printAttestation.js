import React, { useRef } from "react";
import { render } from "react-dom";
import { useReactToPrint } from "react-to-print";
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './printAttestation.css';
import { Button } from 'antd';
const { Header, Content, Footer } = Layout;
const Personne={
  nom: 'manel',
  prenom:'ghzaiel',
  Cin:'07993724',
  numInscription:'41455202',

  
}

class ComponentToPrint extends React.Component {

  render() {
    return (
    
        <div className="site-layout-background" style={{ marginBottom:0, minHeight: 600 }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div class="container">
        <div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-12">
<h5>Attestation de vaccination</h5>
  </div>
 
</div>

  </div>
  <div class="col-md-6">
  <div class="row">
<div class="col-md-6">

  </div>
  <div class="col-md-6">

  </div>
</div>
  </div>
 

</div>
<br></br>
     <div class="row">

     <div class="col-md-6">
     <div class="row">
     <div class="col-md-6" style={{ fontWeight:"bold" }}>
    Code Inscription:
       </div>
       <div class="col-md-6">
         {Personne.numInscription}
       </div>
</div>
     
       </div>
       <div class="col-md-6">
       <div class="row">
     <div class="col-md-6">
 
       </div>
       <div class="col-md-6">
     
       </div>
</div>
       </div>
      

     </div>
     <br></br>
     <div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-6" style={{ fontWeight:"bold" }}>
Cin:
  </div>
  <div class="col-md-6">
  {Personne.Cin}
  </div>
</div>

  </div>
  <div class="col-md-6">
  <div class="row">
<div class="col-md-6">

  </div>
  <div class="col-md-6">

  </div>
</div>
  </div>
 

</div>
<br></br>
<div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-6" style={{ fontWeight:"bold" }}>
Nom:
  </div>
  <div class="col-md-6">
    {Personne.nom}
  </div>
</div>

  </div>
  <div class="col-md-6">
  <div class="row">
<div class="col-md-6">

  </div>
  <div class="col-md-6">
 
  </div>
</div>
  </div>
 

</div>
<br></br>
<div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-6" style={{ fontWeight:"bold" }}>
Prénom:
  </div>
  <div class="col-md-6">
    {Personne.prenom}
  </div>
</div>

  </div>
  <div class="col-md-6">
  <div class="row">
<div class="col-md-6">

  </div>
  <div class="col-md-6">
 
  </div>
</div>
  </div>
 

</div>
<br></br>
<div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-6" style={{ fontWeight:"bold" }}>
Statut:
  </div>
  <div class="col-md-6">
   Vacciné
  </div>
</div>

  </div>
  <div class="col-md-6">
  <div class="row">
<div class="col-md-6">

  </div>
  <div class="col-md-6">
 
  </div>
</div>
  </div>
 

</div>

       
          </div>
          </div>
     
        
    );
  }
}

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <div class="row">

<div class="col-md-6">
<div class="row">
<div class="col-md-6">
      <div className="site-button-ghost-wrapper">
      <Button danger onClick={handlePrint}>Imprimer attestation</Button>
      </div>

      </div>
      <div class="col-md-6">

      </div>
      </div>
      <div class="col-md-6"></div>
      </div>
      </div>
    </div>
  );
};

export default Print;