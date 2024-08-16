import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Initialize Supabase client with cookies from the request
    const cookiesStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookiesStore });

    // Get the current session
    const { data: { session } } = await supabase.auth.getSession();

    // Sign out the user if there is a session
    if (session) {
        await supabase.auth.signOut();
    }

    // Redirect the user to the home page
    return NextResponse.redirect(new URL("/", req.url), { status: 302 });
}
