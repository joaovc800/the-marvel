import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo-marvel-256.png";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>carregando...</p>;
  }
  return (

    <div >
      
      <Row style={{height: '97vh'}}>
        <Col sm={4} >
          
          
          {['Dark'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '30rem', height: '97vh'}}
              className=""
            >

            <Card.Body>
              <Col md={{ span: 7, offset: 3 }}>
              <header className="header">
                <img src={logoImg} alt="Workflow" className="logoImg" />
                <div className="row">
                  <span className="center">Crie o seu login inserindo os dados abaixo</span>
                </div>
              </header>
              <Form /*onSubmit={handleSubmit(onSubmit)}*/>
                <div className="py-3">

                
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="5">
                    Email
                  </Form.Label>
                
                    <Form.Control type="text" /*{...register("email")} */ onChange={(e) => setEmail(e.target.value)} placeholder="email@exemplo.com" />
                    <p className="error-message">{/*errors.email?.message*/}</p>
                
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5">
                    Senha
                  </Form.Label>
                
                    <Form.Control type="password" /*{...register("password")}*/ onChange={(e) => setPassword(e.target.value)} placeholder="********************" />
                    <p className="error-message">{/*errors.password?.message*/}</p>
                
                </Form.Group>
                
                  <Form.Group as={Row} controlId="">
                    <Button variant="secondary" type="submit">Criar acesso</Button>
                  </Form.Group>
                
                  </div>
              </Form>
              </Col>
              
            </Card.Body>
          </Card>
          ))}   
            
            
        </Col>
        <Col sm={8} className="bg-img2"></Col>
      </Row>
    </div>
    
  );
}
