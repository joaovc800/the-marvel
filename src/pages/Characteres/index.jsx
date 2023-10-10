import { useState, useEffect } from "react";
import { useParams  } from "react-router-dom";
import NavBar from '../../components/nav';
import Footer from '../../components/footer';
import requestMarvel from '../../services/request';
import { Row, Col, Container, Card } from "react-bootstrap";
/* import "./styles.css"; */


export function Characteres() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/my-characteres')
        .then(response => response.json())
        .then(response => setData(response))
    }, [])

    return (
        
       
        <div>
            <NavBar/>
                <div className="p-4">
                    <h1 className="character-list bangers">Meus personagens</h1>
                    <div style={{height: '57vh'}} className="character-list">
                        {data.length > 0
                            ? (
                                data.map(( d, index) => (
                            
                                    <div key={index} className="character">
                                        <img src={d.link} />
                                        <div className="character__name">{d.name}</div>  
                                    </div>
                                 
                                ))
                            )
                            : <p>Ainda não existem personagens criado. <a href="/characteres/create">Gostaria de criar ?</a></p>
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
