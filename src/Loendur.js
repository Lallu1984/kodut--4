import { useState } from "react"

function Loendur() {

    const [lugemisi, setLugemisi] = useState(0)  

   const suurenda = () => {
        setLugemisi(lugemisi + 1)
    }

    const vahenda = () => {
        if (lugemisi < 1) {
        return;
    }
        setLugemisi(lugemisi - 1)
    }

    return (
        <div>
            <h4>Lugemiste arv</h4>
            <button className="loendurNupp" onClick={vahenda}>-</button>
            {lugemisi}
            <button className="loendurNupp" onClick={suurenda}>+</button>
            </div>
    )
}
export default Loendur
