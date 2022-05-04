import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import { AddDrejtoriModal } from './AddDrejtoriModal';
export class Drejtori extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:5000/api/drejtori')
        .then(response => response.json())
        .then(data=>{
            this.setState({deps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }


    render(){
        const {deps}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        return(
            <div >
                <Table className='mt-4' striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>DrejtoriID</th>
                        <th>Emri</th>
                        <th>Mbiemri</th>
                        <th>Qyteti</th>
                        <th>Rruga</th>
                        <th>ZipKodi</th>
                        <th>Datelindja</th>
                        <th>Gjinia</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(d=>
                        
                            <tr key={d.DrejtoriID}>
                                <td>{d.DrejtoriID}</td>
                                <td>{d.Emri}</td>
                                <td>{d.Mbiemri}</td>
                                <td>{d.Qyteti}</td>
                                <td>{d.Rruga}</td>
                                <td>{d.Zipkodi}</td>
                                <td>{d.DateLindja}</td>
                                <td>{d.Gjinia}</td>
                                <td>Edit / Delete</td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Drejtorin
                    </Button>
                    <AddDrejtoriModal show={this.state.addModalShow}
                    onHide={addModalClose}></AddDrejtoriModal>
                </ButtonToolbar>
            </div>
        )
    }
}