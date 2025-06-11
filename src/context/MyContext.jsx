// MyContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the context
const MyContext = createContext();  // this is the context that will hold the state and functions we want to share

// 2. Create the Provider component
export function MyProvider({ children }) { // children will be the components that are wrapped inside MyProvider in App.jsx
    
    console.log(children); // if you see what children is, you will see the components that are wrapped inside MyProvider
    // State to hold the window height and a boolean based on the height

    const [winH, SetwinH] = useState(window.innerHeight);
    const [boool, setBoool] = useState(null);
    
    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;
            SetwinH(height);
            setBoool(height < 800);
        };
  
        // Add event listener
        window.addEventListener('resize', handleResize);
  
        // Call handler right away to update initial state
        handleResize();
  
        // Cleanup function to remove event listener
        return () => window.removeEventListener('resize', handleResize);
    }, [])

  return (
    // Provide the state and functions to the context
    // so that they can be accessed by any component that uses the context
    <MyContext.Provider value={{ boool }}> 
      {children}
    </MyContext.Provider>
  );
}

// 3. create a custom hook 
export function useMyContext() {
  return useContext(MyContext);// this will allow us to use the context in any component that imports useMyContext
}