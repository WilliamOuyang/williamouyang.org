import { Button } from "@/components/ui/button"
import { LogOut, Mail } from "lucide-react"

function CheckAuth() {
    window.open("/login")
}



const LoginButton = () => {
    return (
        <>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <Button variant="login" onClick={() => CheckAuth()}><Mail className="mr-2" /><p>Log in</p></Button>
                <Button variant="login" onClick={() => CheckAuth()}><LogOut className="mr-2" /><p>Log out</p></Button>
            </div>
            <h1 className="font-bold text-green-600">You are no longer logged in</h1>
        </>
    )
}

export default LoginButton