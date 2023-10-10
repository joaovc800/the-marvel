import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import NavBar from '../../components/nav';
import Footer from '../../components/footer';
import requestMarvel from '../../services/request';
import { Row, Col, Container, Form, Button, Card, Alert} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import "../Home/styles.css";

const validation = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    link: yup.string().required("Link da imagem é obrigatória")
})


export function CharacteresCreate() {

    const [success, setSuccess] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    const onSubmit = async data => {

        const request = await fetch('http://localhost:3000/my-characteres', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const response = await request.json()

        if(response){
            setSuccess(true)
        }
    }

    return (
        
        <div>
            <NavBar/>
                <div style={{ height: '70vh' }} className="d-flex align-items-center justify-content-center">
                    <Card style={{ width: '30rem', height: 'auto'}}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Header>
                            Cadastre seu personagem
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
                                <Form.Group className="mb-3" controlId="form-name">
                                    <Form.Label>Nome do personagem</Form.Label>
                                    <Form.Control {...register("name")} name="name" type="text" placeholder="Nome do personagem" />
                                    <div className="badge bg-danger mt-2">{errors.name?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form-link-imagem">
                                    <Form.Label>Link da imagem</Form.Label>
                                    <Form.Control {...register("link")} name="link" type="text" placeholder="Link da imagem" />
                                    <div className="badge bg-danger mt-2">{errors.link?.message}</div>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form-name">
                                    <Form.Label>Descrição do personagem</Form.Label>
                                    <textarea className="form-control"{...register("describe")} name="describe" placeholder="Descrição do personagem"/>
                                    <div className="badge bg-danger mt-2">{errors.describe?.message}</div>
                                </Form.Group>

                                <Button className="w-100" variant="primary" type="submit">
                                    Cadastrar
                                </Button>

                                {
                                success ? 
                                    <Alert className="mt-4 text-center" variant="success">
                                        <p>
                                            Personagem cadastrado com sucesso!
                                        </p>
                                        <a href="/characteres/list">Listar</a>
                                    </Alert> : ''
                                }

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            <Footer/>
        </div>
    );
}
