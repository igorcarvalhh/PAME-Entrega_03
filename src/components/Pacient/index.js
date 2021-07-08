import "./index.css"

export default function Pacient(props) {
    return (
        <div className="paciente">
            <h2>Sobre o paciente</h2>
            <p><b>Nome:</b> {props.name}</p>
            <p><b>Sexo:</b> {props.sex}</p>
            <p><b>Endereço:</b> {props.address}</p>
            <p><b>CEP:</b> {props.cep}</p>
            <p><b>Profissão:</b> {props.profession}</p>
            <p><b>Estado civil:</b> {props.status}</p>
            <p><b>Celular:</b> {props.phone}</p>
            <p><b>E-mail:</b> {props.mail}</p>

        </div>
    )
}