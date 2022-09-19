import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Criador de Etiquetas SIADS</Navbar.Brand>
            </Container>
        </Navbar>
    );
}