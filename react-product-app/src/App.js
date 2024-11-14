// src/App.js
import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';  // Si vous voulez ajouter des styles personnalisés
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 import 'bootstrap/dist/css/bootstrap.min.css'


const myName = "Malek";

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} className='w-50'>
      <Image/>
  {/*<Card.Img variant="top" src="https://th.bing.com/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?rs=1&pid=ImgDetMain" />*/}
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text><Description/></Card.Text>
        <Card.Text><Price/>
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      {/* Message de bienvenue */}
      <div style={{ marginTop: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <h3>Bonjour{myName ? `, ${myName}` : ''}!</h3>
      </div>
    </Card>
  );
}

export default BasicExample;

