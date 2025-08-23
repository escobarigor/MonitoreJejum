import React, { useState, useEffect } from 'react';
import './App.css';
import JejumTab from './JejumTab';
import DadosTab from './DadosTab';
import ProgressoTab from './ProgressoTab';
import HistoricoTab from './HistoricoTab';
import DicasTab from './DicasTab';

function App() {
  const [activeTab, setActiveTab] = useState('jejum');
  const [theme, setTheme] = useState('light');
  const [fastingTime, setFastingTime] = useState(0); // in seconds
  const [isFasting, setIsFasting] = useState(false);
  const [fastingRecords, setFastingRecords] = useState([]);
  const [weightRecords, setWeightRecords] = useState([]);
  const [currentWeight, setCurrentWeight] = useState('');

  // Filtros para a aba Histórico
  const [filters, setFilters] = useState({
    dateFrom: '',
    dateTo: '',
    minDuration: '',
    maxDuration: '',
    stage: 'all'
  });

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = `theme-${savedTheme}`;
    }

    // Load fasting records from localStorage
    const savedFastingRecords = JSON.parse(localStorage.getItem('fastingRecords')) || [];
    setFastingRecords(savedFavedFastingRecords);

    // Load weight records from localStorage
    const savedWeightRecords = JSON.parse(localStorage.getItem('weightRecords')) || [];
    setWeightRecords(savedWeightRecords);

    // Check if a fasting session was ongoing
    const lastFastingStart = localStorage.getItem('lastFastingStart');
    if (lastFastingStart) {
      const startTime = parseInt(lastFastingStart, 10);
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      setFastingTime(elapsed);
      setIsFasting(true);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isFasting) {
      timer = setInterval(() => {
        setFastingTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isFasting]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = `theme-${newTheme}`;
    localStorage.setItem('theme', newTheme);
  };

  const startFasting = () => {
    setIsFasting(true);
    setFastingTime(0);
    localStorage.setItem('lastFastingStart', Date.now().toString());
  };

  const endFasting = () => {
    setIsFasting(false);
    localStorage.removeItem('lastFastingStart');
    const endTime = Date.now();
    const startTime = endTime - (fastingTime * 1000);

    const newRecord = {
      id: Date.now(),
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString(),
      duration: fastingTime,
      stage: getFastingStage(fastingTime / 3600) // Convert seconds to hours
    };
    const updatedRecords = [...fastingRecords, newRecord];
    setFastingRecords(updatedRecords);
    localStorage.setItem('fastingRecords', JSON.stringify(updatedRecords));
    setFastingTime(0);
  };

  const getFastingStage = (hours) => {
    if (hours >= 72) return 'Regeneração Imunológica Completa';
    if (hours >= 48) return 'Cetose Profunda + Regeneração Imunológica';
    if (hours >= 24) return 'Autofagia + GH aumentado 5x';
    if (hours >= 18) return 'Autofagia + GH aumentado 3x';
    if (hours >= 12) return 'Cetose Leve + GH aumentado 2x';
    if (hours >= 4) return 'Queima de Gordura + GH aumentando';
    if (hours >= 0) return 'Queima de Glicose';
    return 'Não iniciado';
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const formatDuration = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}min`;
  };

  const handleWeightChange = (e) => {
    setCurrentWeight(e.target.value);
  };

  const addWeightRecord = () => {
    if (currentWeight) {
      const newWeightRecord = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        weight: parseFloat(currentWeight)
      };
      const updatedWeightRecords = [...weightRecords, newWeightRecord];
      setWeightRecords(updatedWeightRecords);
      localStorage.setItem('weightRecords', JSON.stringify(updatedWeightRecords));
      setCurrentWeight('');
    }
  };

  const calculateStats = () => {
    const totalFastings = fastingRecords.length;
    const totalDuration = fastingRecords.reduce((sum, record) => sum + record.duration, 0);
    const averageDuration = totalFastings > 0 ? totalDuration / totalFastings : 0;
    const longestFasting = fastingRecords.reduce((max, record) => Math.max(max, record.duration), 0);

    let totalWeightLoss = 0;
    if (weightRecords.length > 1) {
      const initialWeight = weightRecords[0].weight;
      const finalWeight = weightRecords[weightRecords.length - 1].weight;
      totalWeightLoss = initialWeight - finalWeight;
    }

    return {
      totalFastings,
      averageDuration: formatDuration(averageDuration),
      longestFasting: formatDuration(longestFasting),
      totalWeightLoss: totalWeightLoss.toFixed(2)
    };
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      dateFrom: '',
      dateTo: '',
      minDuration: '',
      maxDuration: '',
      stage: 'all'
    });
  };

  const getFilteredRecords = () => {
    return fastingRecords.filter(record => {
      const recordDate = new Date(record.startTime).toISOString().split('T')[0];
      const recordDurationHours = record.duration / 3600;

      // Filter by date range
      if (filters.dateFrom && recordDate < filters.dateFrom) return false;
      if (filters.dateTo && recordDate > filters.dateTo) return false;

      // Filter by duration
      if (filters.minDuration && recordDurationHours < parseFloat(filters.minDuration)) return false;
      if (filters.maxDuration && recordDurationHours > parseFloat(filters.maxDuration)) return false;

      // Filter by stage
      if (filters.stage !== 'all' && record.stage !== getFastingStage(recordDurationHours)) return false;

      return true;
    });
  };

  const stats = calculateStats();
  const filteredRecords = getFilteredRecords();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monitore Jejum</h1>
        <div className="theme-selector">
          <button className={`theme-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => handleThemeChange('light')}>Claro</button>
          <button className={`theme-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => handleThemeChange('dark')}>Escuro</button>
          <button className={`theme-btn ${theme === 'warm' ? 'active' : ''}`} onClick={() => handleThemeChange('warm')}>Quente</button>
        </div>
      </header>

      <nav className="App-nav">
        <div className="nav-row">
          <button className={`nav-btn ${activeTab === 'jejum' ? 'active' : ''}`} onClick={() => setActiveTab('jejum')}>
            <span className="nav-icon">⏱️</span>Jejum
          </button>
          <button className={`nav-btn ${activeTab === 'dados' ? 'active' : ''}`} onClick={() => setActiveTab('dados')}>
            <span className="nav-icon">📊</span>Dados
          </button>
        </div>
        <div className="nav-row">
          <button className={`nav-btn ${activeTab === 'progresso' ? 'active' : ''}`} onClick={() => setActiveTab('progresso')}>
            <span className="nav-icon">📈</span>Progresso
          </button>
          <button className={`nav-btn ${activeTab === 'historico' ? 'active' : ''}`} onClick={() => setActiveTab('historico')}>
            <span className="nav-icon">📜</span>Histórico
          </button>
          <button className={`nav-btn ${activeTab === 'dicas' ? 'active' : ''}`} onClick={() => setActiveTab('dicas')}>
            <span className="nav-icon">💡</span>Dicas
          </button>
        </div>
      </nav>

      <main className="App-content">
        <div className="tab-content">
          {activeTab === 'jejum' && (
            <JejumTab
              fastingTime={fastingTime}
              isFasting={isFasting}
              startFasting={startFasting}
              endFasting={endFasting}
              getFastingStage={getFastingStage}
              formatTime={formatTime}
            />
          )}

          {activeTab === 'dados' && (
            <DadosTab
              currentWeight={currentWeight}
              handleWeightChange={handleWeightChange}
              addWeightRecord={addWeightRecord}
              weightRecords={weightRecords}
            />
          )}

          {activeTab === 'progresso' && (
            <ProgressoTab stats={stats} />
          )}

          {activeTab === 'historico' && (
            <HistoricoTab
              stats={stats}
              filters={filters}
              handleFilterChange={handleFilterChange}
              clearFilters={clearFilters}
              filteredRecords={filteredRecords}
              formatDuration={formatDuration}
            />
          )}

          {activeTab === 'dicas' && (
            <DicasTab />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;


