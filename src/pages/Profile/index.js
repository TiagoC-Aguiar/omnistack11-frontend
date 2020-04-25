import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './Profile.css'
import logoImg from '../../assets/logo.svg'

function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem vinda, ADAP</span>

        <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
        <button>
          <FiPower size={18} color="#E02041" />
        </button>

      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO: </strong>
          <p>Descrição teste</p>

          <strong>VALOR: </strong>
          <p>R$ 120,00</p>

          <button>
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>

    </div>
  )
}

export default Profile
