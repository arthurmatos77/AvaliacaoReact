
import { useState } from "react"

export default function Exercicio1() {

    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("")
    const [resultado, setResultado] = useState("")

    function somar() {
        let soma = Number(n1) + Number(n2)
        setResultado(soma)
    }

    return (
        <div>
            <h2>Exercício 1</h2>

            <input
                placeholder="Digite o primeiro número"
                onChange={(e) => setN1(e.target.value)}
            />

            <br />

            <input
                placeholder="Digite o segundo número"
                onChange={(e) => setN2(e.target.value)}
            />

            <br /><br />

            <button onClick={somar}>Somar</button>

            <p>Resultado: {resultado}</p>
        </div>
    )
}

