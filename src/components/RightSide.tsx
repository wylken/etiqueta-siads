import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { EtiquetaModal } from '../Models/EtiquetaModal'; 
import { Etiqueta } from './Etiqueta';
import Button from 'react-bootstrap/Button';

type Props = {
    etiquetas:EtiquetaModal[],
    setEtiquetas:Function,
    maxEtiquetas:number
}

export function RightSide(props:Props){

    const etiquetas:EtiquetaModal[] = props.etiquetas
    const componentRef:any = useRef();
    const pageStyle =`
        .btn-close{
            display:none;
        }
    `;

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: pageStyle 
    });
    
    return(
        <Col sm={8}>
            <Row>
                <Button variant="primary" onClick={handlePrint}>
                        Imprimir
                </Button>
                <p className="text-muted" style={{textAlign:"right"}}><b>Total de Etiquetas:</b> {props.etiquetas.length} de {props.maxEtiquetas}</p>
            </Row>
            <Row ref={componentRef} style={{paddingLeft:"20px" }}>
            {etiquetas.map(etiqueta=>(
                <Etiqueta etiqueta={etiqueta} etiquetas={props.etiquetas} setEtiquetas={props.setEtiquetas}/>
            ))
            }
            </Row>
        </Col>
    );
}