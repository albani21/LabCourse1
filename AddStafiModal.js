import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddStafiModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7222/api/stafi',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON. stringify({
                StafiID:event.target.StafiID.value,
                DrejtoriID:event.target.DrejtoriID.value,
                Emri:event.target.Emri.value,
                Mbiemri:event.target.Mbiemri.value,
                Qyteti:event.target.Qyteti.value,
                Rruga:event.target.Rruga.value,
                Zipkodi:event.target.Zipkodi.value,
                DateLindja:event.target.DateLindja.value,
                Gjinia:event.target.Gjinia.value,
                
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
                        Shto Stafin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={8}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="StafiID">
                                <Form.Label>StafiID</Form.Label>
                                <Form.Control type="text" name="StafiID" 
                                required placeholder="StafiID"/>
                            </Form.Group>

                            <Form.Group controlId="DrejtoriID">
                                <Form.Label>DrejtoriID</Form.Label>
                                <Form.Control type="text" name="DrejtoriID" 
                                required placeholder="DrejtoriID"/>
                            </Form.Group>

                            <Form.Group controlId="Emri">
                                <Form.Label>Emri</Form.Label>
                                <Form.Control type="text" name="Emri" 
                                required placeholder="emri"/>
                            </Form.Group>
                            <Form.Group controlId="Mbiemri">
                                <Form.Label>Mbiemri</Form.Label>
                                <Form.Control type="text" name="Mbiemri" 
                                required placeholder="mbiemri"/>
                            </Form.Group>

                            <Form.Group controlId="Qyteti">
                                <Form.Label>Qyteti</Form.Label>
                                <Form.Control type="text" name="Qyteti" 
                                required placeholder="qyteti"/>
                            </Form.Group>

                            <Form.Group controlId="Rruga">
                                <Form.Label>Rruga</Form.Label>
                                <Form.Control type="text" name="Rruga" 
                                required placeholder="rruga"/>
                            </Form.Group>
                            <Form.Group controlId="Zipkodi">
                                <Form.Label>Zip Kodi</Form.Label>
                                <Form.Control type="text" name="Zipkodi" 
                                required placeholder="zipkodi "/>
                            </Form.Group>

                            <Form.Group controlId="DateLindja">
                                <Form.Label>Datelindja </Form.Label>
                                <Form.Control type="text" name="DateLindja" 
                                required placeholder="datelindja"/>
                            </Form.Group>

                            <Form.Group controlId="Gjinia">
                                <Form.Label>Gjinia</Form.Label>
                                <Form.Control type="text" name="Gjinia" 
                                required placeholder="gjinia"/>
                            </Form.Group>
                            

                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Shto Stafin
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