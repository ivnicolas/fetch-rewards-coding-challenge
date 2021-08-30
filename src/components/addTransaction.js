import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';

const AddTransaction = () => {
    //to reroute after submission 
    const history = useHistory();
    //track the payer giving the points 
    const [payer, setPayer]= useState('');
    // tracking the point amount 
    const [points,setPoints] = useState(0);

    //form submission 
    const onSubmit = e => {
        e.preventDefault();
        //construct a new transaction object 
        const newTransaction = {
             id: Math.floor(Math.random()*10000) , 
             payer, 
             points: +points, 
             timestamp: Date().toLocaleString()
        } 
        //Does localstorage.transactions exists already or not 
        if(localStorage.transactions ){
            //we want to get the transactions and pointsAvailable objects from localstorage 
            //push our new transactions into both and push the changes back to localstorage
            let transactions = JSON.parse(localStorage.getItem("transactions"));
            let pointsAvailable = JSON.parse(localStorage.getItem("pointsAvailable"));
                transactions.push(newTransaction)
                pointsAvailable.push(newTransaction)
                    localStorage.setItem("transactions", JSON.stringify(transactions))
                    localStorage.setItem("pointsAvailable", JSON.stringify(pointsAvailable))
        }else{
            //for future calculations and storage database stucture purposes, transactions and pointsavailable to be an array of objects 
            let firstTransaction = new Array (1).fill(newTransaction)
                localStorage.setItem('transactions', JSON.stringify(firstTransaction))
                localStorage.setItem("pointsAvailable", JSON.stringify(firstTransaction))
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
                <input type="number" name="points"  value={points} onChange={(e)=> setPoints(e.target.value)} placeholder="Enter Points" required/>
                <br/>
                <button>Add Transaction</button>
           </form>
    );
};
export default AddTransaction;