import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { TodoApp } from './Components/TodoApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TodoApp></TodoApp>
  </StrictMode>,
)
