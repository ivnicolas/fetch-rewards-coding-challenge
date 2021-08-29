import React, {useState, useContext }from 'react';
import {GlobalContext} from '../context/GlobalState';
// 


const AddTransaction = () => {

    const [payer, setPayer]= useState('');
    const [points,setPoints] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
      
        const newTransaction = {
             id: Math.floor(Math.random() * 10000), 
             payer, 
             points: +points, 
             timestamp: Date().toLocaleString()
        }

        debugger 
        addTransaction(newTransaction)
    
        // <Redirect to="/"/>
    }

        return (

        

           <form onSubmit={ onSubmit}>
               <label>Payer </label>
                <br/>
                <select name="payer" value={payer} onChange={(e)=> setPayer(e.target.value)} placeholder="Select Payer" required>
                    <option value=""> </option>
                    <option value="Danon">DANON</option>
                    <option value="Unilever">UNILEVER</option>
                    <option value="Miller Coors">MILLER COORS</option>
                </select>
                <br/>
                <label> Points</label>
                <br/>
                <input type="number" name="price"  value={points} onChange={(e)=> setPoints(e.target.value)} placeholder="Enter Points" required/>
                <br/>
                <button>Add Transaction</button>
           </form>
    );
};

export default AddTransaction;





