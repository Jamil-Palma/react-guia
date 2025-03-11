import { useReducer, useState } from "react";

// Definir las acciones del reducer
const ACTIONS = {
  ADD_TASK: "add_task",
  PAUSE_TASK: "pause_task",
  TOGGLE_TASK: "toggle_task",
  DELETE_TASK: "delete_task",
};

// Reducer para manejar el estado de las tareas
function taskReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
        console.log("tarea agregada")
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case ACTIONS.TOGGLE_TASK:
        console.log("tarea fianlizada")
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    case ACTIONS.DELETE_TASK:
        console.log("tarea borrada")
        return state.filter((task) => task.id !== action.payload);
    case  "pause_task":
      console.log("tarea en pausa")
        return state.map((task) =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task
        );
      default:
      return state;
  }
}

// Componente principal
function UseReducirEjemplo() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Lista de Tareas con useReducer</h1>
      <TaskManager />
    </div>
  );
}

// Componente de gestión de tareas
function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [taskText, setTaskText] = useState("");

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TASK, payload: taskText });
    setTaskText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button type="submit">Agregar</button>
      </form>

      <h3>📌 Lista de Tareas:</h3>
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

// Componente de lista de tareas
function TaskList({ tasks, dispatch }) {
  return (
    <ul style={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.text}
          <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TASK, payload: task.id })}>
            ✅
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.PAUSE_TASK, payload: task.id })}>
            ✅❌
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_TASK, payload: task.id })}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

// Estilos en JS
const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default UseReducirEjemplo;
