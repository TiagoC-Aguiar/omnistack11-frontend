import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './NewIncident.css'
import logoImg from '../../assets/logo.svg'

function NewIncident() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const ongId = localStorage.getItem('ongId')
  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title, description, value
    }

    try {
      await api.post('/incidents', data, {
        headers: {
          authorization: ongId
        }
      })
      history.push('/profile')
    } catch(err) {
      alert('Não foi possível cadastrar o novo caso')
      console.error('Erro ao cadastrar novo caso: ', err)
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero"/>
          
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>

        </section>

        <form>
          <input type="text" placeholder="Título do caso" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
          />
          <textarea placeholder="Descriçao" 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
          />
          <input type="text" placeholder="Valor em reais (R$)" 
                  value={value}
                  onChange={e => setValue(e.target.value)}
          />
          <button className="button" onClick={handleNewIncident} type="submit">Cadastrar</button>

        </form>

      </div>

    </div>
  )
}

export default NewIncident
