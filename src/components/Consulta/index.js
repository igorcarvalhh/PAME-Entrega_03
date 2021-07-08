import "./index.css"

export default function(props) {
    return (
        <div>
            <div className="date"></div>

            <div>
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