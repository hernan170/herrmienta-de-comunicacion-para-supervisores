import React from 'react';
import "./SupervisorPanel.css"


const SupervisorPanel = () => {
  return (
    
    <div id="supervisor-panel-container" className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="panel-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Anuncios</h2>
        <div className="space-y-4 mb-6">
          <input type="text" placeholder="Título del anuncio" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Contenido del anuncio..." rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
            Publicar Anuncio
          </button>
        </div>
        <h3 className="text-xl font-medium text-gray-700 mb-4">Anuncios Recientes</h3>
        <div className="space-y-4">
          
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 relative shadow-sm">
            <h4 className="text-lg font-bold text-blue-800">Actualización de Protocolo</h4>
            <p className="text-gray-700 text-sm mt-1">Se ha implementado un nuevo protocolo de seguridad para las visitas a clientes.</p>
            <p className="text-gray-500 text-xs mt-2">15 de mayo de 2024, 10:30 a.m.</p>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="text-gray-500 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg></button>
              <button className="text-gray-500 hover:text-red-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></button>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 relative shadow-sm">
            <h4 className="text-lg font-bold text-blue-800">Recordatorio de Citas</h4>
            <p className="text-gray-700 text-sm mt-1">Por favor, revisen sus agendas para las citas programadas de esta semana.</p>
            <p className="text-gray-500 text-xs mt-2">14 de mayo de 2024, 08:00 a.m.</p>
            <div className="absolute top-2 right-2 flex space-x-1">
              <button className="text-gray-500 hover:text-blue-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg></button>
              <button className="text-gray-500 hover:text-red-600 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="panel-section">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mensajería</h2>
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-2">Mensaje de Grupo</h3>
          <textarea placeholder="Escribe un mensaje para el grupo..." rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 mt-2">
            Enviar Mensaje
          </button>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">Informes de los Técnicos</h3>
          <div className="space-y-4">
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm">
              <p className="text-gray-800 text-sm">El trabajo en la estación central se completó sin incidentes. Se reemplazó el módulo defectuoso y se realizó una prueba completa.</p>
              <p className="text-gray-500 text-xs mt-2">De: tecnico_789 - 15 de mayo de 2024, 11:45 a.m.</p>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm">
              <p className="text-gray-800 text-sm">Necesito acceso a la herramienta de diagnóstico D-5 para la siguiente tarea en el sector norte.</p>
              <p className="text-gray-500 text-xs mt-2">De: tecnico_101 - 15 de mayo de 2024, 10:05 a.m.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupervisorPanel;