import React from "react";
import "./styles.css"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Clínica Yama</h1>
            </div>
            
            <div className="nav-options">
                <h3 className="selected">Pacientes</h3>
                <h3>Médicos</h3>
                <h3>Consultas</h3>
                <h3>Perfil</h3>
            </div>
        </header>
    )
}