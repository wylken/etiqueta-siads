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
          height:30,
          width:1.5,
          textMargin:1,
          fontSize:16,
          margin:5,
          fontOptions:"bold"
        }
      });

    return(

        <Card style={{ width: '13rem', marginTop:"5px", marginLeft:"5px", padding:"5px", paddingBottom:"0px"}}>
        <Card.Body style={{padding:"0px", paddingLeft:"5px" }}>
            <Card.Title style={{fontSize:"18px", textAlign:"center", textTransform: "uppercase", marginBottom:"0px"}}>Inventário 2022</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{textAlign:"right", textTransform: "uppercase"}}>{etiqueta.sala}</Card.Subtitle>
            <Card.Text style={{marginBottom:"0px", fontSize:"12px", lineHeight: "13px", textTransform: "uppercase"}}>
                <b>Descrição:</b> {etiqueta.descricao}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" , fontSize:"12px"}}>
                <b>Respon.:</b> {etiqueta.responsavel}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" , fontSize:"12px"}}>
                <b>Usuário:</b> {etiqueta.usuario}
            </Card.Text>
            <Card.Text style={{marginBottom:"0px" , fontSize:"12px"}} className="text-center">
                <svg ref={inputRef} />
            </Card.Text>
        </Card.Body>
       
        </Card>
    );
}