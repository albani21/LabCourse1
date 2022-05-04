import React,{Component} from "react";
import { Table } from "react-bootstrap";

import { Button,ButtonToolbar } from "react-bootstrap";
import { AddStafiModal } from "./AddStafiModal";

export class Staff extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], AddModalShow:false}

    }

    refreshList(){
        fetch('http://localhost:5000/api/Stafi')
        .then(response=>response.json())
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
        let AddModalClose=()=>this.setState({AddModalShow:false});
        return(
            <div>

            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>StafiID</th>
                    <th>DrejtoriID</th>
                    <th>Emri</th>
                    <th>Mbiemri</th>
                    <th>Qyteti</th>
                    <th>Rruga</th>
                    <th>Zipkodi</th>
                    <th>DateLindja</th>
                    <th>Gjinia</th>
                    </tr>
                </thead>

                <tbody>
                    {deps.map(s=>
                        <tr key={s.StafiID}>
                            <td>{s.StaffiID}</td>
                            <td>{s.DrejtoriID}</td>
                            <td>{s.Emri}</td>
                            <td>{s.Mbiemri}</td>
                            <td>{s.Qyteti}</td>
                            <td>{s.Rruga}</td>
                            <td>{s.Zipkodi}</td>
                            <td>{s.DateLindja}</td>
                            <td>{s.Gjinia}</td>
                            <td>Edit / Delete</td>

                        </tr>)}
                </tbody>
 
            </Table>

            <ButtonToolbar>
                <Button variant='primary'
                onClick={()=>this.setState({AddModalShow:true})}>
                 Shto Staffin</Button>

                 <AddStafiModal show={this.state.AddModalShow}
                 onHide={AddModalClose}></AddStafiModal>
            </ButtonToolbar>

            </div>
        )
    }
}