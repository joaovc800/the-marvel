import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import marvelNav from "../assets/marvel-nav.png";
import { auth, signOut, onAuthStateChanged } from '../services/firebaseConfig';
import { useNavigate  } from "react-router-dom";


function signOutApp(){
  signOut(auth).then(() => window.location = '/' )
}

function NavBar() {

 
    

    const navigate = useNavigate()
    onAuthStateChanged(auth, (user) => {
      
      if( user.email){
        localStorage.setItem('user', user.email);
      }
      if(!user) navigate("/")
    })

    return (
        <Navbar expand="lg" className="bg-light">
          <Navbar.Brand className="p-2" href="/home">
            <img width="100px" src={marvelNav}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>{localStorage.user}</Nav.Link>
              <NavDropdown title="Meus personagens" id="basic-nav-dropdown">
                <NavDropdown.Item href="/characteres/list">Listar</NavDropdown.Item>
                <NavDropdown.Item href="/characteres/create">Cadastrar</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={signOutApp}>Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NavBar;