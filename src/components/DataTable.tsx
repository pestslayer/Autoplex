import  { useState } from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import './../index.css'

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: "make", headerName: "make", flex: 1},
    { field: "model", headerName: "model", flex: 1},
    { field: "year", headerName: "year", flex:1},
    { field: "color", headerName: "color", flex:1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { inventoryData, getData} = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    // const deleteData = () => {
    //     server_calls.delete(selectionModel[0])
    //     getData();
    //     console.log(`Selection model: ${selectionModel}`)
    //     setTimeout( () => {window.location.reload()}, 500)
    // } ******** this way does not delete all of them if selected all kept for notes *********

    const deleteData = () => {
        selectionModel.forEach(itemId => {
            server_calls.delete(itemId).then(() => {
                console.log(`Deleted item with ID: ${itemId}`);
            }).catch(error => {
                console.error(`Error deleting item with ID ${itemId}:`, error);
            });
        });
        getData();
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    

    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="dashpage">
                <div>
                    <button
                        className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Create New Car
                    </button>
                </div> 
                <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
                <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%'}}
            >
                <h2 className="p-3 bg-slate-300 my-2 rounded">My inventory</h2>
                <DataGrid rows={inventoryData} columns={columns} rowsPerPageOptions={[5]}
                checkboxSelection={true} 
                onSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
                />
            </div>
        </>
      )
    }
    
    export default DataTable