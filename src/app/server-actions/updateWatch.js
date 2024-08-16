"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateWatch (formData){
    const id = formData.get("id")
    const model = formData.get("model")
    const brand = formData.get("brand")
    const referenceNumber = formData("referenceNumber")

    const cookies= cookies();
    const supabase= createServerComponentClient({cookies: () => cookieStore})
    const {data : {session}} = await supabase.auth.getSession();
    const user = session?.user

    if (!user){
        console.error("User is not authenticated within Updatewatch server action")
    }

    const {data,error} = await supabase
    .from("watches1")
    .update(
        {
            model,
            brand,
            reference_number: referenceNumber,
     }
    ).match({
        id,user_id: user.id
    })

    if(error){
        console.error("Error Updating data",error)
        return;
    }

    revalidatePath("/my-app")

    return{message:"success"}
}