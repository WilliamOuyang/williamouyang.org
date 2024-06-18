import {createClient} from '@supabase/supabase-js'
import { Button } from "@/components/ui/button"
import { LogOut, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const supabase = createClient(
    "https://bsqkowajqcuuiaybhumq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
)

function CheckAuth() {
    window.open("/login")
}




const LoginButton = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        const check = localStorage.getItem("authed");
        if (check == "passed") {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    })

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/whitepaper");
    }


    return (
        <>
            <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                {loggedIn ?
                    <Button variant="login" onClick={() => signOutUser()}><LogOut className="mr-2" /><p>Log out</p></Button>
                    :
                    <Button variant="login" onClick={() => CheckAuth()}><Mail className="mr-2" /><p>Log in</p></Button>
                }
            </div>

            {loggedIn ?
                <h1 className="font-bold text-green-600">You are logged in</h1>
                :
                <h1 className="font-bold text-green-600">You are no longer logged in</h1>
            }
        </>
    )
}

export default LoginButton