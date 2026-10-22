import { useState, useEffect } from 'react';
import TaskForm from './componentes/TaskForm';
import TaskFilters from './componentes/TaskFilters';
import TaskList from './componentes/TaskList';

export default function App() {
  const [texto, setTexto] = useState("");
  
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionarTarefa(evento) {
    evento.preventDefault();

    const textoLimpo = texto.trim();
    if (textoLimpo === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: textoLimpo,
      concluida: false
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
    setTexto("");
  }

  function alternarConclusao(id) {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) => {
        if (tarefa.id === id) {
          return { ...tarefa, concluida: !tarefa.concluida };
        }
        return tarefa;
      })
    );
  }

  function removerTarefa(id) {
    setTarefas((anteriores) =>
      anteriores.filter((tarefa) => tarefa.id !== id)
    );
  }

  function limparConcluidas() {
    setTarefas((anteriores) =>
      anteriores.filter((tarefa) => !tarefa.concluida)
    );
  }

  const total = tarefas.length;
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida).length;
  const pendentes = total - concluidas;

  const tarefasVisiveis = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") return !tarefa.concluida;
    if (filtro === "concluidas") return tarefa.concluida;
    return true;
  });

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Organizador de Tarefas</h1>

      <TaskForm
        texto={texto}
        setTexto={setTexto}
        aoAdicionar={adicionarTarefa}
      />

      <TaskFilters
        total={total}
        concluidas={concluidas}
        pendentes={pendentes}
        setFiltro={setFiltro}
        aoLimparConcluidas={limparConcluidas}
      />

      <TaskList
        tarefas={tarefasVisiveis}
        aoAlternar={alternarConclusao}
        aoRemover={removerTarefa}
      />
    </main>
  );
}