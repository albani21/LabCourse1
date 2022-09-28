import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import {EditLlogariaModal} from './Modules/EditLlogariaModal'
import { AddLlogariaModal } from './Modules/AddLlogariaModal';
import '../prova.css';

export  class Llogaria extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:7222/api/Llogaria')
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

    deleteLlogarin(lid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:7222/api/llogaria/' + lid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, ofID, username, passwordi}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >

                <h2 className='h2Oficeri'>Oficeret qe kane qasje ne aplikacion!</h2>

                <ButtonToolbar >
                    <Button className='shtoLlogarin' variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Llogarin
                    </Button>
                    <AddLlogariaModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <div className='div1'>
                    
              
                <Table className='mt-4' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>OficeriID</th>
                        <th className='tr1ID'>Username</th>
                        <th className='tr1ID'>Password</th>
                        
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(l=>
                            <tr className='tr1ID' key={l.OficeriID}>
                                <td className='tr1ID'>{l.OficeriID}</td>
                                <td className='tr1ID'>{l.username}</td>
                                <td className='tr1ID'>{l.passwordi}</td>
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        ofID:l.OficeriID, username:l.username, passwordi:l.passwordi })}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteLlogarin(l.OficeriID)}>
                                                DELETE
                                         </Button>

                                         <EditLlogariaModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         ofID={ofID}
                                         username={username}
                                         passwordi={passwordi}
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