'use client';
import { redirect } from "next/navigation";
import { useState } from "react";



const HandleLogin = () => {

    const [ email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleForgotPassword = async()=>{
         if(!email){
                setError("Please enter your email");
         }
         try {
            const response = await fetch("'/api/auth/login'", {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: { "Content-Type": "application/json" },
            });
    
            const data = await response.json();
    
            if (!data .ok) {
                throw new Error( "Failed to send email");
            }
    
            alert("The password has been sent to your email.");
        } catch (error: any) {
            setError( "Something went wrong");
        }
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
         setError("");

        if(!email || !password){
            setError("Please fill in all fields");
            return;
        }
            
        try{
            const response =  await fetch('/api/auth/login',{
                method: "POST",
                body: JSON.stringify({email,password}),
                headers:{" Content-Type":"application/json"},
            }) ;

            
            if(!response.ok){
                console.error("Login failed");
            }
            const data = await response.json();

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            localStorage.setItem("username",data.username);
            
            redirect('/');

        }catch(error:any){
            setError( "Login failed");

        }

    }
 return(
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                   <div className="pg-white p-8 rounded-2xl shadow-lg w-96 ">
                        <h1 className="text-2xl text-blue-500 font-bold text-center mb-6"> Create Your Account</h1>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                       <form className="space-y-4" onSubmit={handleSubmit}>
                          <div >
                          
                          <label htmlFor="email" className="block text-gray-500 font-medium" >Email:</label>
                          <input 
                           id="email"
                           type="email" 
                           placeholder="your Email"
                           name="email"
                           required 
                           onChange={(e)=>setEmail(e.target.value)}
                           className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"/>
                          </div>
        
                          <div>
                            <label htmlFor="password" className="block text-gray-500 font-medium" > Password:</label>
                            <input
                              id="password"
                              type="password"
                              placeholder="your password"
                              name="password"
                              onChange={(e)=>setPassword(e.target.value)}
                              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2  focus:ring-blue-400 focus:outline-none"/>
                          </div>
        
                          <div className="flex justify-between items-center mt-4">
                          <button  className="text-blue-500 hover:underline" onClick={ handleForgotPassword} >Forgot your Password ?</button>
                          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">login</button>
                          </div>
                      </form>
                 </div>
       </div>
        

    </div>
 )
}
export default HandleLogin;