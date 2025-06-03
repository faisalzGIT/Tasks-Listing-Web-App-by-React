// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
// iTasks - GET STUFF DONE
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import MyTasks from './components/myTasks.jsx';
import NAVBAR from './components/navbar.jsx'
import HOME from './components/home.jsx'
import ABOUT from './components/about.jsx'
import DEVELOPER from './components/developer.jsx'
import { MyProvider } from './context/MyContext';

function App() {
  return (
    <MyProvider>    
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
    </MyProvider>
  );
}
export default App;