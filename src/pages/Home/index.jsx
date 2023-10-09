import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
/* import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.jpg"; */
/* import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup' */
import * as yup from 'yup'
import "./styles.css";

const validation = yup.object().shape({
  email: yup.string().required("E-mail é obrigatório"),
  password: yup.string().required("Senha é obrigatória")
})

export function Home() {

  const navigate = useNavigate()

  /* const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  }); */

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  onAuthStateChanged(auth, (user) => {

    if(!user.uid){
      //Verificar se está logado, se estiver vai para pagina inicial
      navigate("/")
    }
  })

  if (loading) {
    return <p>loading...</p>;
  }
  if (user) {
    return console.log(user);
  }


  return (
    <div className="container">
      
    </div>
  );
}
