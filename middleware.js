import { jwtDecode } from "jwt-decode"
import { NextResponse } from "next/server"
            
export const config = {
    matcher: ['/admin/:path*']
}
export default function middleware(request) {
//     const token = request.cookies.get("token")
//     function tokenExpiry(token){

//         const decodedToken =  
//         decodeURIComponent(escape(atob(token.split('.')[1])));
//         const expirationTime=JSON.parse(decodedToken()).exp;
//         const currentTime=Date.now()/1000;
//         return currentTime > expirationTime;


// }

// if(tokenExpiry(jwtToken)){
//     console.log("token has expired")
// }
// else{
//     console.log("token is  still valid")
 // }


    
    if (request.cookies.get('token') === undefined) {
        return NextResponse.redirect(`${request.nextUrl.origin}/Login`)}
    

    }

