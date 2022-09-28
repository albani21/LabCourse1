import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import {EditInfiermeriaModal} from './Modules/EditInfiermeriaModal'
import { AddInfiermeriaModal } from './Modules/AddInfiermeriaModal';
import '../prova.css';

export  class Infiermeria extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:7222/api/Infiermeria')
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

    deleteInfiermerin(lid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:7222/api/Infiermeria/' + lid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, infID, sID, kapaciteti}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >

                <h2 className='h2Oficeri'>Infiermerit!</h2>

                <ButtonToolbar >
                    <Button className='shtoLlogarin' variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Infiermerin
                    </Button>
                    <AddInfiermeriaModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <div className='div1'>
                    
              
                <Table className='mt-4' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>InfiermeriaID</th>
                        <th className='tr1ID'>SektoriID</th>
                        <th className='tr1ID'>Kapaciteti</th>
                        
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(l=>
                            <tr className='tr1ID' key={l.InfiermeriaID}>
                                <td className='tr1ID'>{l.InfiermeriaID}</td>
                                <td className='tr1ID'>{l.SektoriID}</td>
                                <td className='tr1ID'>{l.Kapaciteti}</td>
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        infID:l.InfiermeriaID, sID:l.SektoriID, kapaciteti:l.Kapaciteti })}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteInfiermerin(l.InfiermeriaID)}>
                                                DELETE
                                         </Button>

                                         <EditInfiermeriaModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         infID={infID}
                                         sID={sID}
                                         kapaciteti={kapaciteti}
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