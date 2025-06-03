// MyContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context
const MyContext = createContext();

// 2. Create the Provider component
export function MyProvider({ children }) {

    const [winH, SetwinH] = useState(window.innerHeight);
    const [boool, setBoool] = useState(null);
    
    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;
            SetwinH(height);
            setBoool(height < 700);
        };
  
        // Add event listener
        window.addEventListener('resize', handleResize);
  
        // Call handler right away to update initial state
        handleResize();
  
        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, [])

  return (
    <MyContext.Provider value={{ boool }}>
      {children}
    </MyContext.Provider>
  );
}

// 3. create a custom hook 
export function useMyContext() {
  return useContext(MyContext);
}