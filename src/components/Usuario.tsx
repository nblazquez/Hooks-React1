import { useState } from "react"

interface User {
    uid: string;
    name: string;
}

const Usuario = () => {

    const[user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        });
    };

    return (
        <div className="mt-3 mb-5">
            <h3>Usuario</h3>
            <button
                className="btn btn-outline-primary"
                onClick={login}>
                Login
            </button>

            {
                (!user)
                    ?   <pre className="mt-2">No hay usuario</pre>
                    :   <pre className="mt-2">{JSON.stringify(user)}</pre>
            }
        </div>
    )
}

export default Usuario
