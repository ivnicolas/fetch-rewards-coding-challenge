import React , {createContext, useReducer} from 'react';
import AppReducer  from './AppReducer'

 // initial State 

 const initialState= {
     transactions: [
         {id: 1 , payer: "DANNON" , points: 1000 , timestamp: Date().toLocaleString()},
         {id: 2 , payer: "UNILEVER" , points: 200, timestamp: Date().toLocaleString()},
         {id: 3 , payer: "DANNON" , points: -200, timestamp: Date().toLocaleString()},
         {id: 4 , payer: "MILLER COORS" , points: 10000, timestamp: Date().toLocaleString()},
         {id: 5 , payer: "DANNON" , points: 300, timestamp: Date().toLocaleString()},
     ]
 }

 // create context 
 export const GlobalContext = createContext(initialState);

 // creating a provider so that all of our other components have access to global state 
 export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>) 
 }