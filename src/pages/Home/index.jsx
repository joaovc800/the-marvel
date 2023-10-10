import { useState, useEffect } from "react";
import NavBar from '../../components/nav';
import Footer from '../../components/footer';
import requestMarvel from '../../services/request';
import "./styles.css";

export function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {

         const offset = parseInt(Math.random() * 100)

        // requestMarvel('characters', {
        //     "offset": offset
        // }).then(response => setData(response.data.results))

        fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(response => setData(response.data.results))
        
    }, [])

    return (
        
        <div>
            <NavBar/>
            <div className="p-4">
                <h1 className="character-list bangers">Lista de personagens da marvel</h1>
                <div className="character-list">    
                    {data.map(( d, index) => (
                        <a key={index} href={"/describe/" + d.id}>
                            <div className="character">
                                <img src={`${d.thumbnail.path}.${d.thumbnail.extension}`} />
                                <div className="character__name">{d.name}</div>  
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
