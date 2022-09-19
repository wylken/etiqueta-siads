import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { EtiquetaModal } from '../Models/EtiquetaModal'; 
import { Etiqueta } from './Etiqueta';
import Button from 'react-bootstrap/Button';

type Props = {
    etiquetas:EtiquetaModal[]
}

export function RightSide(props:Props){

    const etiquetas:EtiquetaModal[] = props.etiquetas
    const componentRef:any = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    
    return(
        <Col sm={8}>
            <Row>
                <Button variant="primary" onClick={handlePrint}>
                        Imprimir
                </Button>
            </Row>
            <Row ref={componentRef} style={{paddingLeft:"20px" }}>
            {etiquetas.map(etiqueta=>(
                <Etiqueta etiqueta={etiqueta}/>
            ))
            }
            </Row>
        </Col>
    );
}