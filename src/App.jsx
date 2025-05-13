// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// iTasks - GET STUFF DONE
// 1) whenever saveToLS is called the last task is not saved to the Local Storage and also it does not show up in the tasks STATE. same is hapening with the delete, when we delete and then refresh - the deleted comes back
// 2) make home page 
// 3) delete assurance
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MyTasks from './components/myTasks.jsx';
import NAVBAR from './components/navbar.jsx'
import HOME from './components/home.jsx'
import ABOUT from './components/about.jsx'
import DEVELOPER from './components/developer.jsx'



function App() {
  return (
    <Router>
        <div>
            <NAVBAR />
            <Routes>
                <Route path="/" element={<HOME />} />
                <Route path="/mytasks" element={<MyTasks />} />
                <Route path="/about" element={<ABOUT />} />
                <Route path="/developer" element={<DEVELOPER />} />
            </Routes>
        </div>
    </Router>
  );
}
export default App;
