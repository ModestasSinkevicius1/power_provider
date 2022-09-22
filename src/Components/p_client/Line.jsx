// import { useContext } from "react";
// import DataContext from "../Context/DataContext";

import { useContext } from "react";
import Clients from "../../Contexts/Clients";

function Line({client}){

    const { setDeleteData, setModalEdit, supliers } = useContext(Clients);
    
    return (
        <li className="list-group-item">
            <div className="movie">
                <div className="movie-content">
                    <div className="movie-content-title">
                        {client?.name} {client?.surname}
                    </div>
                    <div className="movie-content-title">
                        {client?.counter} {supliers?.find(s => s.id === client.power_id)?.title}
                    </div>
                </div>
                <div className="movie-buttons">
                    <button type="button" className="btn btn-outline-success" onClick={() => setModalEdit(client)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setDeleteData(client)}>Delete</button> 
                </div>
            </div>
        </li>
    )
}

export default Line;