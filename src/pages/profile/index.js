import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiArrowLeft } from 'react-icons/fi'


import logoImg from '../../assets/logo.svg'
import './style.css'

export default function Profile () {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Be The Hero</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                
            </header>
            
            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste </p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20}  />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste </p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20}/>
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste </p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20}  />
                    </button>
                </li>
                
                 <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste </p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20}  />
                    </button>
                </li>
            </ul>
           
           <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para menu 
                </Link>
        </div>
    )
}