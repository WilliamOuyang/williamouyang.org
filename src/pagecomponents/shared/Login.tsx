import { Button } from "@/components/ui/button"
import { CircleUserRound, LogOut } from "lucide-react"
import { useState } from "react"


const Login = () => {
    const [loggedin, setLoggedin] = useState<Boolean>(false)

  return (
    <div style={{position:'absolute', top:'10px', right:'10px'}}>
        <Button variant="login" className={`${loggedin ? 'hidden' : 'visible'}`} onClick={() =>setLoggedin(true)}><CircleUserRound className="mr-2"/><p>Sign in</p></Button>
        <Button variant="login" className={`${loggedin ? 'visible' : 'hidden'}`} onClick={() =>setLoggedin(false)}><LogOut className="mr-2"/><p>Sign out</p></Button>
    </div>
  )
}

export default Login