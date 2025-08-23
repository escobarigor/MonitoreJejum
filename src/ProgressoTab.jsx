import React from 'react';

function ProgressoTab({ stats }) {
  return (
    <div className="progress-tab">
      <h2>Progresso</h2>
      <div className="progress-summary">
        <div className="progress-card">
          <h3>Jejuns Realizados</h3>
          <p className="progress-number">{stats.totalFastings}</p>
        </div>
        <div className="progress-card">
          <h3>Duração Média</h3>
          <p className="progress-number">{stats.averageDuration}</p>
        </div>
        <div className="progress-card">
          <h3>Jejum Mais Longo</h3>
          <p className="progress-number">{stats.longestFasting}</p>
        </div>
        <div className="progress-card">
          <h3>Perda de Peso</h3>
          <p className="progress-number">{stats.totalWeightLoss} kg</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressoTab;


