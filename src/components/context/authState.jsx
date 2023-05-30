import React, { useState } from "react"
import Authcontext from "./authcontext"

const Authstate = (props) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState([]);
    const register = async (reg) => {
        const apicall = await fetch(`###`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({ user: reg.name, email: reg.email, password: reg.password, mobileNo: reg.Mobile }),
        })
        let data = await apicall.json()
        console.log(data)
        setToken(data.authToken)
        setUser(data.user)
        alert(data.message)
    }

    return (
        <Authcontext.Provider value={{ register, token, setToken, user, setUser }}>
            {props.children}
        </Authcontext.Provider>
    )
}
export default Authstate