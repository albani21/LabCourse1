import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaClinicMedical
}from "react-icons/fa";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import GroupIcon from '@mui/icons-material/Group';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sektori",
            name:"Sektori",
            icon:<FilterNoneIcon/>
        },
        {
            path:"/infiermeria",
            name:"Infiermeria",
            icon:<FaClinicMedical/>
        },
        {
            path:"/drejtori",
            name:"Drejtori",
            icon:<PersonIcon/>
        },
        {
            path:"/stafi",
            name:"Stafi",
            icon:<GroupIcon/>
        },
        {
            path:"/oficeri",
            name:"Oficeri",
            icon:<LocalPoliceIcon/>
        },
        {
            path:"/mjeket",
            name:"Mjeket",
            icon:<PersonIcon/>
        },
        {
            path:"/llogaria",
            name:"Llogaria",
            icon:<AccountCircleIcon/>
        },
        
        {
            path:"/qelia",
            name:"Qelia",
            icon:<FilterNoneIcon/>
        },
        {
            path:"/mirembajtsi",
            name:"Mirembajtsi",
            icon:<PersonIcon/>
        },
        {
            path:"/mirembajtjaQelive",
            name:"MirembajtjaQelive",
            icon:<GroupIcon/>
        },
        {
            path:"/pushimi",
            name:"Pushimi",
            icon:<FilterNoneIcon/>
        },
        {
            path:"/burgosuri",
            name:"Burgosuri",
            icon:<PersonIcon/>
        },
        {
            path:"/krimi",
            name:"Krimi",
            icon:<FilterNoneIcon/>
        },
        {
            path:"/vizitori",
            name:"Vizitori",
            icon:<PersonIcon/>
        },
        {
            path:"/vizita",
            name:"Vizita",
            icon:<GroupIcon/>
        },
        {
            path:"/mbikqyre",
            name:"Mbikqyre",
            icon:<LocalPoliceIcon/>
        },
        {
            path:"/kontrollohet",
            name:"Kontrollohet",
            icon:<MedicalInformationIcon/>
        }
        
        
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h5 style={{display: isOpen ? "block" : "none"}} className="logo">Sidebar</h5>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;

/* import React from 'react';
import "../App.css";
import {SidebarData} from './SidebarData';


function Sidebar(){
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
            {SidebarData.map((val,key)=>{
                return(
                   <li key={key} 
                   className="row" 
                   id={window.location.pathname==val.path ? "active":""}
                   onClick={()=> {window.location.pathname=val.path}}>
                    
                    <div id="icon">
                        {val.icon} 
                    </div> 
                    <div id="title">
                        {val.title}
                    </div>
                   </li> 
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar */