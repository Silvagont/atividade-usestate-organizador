import PropTypes from 'prop-types';

export default function TaskList({ tarefas, aoAlternar, aoRemover }) {
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa para exibir.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
      {tarefas.map((tarefa) => (
        <li
          key={tarefa.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => aoAlternar(tarefa.id)}
            />
            <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none", color: tarefa.concluida ? "#777" : "#000" }}>
              {tarefa.texto}
            </span>
          </label>
          <button type="button" onClick={() => aoRemover(tarefa.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tarefas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      texto: PropTypes.string.isRequired,
      concluida: PropTypes.bool.isRequired,
    })
  ).isRequired,
  aoAlternar: PropTypes.func.isRequired,
  aoRemover: PropTypes.func.isRequired,
};