import { useContext } from "react";
import Clients from "../../Contexts/Clients";
import Line from "./Line";

function List() {

    const { clients } = useContext(Clients);
    
    return (
        <div className="card m-4">
            <h5 className="card-header">Client List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        clients?.map(s => <Line key ={s.id} client={s} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;