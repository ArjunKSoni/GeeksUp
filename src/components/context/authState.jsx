import React, { useState } from "react"
import Authcontext from "./authcontext"

const Authstate = (props) => {
    const [token, setToken] = useState("");
    const [User, setUser] = useState([]);
    const [payload, setpayload] = useState("");


    return (
        <Authcontext.Provider value={{ token, setToken, User, setUser, setpayload, payload }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate