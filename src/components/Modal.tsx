
import InventoryForm from './InventoryForm';
import './../index.css'

type Props = {
    id?: string[]
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
  return (
    <div 
            onClick={ props.onClose } 
            className='modal'
        
        >
            <div
                className='max-w-600px w-2/5 fixed flex z-1 mt-20 shadow-xl rounded'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="modal">
                    <div className="flex flex-row space-apart">
                        <p className="flex justify-start m-3 p-2 rounded hover:bg-slate-800 text-white"
                        onClick={props.onClose} >
                            Close
                        </p>
                    </div>
                    <div className="modal-content2">
                        <InventoryForm id={props.id} />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal