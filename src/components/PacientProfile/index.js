import "./index.css"
import Pacient from "../Pacient"
import ListaConsulta from "../ListaConsulta"

export default function PacientProfile() {
    return (
        <div className="profile">
            <div className="criar-consulta">
                <div className="picture">
                    <img id="profile-photo" src="https://www.w3schools.com/howto/img_avatar.png"></img>
                </div>
                <button>Marcar consulta</button>
            </div>
            <div className="profile-data">
                <Pacient
                    name="Gustavo Pimentel da Cunha Correia"
                    sex="Masculino"
                    address="Av. Oliveira Belo, 1"
                    cep="20725-232"
                    profession="Engenheiro"
                    status="Solteiro"
                    phone="(21) 989586562"
                    mail="gustavopimentel@poli.ufrj.br"
                />
                <ListaConsulta/>
            </div>
            
            
        </div>
        

    )
}