import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddOficeriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/oficeri',{
            method:'POST',
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
            >
                <Modal.Header clooseButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Shto Drejtorin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={8}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="OficeriID">
                                <Form.Label>ID e Drejtorit</Form.Label>
                                <Form.Control type="text" name="OficeriID" 
                                required placeholder="DrejtoriID"/>
                            </Form.Group>

                           

                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Shto Oficerin
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