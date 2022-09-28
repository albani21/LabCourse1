import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import './Modals.css'

export class EditInfiermeriaModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7222/api/infiermeria',{
            method:'PUT',
            headers:{

                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON. stringify({
                InfiermeriaID:event.target.InfiermeriaID.value,
                SektoriID:event.target.SektoriID.value,
                Kapaciteti:event.target.Kapaciteti.value,
                
            })
        })
            .then(res=>res.json())
            .then((result)=>{
                alert(result);
            },
            (error)=>{
                alert('Failed');
            })
       
    }   

    render(){
        return(
            <div className='container'>
                
            <Modal 
            {...this.props}
                size="lg"
                aria-labelledy="contained-modal-title-vcenter"
                centered
                className="modal"
            >
                <Modal.Header clooseButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Perditso Infiermerin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={9}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="InfiermeriaID">
                                <Form.Label>InfiermeriaID</Form.Label>
                                <Form.Control type="text" name="InfiermeriaID" 
                                required defaultValue={this.props.infID} placeholder="InfiermeriaID"/>
                            </Form.Group>

                            <Form.Group controlId="SektoriID">
                                <Form.Label>SektoriID</Form.Label>
                                <Form.Control type="text" name="SektoriID" 
                                required defaultValue={this.props.sID} placeholder="SektoriID"/>
                            </Form.Group>

                            <Form.Group controlId="Kapaciteti">
                                <Form.Label>Kapaciteti </Form.Label>
                                <Form.Control type="text" name="Kapaciteti" 
                                required defaultValue={this.props.kapaciteti} placeholder="Kapaciteti"/>
                            </Form.Group>

                           
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Perditso Infiermerin
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>

            </Modal>


            </div>
        )
    }
}