"use client"
import { useState } from "react"
import { updateWatch } from "../server-actions/updateWatch"

export default function EditWatch({watch}){

    const [showModel, setShowModel] =useState(false)
    const [formData, setFormData] = useState({
        brand: watch.brand,
        model: watch.model,
        referenceNumber:watch.referenceNumber
    })


    const handleChange = (e) => setFormData({...formData,[e.target.name]: e.target.value})


    return (
        <div>
            <button onClick={() => setShowModel(true)} className="bg-blue-500 hover:bg-blue-700 text-white">
            Edit
            </button>
            {
                showModel && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center py-4">
                        <div className="model-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                            <span className="close text-white text-xl leading-none hover:text-gray-300 curser-pointer" onClick={() => setShowModel(false)}> &times;</span>
                            <form action={updateWatch} onSubmit={() => setShowModel(false)} className="mt-4">
                            <input 
                            type="hidden"
                             name="id" 
                             id={watch.id} 
                             />
                       
                        <div className="mb-4">
                            <label htmlFor="brand" className="block text-gray-300 mb-2">Brand</label>
                            <input 
                            type="text"
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange ={handleChange}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                             />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="model" className="block text-gray-300 mb-2">Model</label>
                            <input 
                            type="text"
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange ={handleChange}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                             />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="referenceNumber" className="block text-gray-300 mb-2">Reference Number</label>
                            <input 
                            type="text"
                            id="referenceNumber"
                            name="referenceNumber"
                            value={formData.referenceNumber}
                            onChange ={handleChange}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                             />
                        </div>

                        <button type="submit"> Update Watch</button>

                        

                        </form>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}