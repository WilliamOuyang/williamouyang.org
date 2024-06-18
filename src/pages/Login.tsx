import {createClient} from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
// import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://bsqkowajqcuuiaybhumq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzcWtvd2FqcWN1dWlheWJodW1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODY3MjYsImV4cCI6MjAzNDI2MjcyNn0.JQziKNIcTKGBK0jbF7GZj5a0PawnZY2vHX9-vILJcJw"
)


const Login = () => {

    supabase.auth.onAuthStateChange(async (event ) => {
        if (event !== "SIGNED_OUT"){
            localStorage.setItem("authed", "true")
        } else {
            localStorage.setItem("authed", "false")
        };
    })

  
  return (
    <div className="App">
        <header className="App-header">
            <Auth
                supabaseClient={supabase}
                // appearance={{theme: ThemeSupa}}
                theme="dark"
                // providers={["discord"]}
            />
        </header>

    </div>
  )
}

export default Login


