import React,{Component} from "react";
import{Modal,Button,Row,Col,Form, ModalHeader} from 'react-bootstrap';

export class AddStafiModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        fetch('http://localhost:5000/api/Stafi',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StaffiID:event.target.StaffiID.value,
                DrejtoriID:event.target.DrejtoriID.value,
                Emri:event.target.EmriDrejtorit.value,
                Mbiemri:event.target.MbiemriDrejtorit.value,
                Qyteti:event.target.QytetiDrejtorit.value,
                Rruga:event.target.RrugaDrejtorit.value,
                Zipkodi:event.target.ZipKodiDrejtorit.value,
                DateLindja:event.target.DateLindjaDrejtorit.value,
                Gjinia:event.target.GjiniaDrejtorit.value

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
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="cointaned-modal-title-vcenter"
                    centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Shto Staffin
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col sm={6}>
                                <Form>
                                <Form.Group controlId="StafiID">
                                        <Form.Label>StafiID</Form.Label>
                                        <Form.Control type="text" name="StafiID" required
                                        placeholder="StafiID"/>
                                    </Form.Group>

                                    <Form.Group controlId="EmriStafit">
                                        <Form.Label>EmriStafit</Form.Label>
                                        <Form.Control type="text" name="EmriStafit" required
                                        placeholder="EmriStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="MbiemriStafit">
                                        <Form.Label>MbiemriStafit</Form.Label>
                                        <Form.Control type="text" name="MbiemriStafit" required
                                        placeholder="MbiemriStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="QytetiStafit">
                                        <Form.Label>QytetiStafit</Form.Label>
                                        <Form.Control type="text" name="QytetiStafit" required
                                        placeholder="QytetiStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="RrugaStafit">
                                        <Form.Label>RrugaStafit</Form.Label>
                                        <Form.Control type="text" name="RrugaStafit" required
                                        placeholder="RrugaStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="ZipKodiStafit">
                                        <Form.Label>ZipKodiStafit</Form.Label>
                                        <Form.Control type="text" name="ZipKodiStafit" required
                                        placeholder="ZipKodiStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="DatelindjaStafit">
                                        <Form.Label>DatelindjaStafit</Form.Label>
                                        <Form.Control type="text" name="DatelindjaStafit" required
                                        placeholder="DatelindjaStafit"/>
                                    </Form.Group>

                                    <Form.Group controlId="GjiniaStafit">
                                        <Form.Label>GjiniaStafit</Form.Label>
                                        <Form.Control type="text" name="GjiniaStafit" required
                                        placeholder="GjiniaStafit"/>
                                    </Form.Group>

                                    <Form.Group>
                                <Button variant="primary" type="submit">
                                    Shto Sttafin
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