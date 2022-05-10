import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddDrejtoriModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/drejtori',{
            method:'POST',
            header:{

                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                DrejtoriID:event.target.DrejtoriID.value,
                Emri:event.target.EmriDrejtorit.value,
                Mbiemri:event.target.MbiemriDrejtorit.value,
                Qyteti:event.target.QytetiDrejtorit.value,
                Rruga:event.target.RrugaDrejtorit.value,
                Zipkodi:event.target.ZipKodiDrejtorit.value,
                DateLindja:event.target.DateLindjaDrejtorit.value,
                Gjinia:event.target.GjiniaDrejtorit.value
            })
            .then(res=>JSON())
            .then((result)=>{
                alert(result);
            },
            (error)=>{
                alert('Failed');
            })
        })
    }

    render(){
        return(
            <div className='container'>
                
            <Modal {...this.props}
                size="lg"
                aria-labelledy="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header clooseButton >
                    <Modal.Title od="contained-modal-title-vcenter">
                        Shto Drejtorin
                    </Modal.Title>
                </Modal.Header>

            <Modal.Body>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="DrejtoriID">
                                <Form.Label>ID e Drejtorit</Form.Label>
                                <Form.Control type="text" name="DrejtoriID" 
                                required placeholder="ID e Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="EmriDrejtorit">
                                <Form.Label>Emri Drejtorit</Form.Label>
                                <Form.Control type="text" name="EmriDrejtorit" 
                                required placeholder="EmriDrejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="MbiemriDrejtorit">
                                <Form.Label>Mbiemri Drejtorit</Form.Label>
                                <Form.Control type="text" name="MbiemriDrejtorit" 
                                required placeholder="Mbiemri i Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="QytetiDrejtorit">
                                <Form.Label>Qyteti Drejtorit</Form.Label>
                                <Form.Control type="text" name="QytetiDrejtorit" 
                                required placeholder="Qyteti i Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="RrugaDrejtorit">
                                <Form.Label>Rruga Drejtorit</Form.Label>
                                <Form.Control type="text" name="RrugaDrejtorit" 
                                required placeholder="Rruga Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="ZipKodiDrejtorit">
                                <Form.Label>Zip kodi Drejtorit</Form.Label>
                                <Form.Control type="text" name="ZipKodiDrejtorit" 
                                required placeholder="Zip Kodi i Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="DateLindjaDrejtorit">
                                <Form.Label>Datelindja Drejtorit</Form.Label>
                                <Form.Control type="text" name="DateLindjaDrejtorit" 
                                required placeholder="Datelindja e Drejtorit"/>
                            </Form.Group>

                            <Form.Group controlId="GjiniaDrejtorit">
                                <Form.Label>Gjinia Drejtorit</Form.Label>
                                <Form.Control type="text" name="GjiniaDrejtorit" 
                                required placeholder="Gjinia Drejtorit"/>
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