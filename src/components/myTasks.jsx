
import { useState, useEffect} from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';


function MyTasks() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [isClosing, setIsClosing] = useState(false);


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
        e.preventDefault();
           if(task === "") {
               setIsClosing(false);
               setErrorMessage("Please enter a task first");
               setTimeout(() => {
                   setIsClosing(true);
                   setTimeout(() => {
                       setErrorMessage("");
                       setIsClosing(false);
                   }, 500);
               }, 800);
               return;
    }        
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

    const notificationStyles = `
          @keyframes slideIn {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideOut {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-100%);
              opacity: 0;
            }
          }
        `;
  return (<>
        <div className="container w-full bg-purple-100 h-[93vh] overflow-hidden flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-[700px] h-[88vh]">
            <h1 className="monoton-regular flex justify-center gap-2 text-4xl font-bold mb-4 text-center text-purple-900 tracking-wider"><span className="monoton-regular flex justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900">
                  <span>Welcome</span> 
                  <span>to</span>
                  <span>iTasks</span>
                </span></h1>
            <p className=" mb-4 text-center text-purple-900">Your task management solution</p>
            <form className='text-center flex gap-1.5 h-14 ' >
                <input type="text" onChange={handleChange} value={task} placeholder="Enter your task" className=" ring-1 ring-purple-900 focus:ring-purple-800 focus:ring-2 focus:outline-none  rounded-lg p-2 w-[80%] h-12 mb-4" />
                <button onClick={handleAdd} className="bg-purple-900 hover:bg-purple-800 text-white rounded-lg w-30 h-12 border hover:border-purple-900 border-purple-900  transition-all duration-200 font-semibold "> Add </button>
            </form>
                <hr className='h-[1px] text-purple-900 opacity-30 mb-0 mt-2' />
            <div className="w-full p-0  h-auto ">
                <h2 className="text-xl font-bold text-purple-900 text-center  m-auto mb-2 mt-3 tracking-wide border border-[#c9b2d9] px-2 w-[8vw] rounded-[6px]">My Tasks</h2>
                <div className='border border-[#c9b2d9] rounded-[10px] p-1  w-fit text-center mb-1'>
                    <div className='displayingTasks flex flex-col gap-2 h-[50vh] w-[40vw] overflow-y-scroll scrollbar-purple  '>
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
                    
            </div>
                {errorMessage && (
                  <>
                    <style>{notificationStyles}</style>
                    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 border bg-white text-center text-purple-900 font-semibold rounded-xl w-fit p-3 m-auto border-purple-800 ${isClosing ? 'animate-[slideOut_0.5s_ease-in-out]' : 'animate-[slideIn_0.5s_ease-in-out]'} z-50`}>
            {errorMessage}
        </div>
                  </>
                )}        
        </div>
    </div>
    </>);
}

export default MyTasks;