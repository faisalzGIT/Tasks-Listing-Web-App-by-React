import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);
  
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleEdit = (e, id) => {
    let t = todos.find((item) => item.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => item.id !== id); //deletes the todo that matches the id
    setTodos(newTodos);
    saveToLS();
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    let newTodos = todos.filter((item) => item.id !== id); //deletes the todo that matches the id
    setTodos(newTodos);
    saveToLS(newTodos);
    // console.log(newTodos);
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
    console.log(todos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    // console.log(id);
    let index = todos.findIndex((item) => item.id === id);
    // console.log(index);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
    // console.log(newTodos);
  };

  return (
    <>
      <Navbar />

      <div className="h-[91vh] bg-violet-200 flex  justify-center py-10">
      <p>Today’s date is {new Date().toLocaleDateString('en-GB')}.</p>
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">
          <div className="mb-6">
            <h2 className=" text-center text-xl font-bold mb-4 text-violet-700">
              Add a Todo
            </h2>
            <div className="flex gap-3">
              <input onChange={handleChange} value={todo} type="text" placeholder="Enter your todo..." className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"/>
              <button onClick={handleAdd} disabled={todo.length < 3} className="bg-violet-600 hover:bg-violet-700 disabled:opacity-50 px-4 py-2 text-white rounded-lg">
                Add
              </button>
            </div>
          </div>
          <hr className="border-t border-gray-300" />

          <div>
            <h2 className=" text-center text-xl font-bold mb-3 text-violet-700 pt-[10px]">
              Your Todos
            </h2>

            <div className="todosContainer overflow-y-scroll space-y-3 h-[50vh] custom-scrollbar">
              {todos.length === 0 && ( <div className="text-center flex p-[150px] pr-[140px] items-center justify-center text-gray-500 italic">No todos added yet </div>)}

              {todos.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-violet-50 px-4 py-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" onChange={handleCheckbox} checked={item.isCompleted} name={item.id}/>
                    <span className={`${ item.isCompleted ? "line-through text-gray-500" : "" } text-lg`}>
                      {item.todo}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={(e) => handleEdit(e, item.id)} className="bg-yellow-500 hover:bg-yellow-600 p-2 rounded-full text-white">
                      <FaEdit />
                    </button>
                    <button onClick={(e) => handleDelete(e, item.id)} className="bg-red-500 hover:bg-red-600 p-2 rounded-full text-white">
                      <MdDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
