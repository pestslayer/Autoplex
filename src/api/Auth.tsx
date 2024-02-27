import { retry } from "@reduxjs/toolkit/query"

const Auth = () => {
    LogIn: async () => {
    const response = await fetch(`http://127.0.0.1:5000/signin`)
    return await response.json()
}


return (
    <div className="flex flex-col justify-center align-middle ">
        
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Password" />
        <button type="submit"></button>
    
    
    </div>
)
}

export default Auth