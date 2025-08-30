import React from 'react';
import "./TechnicianPanel.css"

const TechnicianPanel = () => {
  return (
    <div id="technician-panel-container" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="panel-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anuncios</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 shadow-sm">
            <h4 className="text-lg font-bold text-blue-800">Actualización de Protocolo</h4>
            <p className="text-gray-700 text-sm mt-1">Se ha implementado un nuevo protocolo de seguridad para las visitas a clientes.</p>
            <p className="text-gray-500 text-xs mt-2">15 de mayo de 2024, 10:30 a.m.</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 shadow-sm">
            <h4 className="text-lg font-bold text-blue-800">Recordatorio de Citas</h4>
            <p className="text-gray-700 text-sm mt-1">Por favor, revisen sus agendas para las citas programadas de esta semana.</p>
            <p className="text-gray-500 text-xs mt-2">14 de mayo de 2024, 08:00 a.m.</p>
          </div>
        </div>
      </section>
      <section className="panel-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mensajería</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Mensajes del Supervisor</h3>
          <div className="space-y-4 max-h-64 overflow-y-auto p-2">
            <div className="bg-blue-100 rounded-lg p-3 shadow-sm">
              <p className="text-sm text-gray-800">Hola equipo, por favor, verifiquen el estado de los equipos en la red troncal.</p>
              <p className="text-xs text-gray-600 mt-1">
                <span className="font-semibold">Supervisor</span> - 15 de mayo de 2024, 12:00 p.m.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Subir Informe</h3>
          <textarea placeholder="Describe el trabajo realizado..." rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 mt-2">
            Enviar Informe
          </button>
        </div>
      </section>
    </div>
  );
};

export default TechnicianPanel;