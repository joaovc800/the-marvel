import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import logoImg from "../../assets/logo-marvel-256.png";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as yup from 'yup';
import "./styles.css";

const validation = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória")
})

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  });

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


  if (loading) {
    return <p>loading...</p>;
  }

  if (user) navigate("/home")

  const onSubmit = data => signInWithEmailAndPassword(email, password)

  return (

    <div className="bg-img">

      <div className="container">
        {['Dark'].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '30rem' }}
          >
            <Card.Body>
              <header className="header">
                <img src={logoImg} alt="Workflow" className="logoImg" />
                <span className="center">Por favor, digite os seus dados de login</span>
              </header>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="py-3">
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="5">
                    Email
                  </Form.Label>
                  
                    <Form.Control type="text" {...register("email")} onChange={(e) => setEmail(e.target.value)} placeholder="email@exemplo.com" />
                    <div className="badge badge-danger">{errors.email?.message}</div>
                  
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="5">
                    Senha
                  </Form.Label>
                  
                    <Form.Control type="password" {...register("password")} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
                    <div className="badge badge-danger">{errors.password?.message}</div>
                  
                </Form.Group>
                <Form.Group as={Row} className="mb-3 mt-2" controlId="">
                  <Button variant="secondary" type="submit">Acessar</Button>
                </Form.Group>
                <div>
                  <span>Você não tem uma conta? </span>
                  <Link to="/register">Crie a sua conta aqui</Link>
                </div>

                </div>
              </Form>

            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
