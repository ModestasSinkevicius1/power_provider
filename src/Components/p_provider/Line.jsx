// import { useContext } from "react";
// import DataContext from "../Context/DataContext";

import { useContext } from "react";
import Providers from "../../Contexts/Providers";

function Line({suplier}){

    const { setDeleteData, setModalEdit } = useContext(Providers);

    return (
        <li className="list-group-item">
            <div className="movie">
                <div className="movie-content">
                    <div className="movie-content-title">
                        {suplier?.title}
                    </div>
                    <div className="movie-content-title">
                        {suplier?.price}&euro;/kWh
                    </div>
                </div>
                <div className="movie-buttons">
                    <button type="button" className="btn btn-outline-success" onClick={() => setModalEdit(suplier)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setDeleteData(suplier)}>Delete</button> 
                </div>
            </div>
        </li>
    )
}

export default Line;