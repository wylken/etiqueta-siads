import { Header } from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";

export function App() {
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <LeftSide/>
          <RightSide/>
        </Row>
      </Container>
    </>
  );
}

