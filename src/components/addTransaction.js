import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';

const AddTransaction = () => {

    const history = useHistory();
    const [payer, setPayer]= useState('');
    const [points,setPoints] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
      
        const newTransaction = {
             id: localStorage.length , 
             payer, 
             points: +points, 
             timestamp: Date().toLocaleString()
        }
    
         localStorage.setItem('transaction'+localStorage.length, [JSON.stringify(newTransaction)])
         history.push('/')
        

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





