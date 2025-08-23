import React from 'react';

function DadosTab({ currentWeight, handleWeightChange, addWeightRecord, weightRecords }) {
  return (
    <div className="data-tab">
      <h2>Registro de Dados</h2>
      <div className="weight-input-section">
        <h3>Registrar Peso</h3>
        <div className="input-group">
          <input
            type="number"
            step="0.1"
            placeholder="Seu peso em kg"
            value={currentWeight}
            onChange={handleWeightChange}
            className="weight-input"
          />
          <button onClick={addWeightRecord} className="register-btn">Registrar Peso</button>
        </div>
      </div>
      <div className="recent-weights">
        <h3>Pesos Recentes</h3>
        {weightRecords.length === 0 ? (
          <p>Nenhum peso registrado ainda.</p>
        ) : (
          <ul className="weight-list">
            {weightRecords.slice(-5).reverse().map(record => (
              <li key={record.id}>
                {record.date}: {record.weight} kg
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DadosTab;


