import { useEffect } from "react";
import { useState } from "react";
import Clients from "../../Contexts/Clients";
import Create from "../p_client/Create";
import axios from 'axios';
import List from "./List";
import Edit from "./Edit";

function Main(){

    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [modalEdit, setModalEdit] = useState(null);

    const [clients, setClients] = useState(null);

    const [supliers, setSupliers] = useState(null);

    const [date, setDate] = useState(Date.now());


    //READ for select
    useEffect(()=>{
        axios.get('http://localhost:3006/server/providers')
        .then(res => {
            setSupliers(res.data);
        });
    }, [date])

    //READ
    useEffect(()=>{
        axios.get('http://localhost:3006/server/clients')
        .then(res => {
            setClients(res.data);
        });
    }, [date])

    useEffect(()=>{
        if(createData === null){
            return;
        }
        axios.post('http://localhost:3006/server/Clients', createData)
        .then(res => {
            setDate(Date.now());
        });
    }, [createData])

    useEffect(()=>{
        if(deleteData === null){
            return;
        }
        axios.delete('http://localhost:3006/server/Clients/' + deleteData.id)
        .then(res => {
            setDate(Date.now());
        });
    }, [deleteData])

    useEffect(()=>{
        if(editData === null){
          return;
        }
        axios.put('http://localhost:3006/server/Clients/' + editData.id, editData)
        .then(res => {
            setDate(Date.now());
        });
    }, [editData]);

    return(
        <Clients.Provider value={{
            setCreateData,
            supliers,
            setDeleteData,
            modalEdit, setModalEdit,
            setEditData,
            clients,
        }}>
        
        <div className="main container">
            <div className="row">
            <div className="col-5">
                <Create />
            </div>
            <div className="col-7">
                <List />
            </div>
            </div>
        </div>
        <Edit />
        
        </Clients.Provider>
    );
}

export default Main;