import { useState } from 'react';
import { Header } from "./components/Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";
import { EtiquetaModal } from "./Models/EtiquetaModal";

export function App() { 

  const [etiquetas, setEtiquetas] = useState<EtiquetaModal[]>([
    {
        patrimonio:"12861555",
        responsavel:"Onésimo Alexandre",
        usuario:"Mguel Almeida",
        sala:"Protocolo",
        descricao:"Mesa Reta Bege"
    }
])
  return (
    <>
      <Header/>
      <Container>
        <Row>
          <LeftSide etiquetas = {etiquetas} setEtiquetas = {setEtiquetas}/>
          <RightSide etiquetas={etiquetas}/>
        </Row>
      </Container>
    </>
  );
}

