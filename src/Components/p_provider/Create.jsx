import { useState, useContext } from 'react';
import Providers from '../../Contexts/Providers';

function Create(){

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    
    const {setCreateData} = useContext(Providers);

    const add = () => {
        setCreateData({
            title,
            price: parseFloat(price),
        });
        setTitle('');
        setPrice('');
    }

    return(
        <div className="create card m-4">
            <h5 className="card-header">New Provider</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Provider Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                        <label className="form-label">Price (kWh)</label>
                        <input type="text" className="form-control" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default Create;