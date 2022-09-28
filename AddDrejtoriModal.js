import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddDrejtoriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7222/api/drejtori',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON. stringify({
                DrejtoriID:event.target.DrejtoriID.value,
                SektoriID:event.target.SektoriID.value,
                emri:event.target.emri.value,
                mbiemri:event.target.mbiemri.value,
                qyteti:event.target.qyteti.value,
                rruga:event.target.rruga.value,
                zipkodi:event.target.zipkodi.value,
                datelindja:event.target.datelindja.value,
                gjinia:event.target.gjinia.value,
                
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
                
            <Modal className='shtoModal'
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
                             <Form.Group controlId="DrejtoriID">
                                <Form.Label>ID e Drejtorit</Form.Label>
                                <Form.Control type="text" name="DrejtoriID" 
                                required placeholder="DrejtoriID"/>
                            </Form.Group>

                            <Form.Group controlId="SektoriID">
                                <Form.Label>SektoriID</Form.Label>
                                <Form.Control type="text" name="SektoriID" 
                                required placeholder="SektoriID"/>
                            </Form.Group>

                            <Form.Group controlId="emri">
                                <Form.Label>Emri</Form.Label>
                                <Form.Control type="text" name="emri" 
                                required placeholder="emri"/>
                            </Form.Group>
                            <Form.Group controlId="mbiemri">
                                <Form.Label>Mbiemri</Form.Label>
                                <Form.Control type="text" name="mbiemri" 
                                required placeholder="mbiemri"/>
                            </Form.Group>

                            <Form.Group controlId="qyteti">
                                <Form.Label>Qyteti</Form.Label>
                                <Form.Control type="text" name="qyteti" 
                                required placeholder="qyteti"/>
                            </Form.Group>

                            <Form.Group controlId="rruga">
                                <Form.Label>Rruga</Form.Label>
                                <Form.Control type="text" name="rruga" 
                                required placeholder="rruga"/>
                            </Form.Group>
                            <Form.Group controlId="zipkodi">
                                <Form.Label>Zip Kodi</Form.Label>
                                <Form.Control type="text" name="zipkodi" 
                                required placeholder="zipkodi "/>
                            </Form.Group>

                            <Form.Group controlId="datelindja">
                                <Form.Label>Datelindja </Form.Label>
                                <Form.Control type="text" name="datelindja" 
                                required placeholder="datelindja"/>
                            </Form.Group>

                            <Form.Group controlId="gjinia">
                                <Form.Label>Gjinia</Form.Label>
                                <Form.Control type="text" name="gjinia" 
                                required placeholder="gjinia"/>
                            </Form.Group>
                            

                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Shto Drejtorin
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