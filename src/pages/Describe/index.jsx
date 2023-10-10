import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useParams  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import NavBar from '../../components/nav';
import requestMarvel from '../../services/request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

/* import "./styles.css";
 */
export function Describe() {
    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {

        requestMarvel(`characters/${id}`).then(response => setData(response.data.results))
        
    }, [])

    return (
        
        <div>
            <NavBar/>
            <div className="p-4">
                
                <Row xs={1} md={2} className="g-4">
                    {data.map(( d, index) => (
                        <div key={index}>
                            <h1>{d.name}</h1>
                            <div className="d-flex py-2">
                                <Card>
                                    <Card.Img variant="top" src={`${d.thumbnail.path}.${d.thumbnail.extension}`}/>
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
        </div>
    );
}
