import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import NavBar from '../../components/nav';
import md5 from 'md5';
import requestMarvel from '../../services/request';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./styles.css";

export function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const offset = parseInt(Math.random() * 100)

        requestMarvel('characters', {
            "offset": offset
        }).then(response => setData(response.data.results))
        
    }, [])

    return (
        
        <div>
            <NavBar/>
            <div className="p-4">
                <h1>Lista de personagens da marvel</h1>
                <Row xs={1} md={2} className="g-4">
                    {data.map(( d, index) => (
                        <div key={index} className="d-flex col-lg-2 col-md-6 col-sm-12 py-2">
                            <Card>
                                <a className="nav-link tumbnail" href={"/describe/" + d.id}>
                                    <Card.Img 
                                        className="image-tumb"
                                        style={{minHeight : "200px"}}
                                        variant="top" 
                                        src={`${d.thumbnail.path}.${d.thumbnail.extension}`}
                                    />
                                </a>
                                <Card.Body>
                                    <Card.Title>{d.name}</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Row>
            </div>
        </div>
    );
}
