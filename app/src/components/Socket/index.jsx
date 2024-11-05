import socketIO from "socket.io-client"
import { createContext, useEffect } from "react";

export const socketContext = createContext(null)

const hostname = window.location.hostname
const socket = socketIO(`http://${hostname}:6500`)
const Socket = ({children}) => {
    
    const handleOnConnect = () => {
        console.log ("Connected")
    }

    const handleOnDisconnect = () => {
        console.log ("Disconnected")
    }


    useEffect(()=>{

        socket.on('connect', handleOnConnect)
        socket.on('disconnect', handleOnDisconnect)

        return (()=>{
            socket.off('connect', handleOnConnect)
            socket.off('disconnect', handleOnDisconnect)
        })

    },[])

    const emit = ({channel, value, cb}) => {
        if (!socket.connected) return
        socket.emit(channel, value, cb)
    }

    return ( 
    <socketContext.Provider value = {{emit}}>
        {children}
    </socketContext.Provider> );
}
 
export default Socket;