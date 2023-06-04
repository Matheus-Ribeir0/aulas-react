import './TextField.css'

const TextField = (props) => {

    //const [valor, setValor] = useState('')


const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.mandatory} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField
