import React from 'react';

function DicasTab() {
  return (
    <div className="tips-tab">
      <h2>💡 Dicas e Conhecimento</h2>
      <div className="tips-intro">
        <p>Aprenda sobre os diferentes estágios do jejum e como seu corpo reage a cada um deles. O conhecimento é a chave para um jejum seguro e eficaz.</p>
      </div>

      <div className="tips-section">
        <h3>Conhecimento Progressivo do Jejum</h3>
        <div className="tip-card">
          <div className="tip-icon">💧</div>
          <div className="tip-content">
            <span className="tip-title">0-4 horas: Digestão e Glicose</span>
            <span className="tip-description">Seu corpo está usando a glicose da sua última refeição como energia.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🔥</div>
          <div className="tip-content">
            <span className="tip-title">4-12 horas: Queima de Gordura Inicial</span>
            <span className="tip-description">A glicose se esgota e o corpo começa a queimar gordura para obter energia. O hormônio do crescimento (GH) começa a aumentar.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🧠</div>
          <div className="tip-content">
            <span className="tip-title">12-18 horas: Cetose Leve</span>
            <span className="tip-description">O corpo entra em um estado de cetose leve, usando gordura como principal fonte de energia. O GH aumenta significativamente.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">♻️</div>
          <div className="tip-content">
            <span className="tip-title">18-24 horas: Autofagia</span>
            <span className="tip-description">O corpo inicia a autofagia, um processo de limpeza celular que remove componentes danificados.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">💪</div>
          <div className="tip-content">
            <span className="tip-title">24-48 horas: Pico de GH e Autofagia</span>
            <span className="tip-description">O hormônio do crescimento atinge seu pico, ajudando a preservar a massa muscular. A autofagia se intensifica.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">🛡️</div>
          <div className="tip-content">
            <span className="tip-title">48-72 horas: Regeneração Imunológica</span>
            <span className="tip-description">O corpo começa a regenerar células do sistema imunológico, fortalecendo suas defesas.</span>
          </div>
        </div>
        <div className="tip-card">
          <div className="tip-icon">✨</div>
          <div className="tip-content">
            <span className="tip-title">72+ horas: Regeneração imunológica completa</span>
            <span className="tip-description">Sistema imunológico completamente renovado</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DicasTab;


