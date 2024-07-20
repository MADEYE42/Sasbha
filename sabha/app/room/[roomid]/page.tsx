"use client"
import useUser from '@/hooks/user';
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {v4 as uuid} from "uuid";  

const Room   = ({params}:{params:{roomid:string}}) => {
    const {fullName} = useUser();
    const roomId = params.roomid;
    let myMeeting: any = async (element:any) => {

        // generate Kit Token
        const appID =125530239 ;
        const serverSecret = "d5d04075cd3445fa45d04f88829133ec";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,uuid(),  fullName||'user'+Date.now(), 720);
       
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
               container: element,
               sharedLinks: [   
                 {
                   name: 'Personal link',
                   url:
                    window.location.protocol + '//' + 
                    window.location.host + window.location.pathname +
                     '?roomID=' +
                     roomId,
                 },
               ],
               scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
               },
               maxUsers:10,

          });
          
         };
  return (
    <div
    className="w-full h-screen"
    ref={myMeeting}
  ></div>
  )
}

export default Room