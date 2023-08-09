import React from 'react';

import { useSocket } from '../Providers/Socket';

import { useState, useEffect,useCallback } from 'react';

import {useNavigate} from 'react-router-dom';

const Home = () => {

    const [email, setemail] = useState();
    const [roomId, setroomId] = useState();

    const socket = useSocket();
    const navigate=useNavigate();

    const handleJoinroom = () => {

        socket.emit("join-room", { roomId: roomId, emailId: email });
    }

    const handleroomJoined =useCallback( ({ roomId }) => {
       
        navigate(`/room/${roomId}`);
    },[navigate])

    useEffect(() => {
        socket.on('joined-room', handleroomJoined);

        return(()=>{
            socket.off('joined-room', handleroomJoined);
        })


    }, [handleroomJoined,socket]);

    const changeemial = (e) => {
        setemail(e.target.value);
    }

    const changeRoom = (e) => {
        setroomId(e.target.value);
    }


    return (

        <div style={{ border: '3px solid red' }}>

            <h1>WebrtcVideo Call</h1>

            <input type='email' placeholder='Enter Your Email Here' value={email} onChange={changeemial} />

            <br />
            <br />

            <input type='number' placeholder='Enter Your Room Here' value={roomId} onChange={changeRoom} />

            <br />
            <br />


            <button onClick={handleJoinroom}>Enter Room</button>

        </div>


    );
}

export default Home