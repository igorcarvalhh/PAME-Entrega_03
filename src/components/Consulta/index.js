import "./index.css"

export default function(props) {
    
    return (
        <div className="consulta">
            <div className="date">
                <div className="circle">
                    <p>{props.dia}</p>
                    <p>{props.mes}</p>
                </div>
            </div>
            
            <div className="dados-consulta">
                <div className="medicoes">
                    <p>Temp: {props.temp}</p>
                    <p>Pressão: {props.pressure}</p>
                </div>
                <div className="receita">
                    <p>Receita:</p>
                    <p>{props.receita}</p>
                </div>
            </div>
        </div>
    )
}