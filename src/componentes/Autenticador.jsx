import React from 'react'
import "./Autenticador.csS"

const Autenticador = () => {

 return (
    
<div className="auth-container">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Acceso del Equipo</h1>
      <p className="text-center text-gray-500 mb-8">
        Por favor, introduce tu ID de usuario para acceder.
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="user-id-input" className="block text-sm font-medium text-gray-700 mb-1">ID de Usuario</label>
          <input type="text" id="user-id-input" className="form-input" placeholder="Introduce tu ID" />
        </div>

        <div>
          <label htmlFor="user-role-select" className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Rol</label>
          <select id="user-role-select" className="form-input">
            <option value="supervisor">Supervisor</option>
            <option value="technician">Técnico</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">
          Iniciar sesión
        </button>
      </form>

      <div id="status-message" className="alert hidden"></div>
    </div>

  )
  
}

export default Autenticador