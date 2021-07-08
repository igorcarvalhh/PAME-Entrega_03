import "./index.css"

function Medicines({medicamento1,medicamento2,medicamento3,medicamento4}) {
    return (
        <div className="medicines">
            <h2>Medicamentos</h2>
            <ul>
                <li>{medicamento1.nome} - {medicamento1.horario}</li>
                <li>{medicamento2.nome} - {medicamento2.horario}</li>
                <li>{medicamento3.nome} - {medicamento3.horario}</li>
                <li>{medicamento4.nome} - {medicamento4.horario}</li>
            </ul>    
        </div>
        
    )
}


export default Medicines