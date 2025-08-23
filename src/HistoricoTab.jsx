import React from 'react';

function HistoricoTab({ stats, filters, handleFilterChange, clearFilters, filteredRecords, formatDuration }) {
  return (
    <div className="history-tab">
      <div className="history-header">
        <h2>📜 Histórico de Jejuns</h2>
      </div>

      <div className="stats-section">
        <h3>📊 Estatísticas Gerais</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">📊</span>
            <div className="stat-info">
              <span className="stat-label">Total de Jejuns</span>
              <span className="stat-value">{stats.totalFastings}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⏱️</span>
            <div className="stat-info">
              <span className="stat-label">Média de Duração</span>
              <span className="stat-value">{stats.averageDuration}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏆</span>
            <div className="stat-info">
              <span className="stat-label">Jejum Mais Longo</span>
              <span className="stat-value">{stats.longestFasting}</span>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">📉</span>
            <div className="stat-info">
              <span className="stat-label">Perda Total de Peso</span>
              <span className="stat-value">{stats.totalWeightLoss} kg</span>
            </div>
          </div>
        </div>
      </div>

      <div className="filters-section">
        <h3>🔍 Filtros de Pesquisa</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <label>De:</label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-group">
            <label>Até:</label>
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) => handleFilterChange("dateTo", e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-group">
            <label>Duração Mínima (horas):</label>
            <input
              type="number"
              step="0.5"
              placeholder="Ex: 12"
              value={filters.minDuration}
              onChange={(e) => handleFilterChange("minDuration", e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-group">
            <label>Duração Máxima (horas):</label>
            <input
              type="number"
              step="0.5"
              placeholder="Ex: 24"
              value={filters.maxDuration}
              onChange={(e) => handleFilterChange("maxDuration", e.target.value)}
              className="filter-input"
            />
          </div>
          <div className="filter-group">
            <label>Estágio Atingido:</label>
            <select
              value={filters.stage}
              onChange={(e) => handleFilterChange("stage", e.target.value)}
              className="filter-select"
            >
              <option value="all">Todos os Estágios</option>
              <option value="Queima de Glicose">Queima de Glicose</option>
              <option value="Queima de Gordura + GH aumentando">Queima de Gordura + GH aumentando</option>
              <option value="Cetose Leve + GH aumentado 2x">Cetose Leve + GH aumentado 2x</option>
              <option value="Autofagia + GH aumentado 3x">Autofagia + GH aumentado 3x</option>
              <option value="Autofagia + GH aumentado 5x">Autofagia + GH aumentado 5x</option>
              <option value="Cetose Profunda + Regeneração Imunológica">Cetose Profunda + Regeneração Imunológica</option>
              <option value="Regeneração Imunológica Completa">Regeneração Imunológica Completa</option>
            </select>
          </div>
          <div className="filter-group">
            <button onClick={clearFilters} className="clear-filters-btn">Limpar Filtros</button>
          </div>
        </div>
      </div>

      <div className="history-list-section">
        <h3>📜 Registros de Jejum</h3>
        {filteredRecords.length === 0 ? (
          <p>Nenhum registro encontrado com os filtros atuais.</p>
        ) : (
          <ul className="history-list">
            {filteredRecords.map(record => (
              <li key={record.id} className="history-item">
                <div className="history-item-date">{new Date(record.startTime).toLocaleDateString()}</div>
                <div className="history-item-duration">{formatDuration(record.duration)}</div>
                <div className="history-item-stage">{record.stage}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default HistoricoTab;


