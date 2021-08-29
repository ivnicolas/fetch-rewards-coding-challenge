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
        
        //you need to account for if there is something in local storage and if there is not 
        if(localStorage.length!== 0 ){
            let stored = JSON.parse(localStorage.getItem("transactions"));
            stored.push(newTransaction)
            localStorage.setItem("transactions", JSON.stringify(stored))
        }else{
            let transaction = new Array (1).fill(newTransaction)
            localStorage.setItem('transactions', JSON.stringify(transaction))
        }

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





