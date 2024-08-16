import { addWatch } from "../server-actions/addWatch"

export default function WatchForm(){
    return(
        <form action={addWatch} className="mb-6">
            <div className="mb-4">
                <label htmlFor="brand" className="block text-white mb-2"> Brand</label>
                <input
                   type="text"
                   id="brand"
                   name="brand" 
                   className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-4"
                   required />

            </div>

            <div className="mb-4">
                <label htmlFor="model" className="block text-white mb-2"> Model </label>
                <input 
                type="text"
                 id="model" 
                 name="model"
                 className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-4"
                  required />

            </div>
               
            <div  className="mb-4">
                <label htmlFor="referenceNumber" className="block text-white mb-2">ReferenceNumber </label>
                <input 
                 type="text"
                 id="referenceNumber"
                 name="referenceNumber"
                 className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-4"
                 required />

            </div>

            <button type="submit">
                Add watch
            </button>

        </form>
    )
}