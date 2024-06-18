import { Button } from "@/components/ui/button"
import { LogOut, Mail } from "lucide-react"
import { useState } from "react"



const Login = () => {
    const [loggedin, setLoggedin] = useState<Boolean>(false)
    const [loggedsuccess, setLoggedsuccess] = useState<Boolean>(false)
    const [authed, setAuthed] = useState<Boolean>(false)

    function CheckAuth() {
        if (loggedin == false) {
            window.open("https://gmx.com", "_blank")
        }
        if (loggedsuccess==true){
        setLoggedin(!loggedin)}
    }

    return (
        <>
        <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <Button variant="login" className={`${loggedin ? 'hidden' : 'visible'}`} onClick={() => CheckAuth()}><Mail className="mr-2" /><p>Log in</p></Button>
            <Button variant="login" className={`${loggedin ? 'visible' : 'hidden'}`} onClick={() => CheckAuth()}><LogOut className="mr-2" /><p>Log out</p></Button>
        </div>
        <h1 className="font-bold text-green-600">You are no longer logged in</h1>
        </>
    )
}

export default Login