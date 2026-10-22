import PropTypes from 'prop-types';

export default function TaskFilters({ total, concluidas, pendentes, setFiltro, aoLimparConcluidas }) {
  return (
    <div>
      <p style={{ fontWeight: "bold" }}>
        Total: {total} | Concluídas: {concluidas} | Pendentes: {pendentes}
      </p>

      <div style={{ marginBottom: "20px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <button type="button" onClick={() => setFiltro("todas")}>Todas</button>
        <button type="button" onClick={() => setFiltro("pendentes")}>Pendentes</button>
        <button type="button" onClick={() => setFiltro("concluidas")}>Concluídas</button>
        <button type="button" onClick={aoLimparConcluidas} style={{ marginLeft: "auto" }}>
          Limpar concluídas
        </button>
      </div>
    </div>
  );
}

TaskFilters.propTypes = {
  total: PropTypes.number.isRequired,
  concluidas: PropTypes.number.isRequired,
  pendentes: PropTypes.number.isRequired,
  setFiltro: PropTypes.func.isRequired,
  aoLimparConcluidas: PropTypes.func.isRequired,
};