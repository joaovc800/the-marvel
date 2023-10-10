import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import "./styles.css";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


const validation = yup.object().shape({
  username: yup.string().required("Nome é obrigatório"),
  password: yup.string().required("Link da imagem é obrigatória")
})


export function Register() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  });

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(data) {
    //data.preventDefault()
    createUserWithEmailAndPassword(data.username, data.password)
    window.location = '/'
  }

  if (loading) {
    return  (
      <div className="container">
        <Spinner variant="dark" style={{width: '7rem', height: '7rem'}} animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
      )
  }

  return (
    <div className="limiter">
      <div className="container-login100 bg-img2" >
        <div className="wrap-login100 p-t-30 p-b-50">
          <span className="bangers fs-1 text-center text-light">
            Cadastre-se
          </span>
          <Form onSubmit={handleSubmit(handleSignOut)} className="login100-form validate-form p-b-33 p-t-5">
            <div className="d-flex flex-column p-4">
              <Form.Group className="py-3" controlId="username-form">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="text" {...register("username")} name="username" placeholder="name@example.com"></Form.Control>
              </Form.Group>
              <Form.Group className="py-3" controlId="password-form">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" {...register("password")} name="password" placeholder="******"></Form.Control>
              </Form.Group>
              <Button type="submit" className="mt-4 btn btn-primary">
                Criar usuário
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
