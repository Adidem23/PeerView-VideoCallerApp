import React from 'react';
import { useMemo } from 'react';

const peerContext = React.createContext(null);

export const usePeerProvider = () => {
    return React.useContext(peerContext);
}

export const PeerProvider = (props) => {

    const Peer = useMemo(() => new RTCPeerConnection({

        iceServers: [
            {
                urls: [
                    "stun:stun.l.google.com:19302",
                    "stun:global.stun.twilio.com:3478",
                ]
            }
        ]

    }), []);

    const createOffer = async () => {
        const offer = await Peer.createOffer();
        await Peer.setLocalDescription(offer)
        return offer;
    }

    const CreateAnswer = async (offern) => {

            await Peer.setRemoteDescription(offern);

            const answer = await Peer.createAnswer();

            await Peer.setLocalDescription(answer);

            return answer;

    }

    const SetRemoteAnswer = async (ans) => {
        await Peer.setRemoteDescription(ans);
    }

    return (
        <peerContext.Provider value={{ Peer, createOffer, CreateAnswer, SetRemoteAnswer }}>
            {props.children}
        </peerContext.Provider>
    )
}


