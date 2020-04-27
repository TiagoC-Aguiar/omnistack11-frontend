import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'

import './Profile.css'
import logoImg from '../../assets/logo.svg'

function Profile() {
  const [incidents, setIncidents] = useState([])
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')

  const history = useHistory()

  useEffect(() => {
    if(!ongId) {
      history.push('/')
    }
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId, history])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch(err) {
      alert('Erro ao deletar caso , tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"/>
        <span>Bem vindo, {ongName}</span>

        <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>

      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button onClick={() => handleDeleteIncident(incident.id)} >
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))} 
     
      </ul>

    </div>
  )
}

export default Profile
