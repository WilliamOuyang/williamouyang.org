// import { Button } from "@/components/ui/button";
// import { LogOut, Mail } from "lucide-react";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog" 
// import { Input } from "@/components/ui/input"

// const LoginButton = () => {
//     const [LoggedIn, setLoggedIn] = useState<boolean>(false)

//   return (
//     <>  
//       <div style={{ position: "absolute", top: "10px", right: "10px" }}>

//       <Dialog>
//       <DialogTrigger asChild>   
//       {LoggedIn ?
//         <Button variant="login" onClick={()=>setLoggedIn(false)}>
//           <LogOut className="mr-2" />
//           <p>Log out</p>
//         </Button>
//         :
//         <Button variant="login" onClick={()=>setLoggedIn(true)}>
//           <Mail className="mr-2" />
//           <p>Log in</p>
//         </Button>
//       }
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
    
//           Email Address
//           <Input type="email" placeholder="Email address" style={{width:'100%'}}/>
//           Password
//           <Input type="password" placeholder="Password" style={{width:'100%'}}/>

        

//         <DialogFooter>
//           <Button type="submit">Log in<input type="text" name="" id="" /></Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//       </div>
// {/* 
//       <h1 className="font-bold text-green-600">You are logged in</h1>
//       <h1 className="font-bold text-green-600">You are no longer logged in</h1> */}
//     </>
//   );
// };

// export default LoginButton;
