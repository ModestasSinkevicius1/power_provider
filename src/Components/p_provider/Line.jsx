// import { useContext } from "react";
// import DataContext from "../Context/DataContext";

function Line({movie}){

    // const { setModalDelData, setModalData } = useContext(DataContext);

    return (
        <li className="list-group-item">
            <div className="movie">
                <div className="movie-content">
                    <div className="movie-content-title">
                        {movie.title}
                    </div>
                </div>
                <div className="movie-buttons">
                    {/* <button type="button" className="btn btn-outline-success" onClick={() => setModalData(movie)}>Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => setModalDelData(movie)}>Delete</button> */}
                </div>
            </div>
        </li>
    )
}

export default Line;