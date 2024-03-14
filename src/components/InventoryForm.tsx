import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import {  useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"
import './../index.css'

interface InvetoryFormProps {
  id?: string[];
  onClose: () => void;
}

const InvetoryForm = ( props:InvetoryFormProps) => {
  const { register, handleSubmit,} = useForm({});
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`updated: ${data.first} ${props.id}`)
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      dispatch(chooseColor(data.color));
      console.log(data + 'here')

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 1000)
      event.target.reset()
  
      props.onClose();
    } 
    
  }

  return (
    <div className="modal-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='inv'>Inventory</h1>
        <div>
          <label htmlFor="make"></label>
          <input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model"></label>
          <input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year"></label>
          <input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color"></label>
          <input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-center m-3 bg-white p-2 rounded hover:bg-slate-800 text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default InvetoryForm




