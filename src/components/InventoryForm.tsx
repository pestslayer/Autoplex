import { useSubmit } from "react-router-dom"
import Button from "./Button"
import input from "./input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import {  useDispatch, useStore } from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor } from "../redux/slices/RootSlice"

interface InvetoryFormProps {
  id?: string[]
}

const InvetoryForm = ( props:InvetoryFormProps) => {
  const { register, handleSubmit } = useForm({});
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
      dispatch(chooseMake(data.Make));
      dispatch(chooseModel(data.Model));
      dispatch(chooseYear(data.Year));
      dispatch(chooseColor(data.Color));

      server_calls.create(store.getState())
    }
  }

  return (
    <div className="d-flex flex-column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="make"></label>
          <input {...register('Make')} name='Make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model"></label>
          <input {...register('Model')} name='Model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year"></label>
          <input {...register('Year')} name='Year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color"></label>
          <input {...register('Color')} name='Color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <button className="flex justify-start m-3 bg-white p-2 rounded hover:bg-slate-800 text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default InvetoryForm