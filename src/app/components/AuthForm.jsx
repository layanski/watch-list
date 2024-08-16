"use client";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";

export default function AuthForm(){
    
    return(
        <Auth 
            supabaseClient={supabase}
            view="magic_link"
            showLinks={false}
            providers={[]}
            redirectTo="http://localhost:3000/auth/callback"
            appearance={{
                theme:"dark",
                button:{
                    className:"bg-white-400 text-gray-900 hover:bg-gray-600"
                },
                    input:{
                        className:"bg-gray-700 border-gray-600 text-white"
                    }

            }}
        />
    )
}