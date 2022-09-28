import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import {EditSektoriModal} from './Modules/EditSektoriModal'
import { AddSektoriModal } from './Modules/AddSektoriModal';
import '../prova.css';

export  class Sektori extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:7222/api/Sektori')
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

    deleteSektorin(lid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:7222/api/sektori/' + lid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, sID, emri}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >

                <h2 className='h2Oficeri'>Sektoret!</h2>

                <ButtonToolbar >
                    <Button className='shtoLlogarin' variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Sektorin
                    </Button>
                    <AddSektoriModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <div className='div1'>
                    
              
                <Table className='mt-4' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>SektoriID</th>
                        <th className='tr1ID'>EmriSektorit</th>
                       
                        
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(l=>
                            <tr className='tr1ID' key={l.SektoriID}>
                                <td className='tr1ID'>{l.SektoriID}</td>
                                <td className='tr1ID'>{l.EmriSektorit}</td>
                              
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        sID:l.SektoriID, emri:l.EmriSektorit })}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteSektorin(l.SektoriID)}>
                                                DELETE
                                         </Button>

                                         <EditSektoriModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         sID={sID}
                                         emri={emri}
                                      
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