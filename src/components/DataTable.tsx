import React, { useState } from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server';


function DataTable() {
    let [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const getData = async () => {
        const result = await server_calls.get();
        console.log(result)
    }


  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
        />
        <div className="d-flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Create New Entry
                </button>
            </div> 
            <button className="p-2 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button className="p-2 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        {/* Data Table section */}
        <button onClick={getData}>Get Data</button>
    </>
  )
}

export default DataTable