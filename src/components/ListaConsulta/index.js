import Consulta from "../Consulta"
import "./index.css"

export default function() {
    return (
        <div className="consultas">
            <h2>Consultas</h2>
            <Consulta 
                temp="- - - °C" 
                pressure="- - - mmHg"
                receita=""
                dia="09"
                mes="JUL"
            />
            <Consulta 
                temp="36°C" 
                pressure="120X80mmHg"
                receita="- Diporana 100mg (a cada 6 horas)"
                dia="19"
                mes="ABR"
            />
            <Consulta 
                temp="38°C" 
                pressure="120X80mmHg"
                receita="- Rivotril 2mg (1x dia)"
                dia="18"
                mes="JAN"
            />
        </div>
        
    )
}