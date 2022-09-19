import Card from 'react-bootstrap/Card';
import { useBarcode } from 'react-barcodes';
import { EtiquetaModal } from '../Models/EtiquetaModal'; 

type Props = {
    etiqueta:EtiquetaModal
}

export function Etiqueta(props:Props){
    const etiqueta:EtiquetaModal = props.etiqueta;
    const { inputRef } = useBarcode({
        value: etiqueta.patrimonio,
        options: {
          background: '#ffffff',
          height:50
        }
      });

    return(

        <Card style={{ width: '18rem', margin:"20px" }}>
        <Card.Body>
            <Card.Title>Inventário 2022</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{etiqueta.sala}</Card.Subtitle>
            <Card.Text style={{marginBottom:"0px" }}>
                <b>Descrição:</b> {etiqueta.descricao}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" }}>
                <b>Responsável:</b> {etiqueta.responsavel}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" }}>
                <b>Usuário:</b> {etiqueta.usuario}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" }} className="text-center">
                <svg ref={inputRef} />
            </Card.Text>
        </Card.Body>
       
        </Card>
    );
}