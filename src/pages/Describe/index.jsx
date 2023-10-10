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
    const [comics, setComics] = useState([]);

    useEffect(() => {

        requestMarvel(`characters/${id}`).then(response => setData(response.data.results))
        requestMarvel(`characters/${id}/comics`).then(response => setComics(response.data.results))
        
    }, [])

    return (
        
        <div>
            <NavBar/>
            <div className="p-4">
                {data.map(( d, index) => (
                    <div key={index} className="d-flex flex-column">
                        <div className="d-flex">
                            <div className="p-2">
                                <img style={{width: "500px"}} src={`${d.thumbnail.path}.${d.thumbnail.extension}`} />
                            </div>
                            <div className="p-2 w-100 d-flex flex-column justify-content-center align-items-center">
                                <h1 className="bangers">{d.name}</h1>
                                <p>{d.description}</p>
                            </div>
                        </div>

                        {comics.length > 0 ? <h1 className="bangers p-2">Comics</h1> : ''}

                        <div className="d-flex flex-row flex-wrap">
                            {comics.map((commic, commicindex) => (
                                <div className="p-2" key={commicindex}>
                                    <img style={{width: "200px"}} src={`${commic.thumbnail.path}.${commic.thumbnail.extension}`} />
                                </div>
                            ))}
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
