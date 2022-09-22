import { useContext } from "react";
import { useState } from 'react';
import { useEffect } from "react";
import Providers from "../../Contexts/Providers";


function Edit() {

    const {modalEdit, setModalEdit, setEditData} = useContext(Providers);


    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    useEffect(()=>{
        if(null === modalEdit){
            return;
        }

        setTitle(modalEdit.title);
        setPrice(modalEdit.price);
    },[modalEdit])

    const save = () =>{
        setEditData({
            title,
            price: parseFloat(price),
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
            <h5 className="modal-title">Edit provider</h5>
            <button type="button" className="btn-close" onClick={() => setModalEdit(null)}></button>
          </div>
          <div class="modal-body">
            
            
            <div className="create card m-4">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Provider Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                            <label className="form-label">Provider price</label>
                            <input type="text" className="form-control" value={price} onChange={(e)=> setPrice(e.target.value)}/>
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
