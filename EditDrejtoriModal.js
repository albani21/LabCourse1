import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import './Modals.css'

export class EditDrejtoriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:7222/api/drejtori',{
            method:'PUT',
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
                dateLindja:event.target.datelindja.value,
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
                
            <Modal 
            {...this.props}
                size="lg"
                aria-labelledy="contained-modal-title-vcenter"
                centered
                className="modal"
            >
                <Modal.Header clooseButton >
                    <Modal.Title id="contained-modal-title-vcenter">
                        Perditso Drejtorin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={9}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="DrejtoriID">
                                <Form.Label>ID e Drejtorit</Form.Label>
                                <Form.Control type="text" name="DrejtoriID" 
                                required defaultValue={this.props.drID} placeholder="DrejtoriID"/>
                            </Form.Group>

                            <Form.Group controlId="SektoriID">
                                <Form.Label>SektoriID</Form.Label>
                                <Form.Control type="text" name="SektoriID" 
                                required defaultValue={this.props.sID} placeholder="SektoriID"/>
                            </Form.Group>

                            <Form.Group controlId="emri">
                                <Form.Label>Emri </Form.Label>
                                <Form.Control type="text" name="emri" 
                                required defaultValue={this.props.emri} placeholder="emri"/>
                            </Form.Group>

                            <Form.Group controlId="mbiemri">
                                <Form.Label>Mbiemri</Form.Label>
                                <Form.Control type="text" name="mbiemri" 
                                required defaultValue={this.props.mbiemri} placeholder="mbiemri"/>
                            </Form.Group>

                            <Form.Group controlId="qyteti">
                                <Form.Label>Qyteti</Form.Label>
                                <Form.Control type="text" name="qyteti" 
                                required defaultValue={this.props.qyteti} placeholder="qyteti"/>
                            </Form.Group>

                            <Form.Group controlId="rruga">
                                <Form.Label>Rruga </Form.Label>
                                <Form.Control type="text" name="rruga" 
                                required defaultValue={this.props.rruga} placeholder="rruga"/>
                            </Form.Group>

                            <Form.Group controlId="zipkodi">
                                <Form.Label>Zip Kodi</Form.Label>
                                <Form.Control type="text" name="zipkodi" 
                                required defaultValue={this.props.zipkodi} placeholder="zipkodi"/>
                            </Form.Group>

                            <Form.Group controlId="datelindja">
                                <Form.Label>Datelindja</Form.Label>
                                <Form.Control type="text" name="datelindja" 
                                required defaultValue={this.props.datelindja} placeholder="datelindja"/>
                            </Form.Group>

                            <Form.Group controlId="gjinia">
                                <Form.Label>Gjinia </Form.Label>
                                <Form.Control type="char" name="gjinia" 
                                required defaultValue={this.props.gjinia} placeholder="gjinia"/>
                            </Form.Group>

                           
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Perditso Drejtorin
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