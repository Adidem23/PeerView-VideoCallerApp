import React, { useEffect, useCallback } from 'react';
import { useSocket } from '../Providers/Socket';
import { usePeerProvider } from '../Providers/PeerNew';


const Room = () => {

    const Socket = useSocket();

    const { createOffer, CreateAnswer, SetRemoteAnswer } = usePeerProvider();

    const newuserjoined = useCallback(async (data) => {
        
        const { emailId } = data;

        console.log("New User Joined :" + emailId);

        const offer = await createOffer();

        console.log("Call from" + emailId + "Offer is: " + offer);

        Socket.emit("Call-User", { emailId, offer });

    }, [createOffer, Socket]);


    const Handlecall = useCallback(async (data) => {

        const { from, offer } = data;

        const answer = await CreateAnswer(offer);

        Socket.emit("Call-Accepted", { emailId: from, answer })

    }, [CreateAnswer, Socket])


    const handleAcceptedcall = useCallback(async (data) => {

        const { answer } = data;

        await SetRemoteAnswer(answer);

        console.log("Call Got Accepted :", answer);

    }, [SetRemoteAnswer])


    useEffect(() => {
        Socket.on("User-Joined", newuserjoined);

        Socket.on("Incoming-call", Handlecall);

        Socket.on("Call-Accepted", handleAcceptedcall);

        return () => {
            Socket.off("user-joined", newuserjoined)

            Socket.off('Incoming-call', Handlecall)

            Socket.off("Call-Accepted", handleAcceptedcall);
        }

    }, [newuserjoined, Socket, Handlecall, handleAcceptedcall])

    return (
        <div>



        </div>
    );
}

export default Room