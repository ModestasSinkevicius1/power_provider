import { useEffect } from "react";
import { useState } from "react";
import Providers from "../../Contexts/Providers";
import Create from "../p_provider/Create";
import axios from 'axios';

function Main(){

    const [createData, setCreateData] = useState(null);
    const [supliers, setSupliers] = useState(null);

    useEffect(()=>{
        axios.get('http://localhost:3006/server/providers')
        .then(res => {
            setSupliers(res.data);
        });
    }, [])

    useEffect(()=>{
        if(createData === null){
            return;
        }
        axios.post('http://localhost:3006/server/providers', createData)
        .then(res => {

        });
    }, [createData])

    return(
        <Providers.Provider value={{
            setCreateData,
            supliers,
        }}>
        
        <div class="main container">
            <div class="row">
            <div class="col-5">
                <Create />
            </div>
            <div class="col-7">

            </div>
            </div>
        </div>
        
        </Providers.Provider>
    );
}

export default Main;