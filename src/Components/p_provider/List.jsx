import { useContext } from "react";
import Providers from "../../Contexts/Providers";
import Line from "./Line";

function List() {

    const { supliers } = useContext(Providers);
    
    return (
        <div className="card m-4">
            <h5 className="card-header">Supliers List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        supliers?.map(s => <Line key ={s.id} suplier={s} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;