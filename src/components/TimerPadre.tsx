import { useState } from "react"
import Timer from "./Timer"

const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <div className="mb-5">
            <span>Milisegundos: {milisegundos}</span>
            <br/>
            <button
                className="btn btn-outline-success"
                onClick={() => setMilisegundos(1000)}>
                1000
            </button>
            <button
                className="btn btn-outline-success"
                onClick={() => setMilisegundos(2000)}>
                2000
            </button>

            <Timer milisegundos={ milisegundos } />
        </div>
    )
}

export default TimerPadre
