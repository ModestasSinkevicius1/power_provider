import { useContext } from "react";
import { useState } from 'react';
import { useEffect } from "react";
import Clients from "../../Contexts/Clients";


function Edit() {

    const {modalEdit, setModalEdit, setEditData, supliers} = useContext(Clients);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [suplier, setSuplier] = useState(0);

    useEffect(()=>{
        if(null === modalEdit){
            return;
        }
        setName(modalEdit.name);
        setSurname(modalEdit.surname);
        setNumber(modalEdit.counter);
        setSuplier(modalEdit.power_id);
    },[modalEdit])

    const save = () =>{
        setEditData({
            name,
            surname,
            number,
            suplier: parseInt(suplier),
            id: modalEdit.id,
        })
        setModalEdit(null);
    }

    if(null === modalEdit){
        return;
    }
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit client</h5>
            <button type="button" className="btn-close" onClick={() => setModalEdit(null)}></button>
          </div>
          <div className="modal-body">
            
            <div className="create card m-4">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Client Title</label>
                        <input type="text" className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <label className="form-label">Client price</label>
                            <input type="text" className="form-control" value={surname} onChange={(e)=> setSurname(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <label className="form-label">Client price</label>
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
                </div>
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setModalEdit(null)}>Close</button>
            <button type="button" className="btn btn-primary" onClick={save}> 
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
