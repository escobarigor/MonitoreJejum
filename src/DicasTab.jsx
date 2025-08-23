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
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">💧</div>
            <div className="tip-info">
              <div className="tip-title">0-4 horas: Digestão e Glicose</div>
              <div className="tip-description">Seu corpo está usando a glicose da sua última refeição como energia.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🔥</div>
            <div className="tip-info">
              <div className="tip-title">4-12 horas: Queima de Gordura Inicial</div>
              <div className="tip-description">A glicose se esgota e o corpo começa a queimar gordura para obter energia. O hormônio do crescimento (GH) começa a aumentar.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🧠</div>
            <div className="tip-info">
              <div className="tip-title">12-18 horas: Cetose</div>
              <div className="tip-description">O corpo entra em um estado de cetose, usando gordura como principal fonte de energia. O GH aumenta significativamente.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">♻️</div>
            <div className="tip-info">
              <div className="tip-title">18-24 horas: Autofagia</div>
              <div className="tip-description">O corpo inicia a autofagia, um processo de limpeza celular que remove componentes danificados.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">💪</div>
            <div className="tip-info">
              <div className="tip-title">24-48 horas: Pico de GH e Autofagia</div>
              <div className="tip-description">O hormônio do crescimento atinge seu pico, ajudando a preservar a massa muscular. A autofagia se intensifica.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">🛡️</div>
            <div className="tip-info">
              <div className="tip-title">48-72 horas: Regeneração Imunológica</div>
              <div className="tip-description">O corpo começa a regenerar células do sistema imunológico, fortalecendo suas defesas.</div>
            </div>
          </div>
          <div className="tip-card">
            <div className="tip-icon">✨</div>
            <div className="tip-info">
              <div className="tip-title">72+ horas: Regeneração imunológica completa</div>
              <div className="tip-description">Sistema imunológico completamente renovado</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dicas-section">
        <h3>📋 Protocolos de Jejum Intermitente</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">⏰</div>
            <div className="tip-info">
              <div className="tip-title">16:8 (Método Leangains)</div>
              <div className="tip-description">
                <strong>Como funciona:</strong> 16 horas de jejum, 8 horas de alimentação<br/>
                <strong>Exemplo:</strong> Jejum das 20h às 12h do dia seguinte<br/>
                <strong>Ideal para:</strong> Iniciantes, rotina diária sustentável
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">⏳</div>
            <div className="tip-info">
              <div className="tip-title">18:6 (Jejum Estendido)</div>
              <div className="tip-description">
                <strong>Como funciona:</strong> 18 horas de jejum, 6 horas de alimentação<br/>
                <strong>Exemplo:</strong> Jejum das 19h às 13h do dia seguinte<br/>
                <strong>Ideal para:</strong> Quem já se adaptou ao 16:8 e quer intensificar
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🍽️</div>
            <div className="tip-info">
              <div className="tip-title">OMAD (One Meal A Day)</div>
              <div className="tip-description">
                <strong>Como funciona:</strong> 23 horas de jejum, 1 hora de alimentação<br/>
                <strong>Exemplo:</strong> Uma refeição completa por dia no mesmo horário<br/>
                <strong>Ideal para:</strong> Praticantes experientes, máxima autofagia
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">📅</div>
            <div className="tip-info">
              <div className="tip-title">5:2 (Jejum Alternado)</div>
              <div className="tip-description">
                <strong>Como funciona:</strong> 5 dias normais, 2 dias com 500-600 calorias<br/>
                <strong>Exemplo:</strong> Segunda e quinta com restrição calórica<br/>
                <strong>Ideal para:</strong> Flexibilidade na rotina semanal
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🔄</div>
            <div className="tip-info">
              <div className="tip-title">24h (Eat-Stop-Eat)</div>
              <div className="tip-description">
                <strong>Como funciona:</strong> 24 horas completas de jejum, 1-2x por semana<br/>
                <strong>Exemplo:</strong> Jantar às 19h, próxima refeição às 19h do dia seguinte<br/>
                <strong>Ideal para:</strong> Regeneração celular intensa, perda de peso acelerada
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dicas-section">
        <h3>💡 Dicas Práticas para o Sucesso</h3>
        
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🥤</div>
            <div className="tip-info">
              <div className="tip-title">Hidratação e Bebidas Permitidas</div>
              <div className="tip-description">
                <strong>✅ Permitido:</strong> Água, chás sem açúcar, café preto, água com limão<br/>
                <strong>❌ Evitar:</strong> Sucos, refrigerantes, bebidas adoçadas, leite no café
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🍽️</div>
            <div className="tip-info">
              <div className="tip-title">Quebra do Jejum</div>
              <div className="tip-description">
                Comece com alimentos leves e de fácil digestão. Priorize gorduras saudáveis (abacate, azeite), proteínas de qualidade e vegetais. Evite açúcares e carboidratos refinados.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">🧘</div>
            <div className="tip-info">
              <div className="tip-title">Gerenciamento da Fome</div>
              <div className="tip-description">
                Beba água quando sentir fome (muitas vezes é sede). Faça caminhadas leves, tome chá verde ou café. Mantenha-se ocupado e durma bem.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">⚠️</div>
            <div className="tip-info">
              <div className="tip-title">Sinais de Alerta</div>
              <div className="tip-description">
                <strong>Pare o jejum se sentir:</strong> Tontura persistente, dores de cabeça intensas, fraqueza extrema, náuseas ou vômitos. Sempre consulte um médico se necessário.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-icon">👥</div>
            <div className="tip-info">
              <div className="tip-title">Contraindicações</div>
              <div className="tip-description">
                <strong>Não recomendado para:</strong> Diabetes sem acompanhamento médico, gravidez/amamentação, histórico de transtornos alimentares, menores de 18 anos. Sempre consulte um médico antes de iniciar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DicasTab;

