import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import {EditOficeriModal} from './Modules/EditOficeriModal'
import { AddOficeriModal } from './Modules/AddOficeriModal';
import '../prova.css';

export class Oficeri extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:7222/api/oficeri')
        .then(response => response.json())
        .then(data=>{
            console.log("Works");
            this.setState({deps:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteOficerin(id){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:7222/api/oficeri/' + id,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, ofID}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
           
            

            <div >

                <h2 className='h2Oficeri'>Oficeret!</h2>

                <ButtonToolbar >
                    <Button className='shtoLlogarin' variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Oficerin
                    </Button>
                    <AddOficeriModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <div className='div1'>
                    
              
                <Table className='mt-4' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>OficeriID</th>
                        
                        
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(l=>
                            <tr className='tr1ID' key={l.OficeriID}>
                                <td className='tr1ID'>{l.OficeriID}</td>
                              
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        ofID:l.OficeriID })}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteOficerin(l.OficeriID)}>
                                                DELETE
                                         </Button>

                                         <EditOficeriModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         ofID={ofID}
                                      
                                         />
                                    </ButtonToolbar>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>

                </div>
            </div>
        )
    }
}