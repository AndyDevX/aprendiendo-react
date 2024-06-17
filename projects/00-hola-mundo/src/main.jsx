import React from 'react'
import ReactDOM from 'react-dom/client'
// Recuerda importar el component
import { App } from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    // Recuerda no hacer apertura ni cierre
    <App />
)
