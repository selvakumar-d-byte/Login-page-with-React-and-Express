import { useState } from "react"
import AlertCard from "./AlertCard"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [loginSuccess, setLoginSuccess] = useState(false)

    const navigate = useNavigate()

    async function handleLogin() {
        if (email === '' || password === '') {
            setAlert('Please enter all fields')
            return
        }

        if (!email.includes('@') || !email.includes('.')) {
            setAlert('Please enter valid mail ID')
            return
        }

        const response = await axios.post('http://localhost:5000/', { 'email': email, 'password': password })

        const data = response.data

        if (data.success) {
            setAlert('Login successful')
            setLoginSuccess(true)
        }
        else {
            setAlert(data.message)
        }   
    }


    return (
        <div className="w-96 max-w-sm flex flex-col gap-4 p-8 rounded-xl text-white text-center">
            <h1 className=" text-3xl font-serif font-bold">Login</h1>
            <p className="text-gray-400">Login to continue</p>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <button className="bg-red-600 rounded-md p-1 hover:bg-red-700" onClick={handleLogin}>Login</button>
            <p className="text-gray-400">If you not have account? <button className="underline text-white" onClick={() => navigate('/signup')}>Singup</button></p>
            
            {alert && (
                <AlertCard
                    content={alert}
                    close={() => {
                        setAlert('')
                        if (loginSuccess) {
                            navigate('/home')
                        }
                    }}
                />
            )}
        </div>
        
    )
}

export default Login