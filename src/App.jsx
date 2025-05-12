// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// iTasks - GET STUFF DONE
// 1) whenever saveToLS is called the last task is not saved to the Local Storage and also it does not show up in the tasks STATE. same is hapening with the delete, when we delete and then refresh - the deleted comes back
// 2) make home page 
// 3) delete assurance
import { useState, useRef, useEffect, use  } from 'react';
import NAVBAR from './components/navbar';
import HOME from './components/home';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
// uuidv4();

function App() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (localStorage.getItem("tasks")) {
            setTasks(JSON.parse(localStorage.getItem("tasks")));
        }
    }, []);

    const saveToLS = (params) => {
        localStorage.setItem("tasks", JSON.stringify(params))
    }
    
    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleAdd = (e) => {
        if(task ===""){
            setErrorMessage("Please enter a task");
            setTimeout(() => setErrorMessage(""), 3000);
            return;
        }
        e.preventDefault();
        const newTask = [...tasks, { id: uuidv4(), task, isCompleted: false }];
        setTasks(newTask);
        saveToLS(newTask);
        setTask("");
        setErrorMessage("");
    }

    const handleCheckbox = (e, id) => {
        const newTasks = tasks.map((item) => {
            if(item.id === id) {
                return {...item, isCompleted: !item.isCompleted } 
            }
            return item;
        });
        setTasks(newTasks);
        saveToLS(newTasks);
    }

    const handleEdit = (e, id) => {
        const editTask = tasks.filter((item)=> item.id === id);
        setTask(editTask[0].task);
        const newTasks = tasks.filter((item)=> item.id !== id);
        setTasks(newTasks);
        saveToLS(newTasks);
    }

    const handleDelete = (e, id) => {
        const newTasks = tasks.filter((item) => item.id !== id);
        setTasks(newTasks);
        saveToLS(newTasks);
    }

  return (
    <>
    <NAVBAR />
    <div className="container bg-purple-100 h-[91vh] w-[100vw] flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-[700px] h-[85vh]">
            <h1 className="monoton-regular flex justify-center gap-2 text-3xl font-bold mb-4 text-center text-purple-900 tracking-wider">Welcome &nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp; iTasks</h1>
            <p className=" mb-4 text-center text-purple-900">Your task management solution</p>
            <form className='text-center flex gap-1.5 h-14 ' >
                <input type="text" onChange={handleChange} value={task} placeholder="Enter your task" className=" ring-1 ring-purple-900 focus:ring-purple-800 focus:ring-2 focus:outline-none  rounded-lg p-2 w-[80%] h-12 mb-4" />
                <button onClick={handleAdd} className="bg-purple-900 text-white rounded-lg w-30 h-12 border hover:border-purple-900 border-purple-800 hover:bg-purple-700 transition-all duration-200 font-semibold "> Add </button>
            </form>
                <hr className='h-[1px] text-purple-900 opacity-30 mb-0 mt-2' />
            <div className="w-full p-0  h-auto ">
                <h2 className="text-xl font-bold text-purple-900 text-center  m-auto mb-2 mt-3 tracking-wide border border-[#c9b2d9] px-2 w-[8vw] rounded-[6px]">My Tasks</h2>
                <div className='border border-[#c9b2d9] rounded-[10px] p-2  w-fit text-center mb-1'>
                    <div className='displayingTasks flex flex-col gap-2 h-[45vh] w-[40vw] overflow-y-scroll scrollbar-purple  '>
                        {tasks.length === 0 && <div className='text-center text-purple-200 font-semibold flex justify-center items-center h-full text-2xl'>No Tasks to do!!!</div>}
                        {tasks.map((item)=>{

                            return (
                            <div key={item.id} className='flex justify-between items-center hover:bg-purple-100 px-2 py-1 rounded-[7px] transition-all duration-200'>
                                <div className="p1 flex items-center justify-between gap-2.5">
                                    <input type="checkbox" onClick={(e)=>handleCheckbox(e, item.id)}  className="size-[17px] accent-purple-900 mt-0.5 " name="checkboxForAll"/>
                                    <div className="theTask text-[16px]">{item.task}</div>
                                </div>
                                <div className="p2 flex items-center gap-1.5">
                                    <FaEdit onClick={(e)=>{handleEdit(e, item.id)}} className='text-purple-900 hover:text-purple-700 transition-all duration-300 size-5 ' />
                                    <MdDelete onClick={(e)=>{handleDelete(e, item.id)}} className='text-purple-900 hover:text-purple-700 transition-all duration-300 size-5.5' />
                                </div>
                            </div>
                            )
                        })}
                        
                    </div>
                </div>
                    {/* <hr className='h-[1px] text-purple-900 opacity-15 ' /> */}
                    
            </div>
            {errorMessage && (<div className='text-center text-red-500 font-semibold relative bottom-0 transition-all duration-10000'>{errorMessage}</div>)}
        </div>
    </div>
    </>
  )
}

export default App
