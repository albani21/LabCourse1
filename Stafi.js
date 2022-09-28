import React,{Component} from 'react';
import { Table } from 'react-bootstrap';
import{Button,ButtonToolbar} from 'react-bootstrap';
import {EditStafiModal} from './Modules/EditStafiModal'
import { AddStafiModal } from './Modules/AddStafiModal';
import '../prova.css';

export  class Stafi extends Component{

    constructor(props){
        super(props);
        this.state={deps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('https://localhost:7222/api/stafi')
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

    deleteStafin(lid){
        if(window.confirm('Are you sure?')){
            fetch('https://localhost:7222/api/stafi/' + lid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }

    render(){
        const {deps, sID, dID, emri, mbiemri, qyteti, rruga, zipkodi, datelindja, gjinia}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >

                <h2 className='h2Oficeri'>Oficeret qe kane qasje ne aplikacion!</h2>

                <ButtonToolbar >
                    <Button className='shtoLlogarin' variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                        Shto Stafin
                    </Button>
                    <AddStafiModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <div className='div1'>
                    
              
                <Table className='mt-4' striped bordered hover size="s">
                    <thead className='theadID'>
                        <tr className='tr1ID'>
                        <th className='tr1ID'>StafiID</th>
                        <th className='tr1ID'>DrejtoriID</th>
                        <th className='tr1ID'>Emri</th>
                        <th className='tr1ID'>Mbiemri</th>
                        <th className='tr1ID'>Qyteti</th>
                        <th className='tr1ID'>Rruga</th>
                        <th className='tr1ID'>Zipkodi</th>
                        <th className='tr1ID'>Datelindja</th>
                        <th className='tr1ID'>Gjinia</th>
                        
                        <th className='tr1ID action'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map(l=>
                            <tr className='tr1ID' key={l.StafiID}>
                                <td className='tr1ID'>{l.StafiID}</td>
                                <td className='tr1ID'>{l.DrejtoriID}</td>
                                <td className='tr1ID'>{l.Emri}</td>
                                <td className='tr1ID'>{l.Mbiemri}</td>
                                <td className='tr1ID'>{l.Qyteti}</td>
                                <td className='tr1ID'>{l.Rruga}</td>
                                <td className='tr1ID'>{l.Zipkodi}</td>
                                <td className='tr1ID'>{l.DateLindja}</td>
                                <td className='tr1ID'>{l.Gjinia}</td>
                                <td className='tr1ID'>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,
                                        sID:l.StafiID, dID:l.DrejtoriID, emri:l.Emri, mbiemri:l.Mbiemri, qyteti:l.Qyteti, rruga:l.Rruga, zipkodi:l.Zipkodi, datelindja:l.DateLindja, gjinia:l.Gjinia })}>
                                            EDIT
                                        </Button>

                                        <Button className="mr-2 deleteButton" variant="danger"
                                              onClick={()=>this.deleteStafin(l.StafiID)}>
                                                DELETE
                                         </Button>

                                         <EditStafiModal show={this.state.editModalShow}
                                         onHide={editModalClose}
                                         sID={sID}
                                         dID={dID}
                                         emri={emri}
                                         mbiemri={mbiemri}
                                         qyteti={qyteti}
                                         rruga={rruga}
                                         zipkodi={zipkodi}
                                         datelindja={datelindja}
                                         gjinia={gjinia}
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