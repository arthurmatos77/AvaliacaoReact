export default function Exercicio8() {

    const [numero, setNumero] = useState("")
    const [lista, setLista] = useState([])

    function fazerTabuada() {
        let resultado = []

        for (let i = 0; i <= 10; i++) {
            resultado.push(numero + " x " + i + " = " + (numero * i))
        }

        setLista(resultado)
    }

    return (
        <div>
            <h2>Exercício 8</h2>

            <input
                placeholder="Digite um número"
                onChange={(e) => setNumero(e.target.value)}
            />

            <br /><br />

            <button onClick={fazerTabuada}>Gerar Tabuada</button>

            {lista.map((item, i) => (
                <p key={i}>{item}</p>
            ))}

        </div>
    )
}