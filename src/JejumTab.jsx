import React from 'react';

function JejumTab({ fastingTime, isFasting, startFasting, endFasting, getFastingStage, formatTime }) {
  return (
    <div className="fasting-tab">
      <h2>Monitorar Jejum</h2>
      <div className="timer-container">
        <div className="circular-progress">
          <svg className="progress-ring" width="200" height="200">
            <circle className="progress-ring-circle-bg" stroke="currentColor" strokeWidth="8" fill="transparent" r="88" cx="100" cy="100"></circle>
            <circle className="progress-ring-circle" stroke="currentColor" strokeWidth="8" fill="transparent" r="88" cx="100" cy="100" style={{ strokeDasharray: 552.92, strokeDashoffset: 552.92 - (fastingTime / (24 * 3600)) * 552.92 }}></circle>
          </svg>
          <div className="timer-display">
            <div className="time">{formatTime(fastingTime)}</div>
            <div className="stage-info">
              <div className="current-stage">{getFastingStage(fastingTime / 3600)}</div>
              <div className="next-stage">Próximo: --</div>
            </div>
          </div>
        </div>
      </div>
      <div className="fasting-controls">
        {!isFasting ? (
          <button className="action-btn start-btn" onClick={startFasting}><span className="btn-icon">▶️</span>Iniciar Jejum</button>
        ) : (
          <button className="action-btn end-btn" onClick={endFasting}><span className="btn-icon">⏹️</span>Terminar Jejum</button>
        )}
      </div>
    </div>
  );
}

export default JejumTab;


