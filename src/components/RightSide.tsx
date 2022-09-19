import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { EtiquetaModal } from '../Models/EtiquetaModal'; 
import { Etiqueta } from './Etiqueta';

type Props = {
    etiquetas:EtiquetaModal[]
}

export function RightSide(props:Props){

    const etiquetas:EtiquetaModal[] = props.etiquetas

    
    return(
        <Col sm={8}>
            <Row>
            {etiquetas.map(etiqueta=>(
                <Etiqueta etiqueta={etiqueta}/>
            ))
            }
            </Row>
        </Col>
    );
}