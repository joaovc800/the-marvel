import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
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

  /* onAuthStateChanged(auth, (user) => {
    if(!user) navigate("/")
  }) */

  if (loading) {
    return <p>loading...</p>;
  }

  if (user) navigate("/home")

  const onSubmit = data => {
    
    signInWithEmailAndPassword(email, password);

  }

  //console.log(watch("email"));

  return (
    <div className="container">
      <header className="header">
        <img  src={logoImg} alt="Workflow" className="logoImg" />
        <span>Por favor digite suas informações de login</span>
      </header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            {...register("email")}
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="error-message">{errors.email?.message}</p>
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password")}
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="error-message">{errors.password?.message}</p>
        </div>

        <a href="#">Esqueceu sua senha ?</a>

        <button type="submit" className="button">
          Entrar <img src={arrowImg} alt="->" />
        </button>
        <div className="footer">
          <p>Você não tem uma conta?</p>
          <Link to="/register">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
