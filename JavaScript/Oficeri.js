import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import { AddOficeriModal } from './AddOficeriModal';
import { EditOficeriModal } from './EditOficeriModal';

import "./crudCSS.css";
export class Oficeri extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:5000/api/oficeri')
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

    deleteOficerin(drid){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:5000/api/oficeri/' + drid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, ofid}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
           
            <div >
                <Table className='mt-4 officeriCrud' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>OficeriID</th>
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(o=>
                        
                            <tr className='tr1ID' key={o.OficeriID}>
                                <td className='tr1ID'>{o.OficeriID}</td>
                                
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        ofid:o.OficeriID})}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteOficerin(o.OficeriID)}>
                                                DELETE
                                         </Button>

                                         <EditOficeriModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         ofid={ofid}
                                         
                                         />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Oficerin
                    </Button>
                    <AddOficeriModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}