import "./index.css"

export default function PacientCard(props) {
    return (
        <div className="card">
            
            <img srcSet="https://www.w3schools.com/howto/img_avatar.png"/>
            
            <div className="profile-information">
                <p>{props.name}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )    
}