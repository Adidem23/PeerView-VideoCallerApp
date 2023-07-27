"use client";

//All things which are in NEXTJS are server Components So We have to convert them into client Side Components by using Above Lines//

import Link from "next/link";
import React from "react";

import { useRouter } from "next/navigation";

import { axios } from "axios";


export default function LoginPage() {

    const [user, setuser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {

    }

    return (
        <>
            <div style={{ backgroundColor: "white", color: "black", display: "block", margin: "auto", width: "fit-content" }}>

                <p style={{ fontWeight: "bolder" }}>Login With Your Username and Password </p>


                    <label htmlFor="Email">Email</label>
                    <hr />
                    <input type="text" id="Email" value={user.email} onChange={(e) => setuser({ ...user, email: e.target.value })} style={{ border: "3px solid slateblue" }} />

                    <br />
                    <br />

                    <label htmlFor="password">password</label>
                    <hr />
                    <input type="password" id="password" value={user.password} onChange={(e) => setuser({ ...user, password: e.target.value })} style={{ border: "3px solid slateblue" }} />

                 <br/>
                 <br/>

                 <button style={{border:"3px solid black", color:"slategrey"}} onClick={onLogin}>Login</button>

                 <br/>
                 <br/>
                 <Link href={"/Signup"}>Sign Up</Link>

                </div>

        </>
    )
}