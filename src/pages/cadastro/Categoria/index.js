import React from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

export const CadastroCategoria = () => {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>
      <Link to="/">
        ir para Home
      </Link>
    </PageDefault>
  )
}