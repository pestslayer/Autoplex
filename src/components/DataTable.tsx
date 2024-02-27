import{ useState } from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true},
    { field: "make", headerName: "Make", flex: 1},
    { field: "model", headerName: "Model", flex: 1},
    { field: "year", headerName: "Year", flex:1},
    { field: "color", headerName: "Color", flex:1}
]


function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { inventoryData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    } 

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }



  return (
    <>
        <Modal 
            id={selectionModel}
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
            <button onClick={handleOpen} className="p-2 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-2 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>
        <div className='{ open ? "hidden" : "container mx-10 my-5 flex flex-col}'
            style={{ height: 400, width: '100%'}}
        >
            <h2 className='p-3 my-2 rounded'>Vehicle List</h2>
            <DataGrid rows={inventoryData} columns={columns}
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