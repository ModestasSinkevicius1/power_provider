import { useState, useContext } from 'react';
import Clients from '../../Contexts/Clients';

function Create(){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');

    const [suplier, setSuplier] = useState(0);
    
    const {setCreateData, supliers} = useContext(Clients);

    const add = () => {
        setCreateData({
            name,
            surname,
            number,
            suplier: parseInt(suplier),
        });
        setName('');
        setSurname('');
        setNumber('');
        setSuplier(0);
    }

    return(
        <div className="create card m-4">
            <h5 className="card-header">New Client</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                        <label className="form-label">Client Surname</label>
                        <input type="text" className="form-control" value={surname} onChange={(e)=> setSurname(e.target.value)}/>
                </div>
                <div className="mb-3">
                        <label className="form-label">Counter number</label>
                        <input type="text" className="form-control" value={number} onChange={(e)=> setNumber(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <select className="form-select" value={suplier} onChange={(e)=> setSuplier(e.target.value)}>
                        <option value={0} disabled>Choose from list</option>
                        {
                            supliers?.map(s => <option key={s.id} value={s.id}>{s.title}</option>)
                        }
                    </select>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default Create;