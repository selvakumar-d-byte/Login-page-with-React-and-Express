import { useState } from "react"
import AlertCard from "./AlertCard"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Signup() {
    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState('')
    const [signupSuccess, setSignupSuccess] = useState(false)

    const navigate = useNavigate()

    async function handleSignup() {
        if (uname === '' || email === '' || password === '' || confirmPassword === '') {
            setAlert('Please enter all fields')
            return
        }

        if (!email.includes('@') || !email.includes('.')) {
            setAlert('Please enter valid mail ID')
            return
        }

        if (password !== confirmPassword) {
            setAlert('password are not same, Please enter correct password')
            return
        }

        const response = await axios.post('https://login-page-with-react-and-express-1.onrender.com/signup', { "username": uname, "email": email, "password": password })

        const data = response.data

        if (data.success) {
            setAlert(data.alert)
            setSignupSuccess(true)
        }
    }

    return (
        <div className="w-96 max-w-sm flex flex-col gap-3 p-8 rounded-xl text-white text-center">
            <h1 className=" text-2xl font-serif font-bold">signup</h1>
            <p className="text-gray-400">Create Account to login</p>
            <input type="text" value={uname} onChange={(event) => setUname(event.target.value)} placeholder="Enter Username" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter Email" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter Password" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="bg-transparent p-1 border rounded-md border-white outline-none" />
            <button className="bg-red-600 rounded-md p-1 hover:bg-red-700" onClick={handleSignup}>Signup</button>
            <p className="text-gray-400">If you have account already? <button className="underline text-white" onClick={() => navigate('/')}>Login</button></p>

            {alert && (
                <AlertCard content={alert}
                    close={() => {
                        setAlert('')
                        if (signupSuccess) {
                            navigate('/')
                        }
                    }}
                />
            )}
        </div>
    )
}

export default Signup