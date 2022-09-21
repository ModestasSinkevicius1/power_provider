import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Line from "./Line";

function List() {

    const { movie } = useContext(DataContext);

    return (
        <div className="card m-4">
            <h5 className="card-header">Movies List</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        movie?.map(m => <Line key ={m.id} movie={m} />)
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;