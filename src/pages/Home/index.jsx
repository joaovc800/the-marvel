import { useState, useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate  } from "react-router-dom";
import { auth, onAuthStateChanged } from "../../services/firebaseConfig";
import NavBar from '../../components/nav';
import requestMarvel from '../../services/request';
import Card from 'react-bootstrap/Card';

import "./styles.css";


function Cards(){
    
    const [data, setData] = useState([]);

    useEffect(() => {
        
       requestMarvel('characters').then(response => {
            setData(response)
       })
       
        
    }, [])

    //const results = data.data
    //console.log(results);
    
    /* return(
        <div>
        {
            results.forEach(element => {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
        }
        </div>
    ) */
}

export function Home() {

    const navigate = useNavigate()

    //const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

   /*  onAuthStateChanged(auth, (user) => {

        if(!user.uid){
        //Verificar se está logado, se estiver vai para pagina inicial
        navigate("/")
        }
    }) */
/* 
    if (loading) {
        return <p>loading...</p>;
    }
    if (user) {
        return console.log(user);
    }
 */
    return (
        
        <div>
            <NavBar/>
            <div className="p-4">
                <Cards></Cards>
            </div>
        </div>
    );
}
