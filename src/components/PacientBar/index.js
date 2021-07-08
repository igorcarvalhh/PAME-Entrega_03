import "./index.css"
import PacientCard from "../PacientCard"

export default function PacientBar() {
    return (
        
        <div className="container">
            <form>
                <div className="barra-de-pesquisa">
                    <button type="submit">
                        <img id="lupa-icon" src="https://image.flaticon.com/icons/png/512/116/116836.png"></img>
                    </button>
                    <input type="text" placeholder="Search.." name="search"/>
                </div>
                
                
            </form>
            <div className="cadastrar-paciente">
                <button >Cadastrar novo paciente</button>
            </div>
            
            <div className="card-list">
                <PacientCard name="Gustavo Pimentel" phone="(21) 989586562"/>
                <PacientCard name="Igor Carvalho" phone="(21) 98815-0626"/>
                <PacientCard name="Lucca Matos" phone="(21) 98815-0626"/>
                <PacientCard name="David Soares" phone="(21) 98815-0626"/>
                
            </div>
        </div>
    )
}