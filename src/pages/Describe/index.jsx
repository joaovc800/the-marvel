import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useParams  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import NavBar from '../../components/nav';
import requestMarvel from '../../services/request';
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";


export function Describe() {
    const { id } = useParams();

    const [data, setData] = useState([]);
    const [comics, setComics] = useState([]);

    useEffect(() => {

        requestMarvel(`characters/${id}`).then(response => setData(response.data.results))
        requestMarvel(`characters/${id}/comics`).then(response => setComics(response.data.results))
        
    }, [])

    return (
        
        <div>
            <NavBar/>
            
            <Container className="w-100 h-100">
                {data.map(( d, index) => (
                    <Row key={index}>
                        <Col sm="12" md="6" lg="6">
                            <img className="w-100" src={`${d.thumbnail.path}.${d.thumbnail.extension}`} />
                        </Col>
                        <Col className="d-flex column align-items-center justify-content-center" sm="12" md="6" lg="6">
                            <div>
                                <h1 style={{fontSize: "35px"}} className="bangers">{d.name}</h1>
                                <p>{d.description}</p>    
                            </div>
                        </Col>
                        <Col>
                            {comics.length > 0 ? <h1 className="my-2 bangers">Comics</h1> : ''}
                            <Row>
                                {comics.map((comic, comicindex) => (
                                    <Col className="mb-3" sm="12" md="6" lg="2" key={comicindex}>
                                        <a 
                                            title={comic.title} 
                                            style={{alignSelf: "stretch"}} 
                                            className="d-flex container-comic" 
                                            target="_blank" 
                                            href={comic.urls[0].url}
                                        >
                                            <img className="w-100 img-comics" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                                        </a>
                                    </Col>
                                ))}  
                            </Row>
                            
                        </Col>
                    </Row>
                ))}
            </Container>
            
        </div>
    );
}
