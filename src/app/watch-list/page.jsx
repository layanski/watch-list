import WatchForm from "../components/WatchForm";
import EditWatch from "../components/EditWatch";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList(){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore})
    const {data:{session}} = await supabase.auth.session();
    const user= session?.user


    const {data: watches1, error} = await supabase
    .from ("watches1")
    .select("*")
    .eq("user_id",user.id)
    .order("brand",{ascending:true})


    if(error){
        console.error("Error fetching watches1")

    }

    console.log ({user})
 
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300"> 

            <div className="container mx-auto p-6 sm:p-12">
                <div className="flex justify-between items-start">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        My Watch List
                    </h1>
                <form action="/auth/signout" method="post">
                    <button 
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    > 
                        Sign Out 
                    </button>
                    </form>
                </div>
                <WatchForm />
                <div className="mt-6">
                    {
                        watches1.map((watch) => (
                            <div key={watch.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow"> 
                            <h2 className="text-xl text-white mb-2">{watch.brand} - {watch.name} </h2>

                            <div className="flex space-x-2"> 
                                <form action={"deleteWatch"}>
                                    <input type="hidden"  name="id" value={watch.id} />
                                    <button 
                                    type="submit"
                                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"> 
                                        Delete 
                                    </button>

                                </form>
                                    <EditWatch watch = {watch} />

                                </div>
                            </div>
                        )
                        
                        
                        )
                    }
                </div>
            </div>
        </div>
    )
}