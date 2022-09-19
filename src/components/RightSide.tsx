import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { EtiquetaModal } from '../Models/EtiquetaModal';
import { Etiqueta } from './Etiqueta';

export function RightSide(){

    const [etiquetas, setEtiquetas] = useState<EtiquetaModal[]>([
        {
            patrimonio:"12861555",
            responsavel:"Onésimo Alexandre",
            usuario:"Mguel Almeida",
            sala:"Protocolo",
            descricao:"Mesa Reta Bege"
        },
        {
            patrimonio:"12861555",
            responsavel:"Onésimo Alexandre",
            usuario:"Mguel Almeida",
            sala:"Protocolo",
            descricao:"Mesa Reta Bege"
        },
        {
            patrimonio:"12861555",
            responsavel:"Onésimo Alexandre",
            usuario:"Mguel Almeida",
            sala:"Protocolo",
            descricao:"Mesa Reta Bege"
        },
        {
            patrimonio:"12861555",
            responsavel:"Onésimo Alexandre",
            usuario:"Mguel Almeida",
            sala:"Protocolo",
            descricao:"Mesa Reta Bege"
        },
        {
            patrimonio:"12861555",
            responsavel:"Onésimo Alexandre",
            usuario:"Mguel Almeida",
            sala:"Protocolo",
            descricao:"Mesa Reta Bege"
        }
    ])

    const etiqueta:EtiquetaModal = {
        patrimonio:"12861555",
        responsavel:"Onésimo Alexandre",
        usuario:"Mguel Almeida",
        sala:"Protocolo",
        descricao:"Mesa Reta Bege"
    }
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