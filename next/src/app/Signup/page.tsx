"use client";

//All things which are in NEXTJS are server Components So We have to convert them into client Side Components by using Above Lines//

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function Signup() {

    const Router = useRouter();

    const [user, setuser] = React.useState({
        email: "",
        password: "",
        username: ""
    })

    const [buttondisable, setbuttondisable] = React.useState(false);

    const onSignup = async () => {
    try{

      const response= await axios.post("/api/users/signup",user)

      alert("Signup Successful"+response.data);

      Router.push("/Login");

    }catch(err){
       alert("Error is Occured: "+err);   
    }

    }

    useEffect(() => {
        if (user.email.length>0&&user.password.length>0&&user.username.length>0) {
        setbuttondisable(false);
        }else{
            setbuttondisable(true);
        }

    }, [user])


    return (
        <>
            <div style={{ backgroundColor: "white", color: "black", display: "block", margin: "auto", width: "fit-content" }}>

                <p style={{ fontWeight: "bolder" }}> This is Signup Form </p>

                <div style={{ backgroundColor: "white", color: "black", display: "block", margin: "auto", width: "fit-content" }}>

                    <label htmlFor="username">Username</label>
                    <hr />
                    <input type="text" id="username" value={user.username} onChange={(e) => setuser({ ...user, username: e.target.value })} style={{ border: "3px solid slateblue" }} />

                    <br />
                    <br />


                    <label htmlFor="Email">Email</label>
                    <hr />
                    <input type="text" id="Email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} style={{ border: "3px solid slateblue" }} />

                    <br />
                    <br />

                    <label htmlFor="password">password</label>
                    <hr />
                    <input type="password" id="password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} style={{ border: "3px solid slateblue" }} />

                    <br />
                    <br />

                    <button style={{ border: "3px solid black", color: "slategrey" }} onClick={onSignup}>{buttondisable?"No Sign Up":"Sign Up"}</button>

                    <br />
                    <br />
                    <Link href={"/Login"}>Login Here</Link>

                </div>


            </div>

        </>
    )
}