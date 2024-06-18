import { Button } from "@/components/ui/button";
import { LogOut, Mail } from "lucide-react";


const LoginButton = () => {


  return (
    <>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <Button variant="login">
          <LogOut className="mr-2" />
          <p>Log out</p>
        </Button>

        <Button variant="login">
          <Mail className="mr-2" />
          <p>Log in</p>
        </Button>
      </div>

      <h1 className="font-bold text-green-600">You are logged in</h1>
      <h1 className="font-bold text-green-600">You are no longer logged in</h1>
    </>
  );
};

export default LoginButton;
