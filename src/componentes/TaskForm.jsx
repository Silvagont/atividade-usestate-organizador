import PropTypes from 'prop-types';

export default function TaskForm({ texto, setTexto, aoAdicionar }) {
  return (
    <form onSubmit={aoAdicionar} style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
        <label htmlFor="nova-tarefa">Nova tarefa</label>
        <input
          id="nova-tarefa"
          value={texto}
          onChange={(evento) => setTexto(evento.target.value)}
          placeholder="Digite o que precisa ser feito..."
          style={{ padding: "8px" }}
        />
      </div>
      <button type="submit" style={{ alignSelf: "flex-end", padding: "9px 16px" }}>
        Adicionar
      </button>
    </form>
  );
}

TaskForm.propTypes = {
  texto: PropTypes.string.isRequired,
  setTexto: PropTypes.func.isRequired,
  aoAdicionar: PropTypes.func.isRequired,
};