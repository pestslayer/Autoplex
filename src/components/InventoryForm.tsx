import { useSubmit } from "react-router-dom"
import Button from "./Button"
import input from "./input"

import { useForm } from 'react-hook-form'

interface InvetoryFormProps {
  id?: string[]
}

const InvetoryForm = ( props:InvetoryFormProps) => {
  const { register, handleSubmit } = useForm({})

  return (
    <div className="d-flex flex-column">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="make">Make</label>
          <input {...register('Make')} name='Make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input {...register('Model')} name='Model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input {...register('color')} name='color' placeholder="Color" />
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