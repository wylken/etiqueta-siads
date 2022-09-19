import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormEvent, useState } from 'react';
import { Etiqueta } from './Etiqueta';
import { EtiquetaModal } from '../Models/EtiquetaModal'; 

type Props = {
    etiquetas:EtiquetaModal[]
    setEtiquetas:Function
}

export function LeftSide(props:Props){
    const [patrimonio, setPatrimonio] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [usuario, setUsuario] = useState("");
    const [sala, setSala] = useState("");
    const [descricao, setDescricao] = useState("");


    function handleCreateNewEtiqueta(event:FormEvent){
        event.preventDefault();
        let etiqueta:EtiquetaModal = {} as EtiquetaModal;
        etiqueta.patrimonio = patrimonio;
        etiqueta.responsavel = responsavel;
        etiqueta.usuario = usuario;
        etiqueta.sala = sala;
        etiqueta.descricao = descricao

        props.setEtiquetas([...props.etiquetas, etiqueta]);

        //Limpando Form
        /*setPatrimonio("");
        setResponsavel("");
        setUsuario("");
        setSala("");
        setDescricao("");*/
    }

    return(
        <Col sm={4}>
            <Form onSubmit={handleCreateNewEtiqueta}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Patrimônio</Form.Label>
                    <Form.Control type="text" placeholder="Patrimônio SIADS" value={patrimonio} onChange={event =>setPatrimonio(event.target.value)} maxLength={10}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Responsável</Form.Label>
                    <Form.Control type="text" placeholder="Responsável no sistema" value={responsavel} onChange={event =>setResponsavel(event.target.value)} maxLength={22}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control type="text" placeholder="Quem usa o bem" value={usuario} onChange={event =>setUsuario(event.target.value)} maxLength={22}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sala</Form.Label>
                    <Form.Control type="text" placeholder="Sala em que o bem está" value={sala} onChange={event =>setSala(event.target.value)} maxLength={22}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Breve descrição..." value={descricao} onChange={event =>setDescricao(event.target.value)} maxLength={45}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Adicionar Etiqueta
                </Button>
            </Form>
        </Col>
    );
}