import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useParams  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import NavBar from '../../components/nav';
import requestMarvel from '../../services/request';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

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
            <div className="p-4">
                {data.map(( d, index) => (
                    <div key={index}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <img className="img-describe" src={`${d.thumbnail.path}.${d.thumbnail.extension}`} />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
                                <h1 style={{fontSize: "35px"}} className="bangers">{d.name}</h1>
                                <p>{d.description}</p>
                            </div>
                        </div>      

                        {comics.length > 0 ? <h1 className="my-2 bangers">Comics</h1> : ''}

                        <div className="comics-list">
                            {comics.map((comic, comicindex) => (
                                <div style={{alignSelf: "stretch"}} className="d-flex w-100-comic" key={comicindex}>
                                    <a title={comic.title} style={{alignSelf: "stretch"}} className="d-flex" target="_blank" href={comic.urls[0].url}>
                                        <img className="img-comics" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                                        {/* <p className="bangers my-2">{comic.title}</p> */}
                                    </a>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
