import { useState } from "react";

function Hero() {
    const [user, setUser] = useState()
    console.log({ user })
    const handleLogin = () => {
        setUser({ firstName: 'Ed', email: 'ed@bocacode.com', admin: true })
    }
    // user === undefined ( falsey )
    // !user === truthy
    // !!user === false ( boolean )
    // !!!user === true ( boolean )
    const handleLogout = () => {
        setUser(null) //or (undefined) or () <- empty 
    }
    if (!user) { //if not user:
        return <button onClick={handleLogin}>Login</button>
    }
    return (
        <>
            <h1>Hello {user.firstName}</h1>
            <button onClick={handleLogout}>Log out</button>
        </>
    )
}

export default Hero;