import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import './Modals.css'

export class EditOficeriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7222/api/oficeri',{
            method:'PUT',
            headers:{

                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON. stringify({
                OficeriID:event.target.OficeriID.value,
               
                
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
                        Perditso Oficerin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={9}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="OficeriID">
                                <Form.Label>ID e Oficerit</Form.Label>
                                <Form.Control type="text" name="OficeriID" 
                                required defaultValue={this.props.ofID} placeholder="DrejtoriID"/>
                            </Form.Group>

                           
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Perditso Oficerin
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