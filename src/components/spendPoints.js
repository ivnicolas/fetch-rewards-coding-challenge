import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';

const SpendPoints = () => {
    //to redirect after submit
    const history = useHistory();
    //record how many points the user wants to spend 
    const [points,setPoints] = useState(0)

    const spendingCalculations = () => {
        // We are gathering pointsAvailable, payers, and transaction, because we will be modifying them 
        let pointsAvailable = JSON.parse(localStorage.getItem("pointsAvailable"))
        let payerBalance = JSON.parse(localStorage.getItem("payers"))
        let allTransactions = JSON.parse(localStorage.getItem("transactions"))
        //we need to track how many point have been removed until pointsSpent=points
        let pointsSpent = 0 
        //we will iterate though the pointsAvailable object until our pointsSpent variable is equal to points 
        for(let i = 0 ; pointsSpent< points; i++){
            //we need to figure out if we spend all the points at pointsAvailable[i] or only some of the points 

            //Case for all points
            if(points - pointsSpent >= pointsAvailable[i].points){
                //make a newTransaction object
                const newTransaction = {
                    id: JSON.parse(localStorage.transactions).length , 
                    payer: pointsAvailable[i].payer,
                    points: -pointsAvailable[i].points, 
                    timestamp: Date().toLocaleString()
               }
                    //push newTransaction to allTransactions 
                    allTransactions.push(newTransaction)
                    //update the pointsSpent variable 
                    pointsSpent+=pointsAvailable[i].points
                    //adjust the payer array to account for spent points 
                    payerBalance[pointsAvailable[i].payer] -= pointsAvailable[i].points
                    //set this current entries point value to 0 points
                    pointsAvailable[i].points = 0
            }  
            //Case for some points  
            else{
                //how many points at pointsAvailable[i] should be spent 
                let difference= points - pointsSpent
                //how many points are leftover
                let remainder = pointsAvailable[i].points - difference
                    // create a newTransaction object 
                    const newTransaction = {
                        id: Math.floor(Math.random()*10000) , 
                        payer: pointsAvailable[i].payer,
                        points: -difference, 
                        timestamp: Date().toLocaleString()
                   }
                   //push the new object into allTransactions 
                   allTransactions.push(newTransaction)
                   //update the pointsSpent variable to break out of loop 
                   pointsSpent+=difference
                   //update the payer balance 
                   payerBalance[pointsAvailable[i].payer] -= difference
                   //update the points value for pointsAvailable[i]
                   pointsAvailable[i].points = remainder   
                }
        }
        //filter out pointsAvailable objects that have 0 points left to spends to keep the object current
        let newPointsAvailable = pointsAvailable.filter(transaction => transaction.points !== 0)
        // push all changes to localStorage 
        localStorage.setItem("pointsAvailable", JSON.stringify(newPointsAvailable))
        localStorage.setItem("transactions", JSON.stringify(allTransactions))
        localStorage.setItem("payers", JSON.stringify(payerBalance))
    }
    const onSubmit = e => {
        e.preventDefault(); 
        // We want to make sure that out balance can cover our spend request 
        if(parseInt(localStorage.balance)>= points){
            spendingCalculations()
            //reroute after submission
            history.push('/all-transactions')   
        }else{
            alert("Insufficient Funds: Transaction cannot be completed with your current Balance")
            }
    }

    return (
        <>
         <h3> How Many Points Do You Want To Spend</h3>
        <form onSubmit={onSubmit}>
            <label> Points</label>
            <br/>
            <input type="number" name="points"  value={points} onChange={(e)=> setPoints(e.target.value)} placeholder="Enter Points" required/>
            <br/>
            <button>Spend Points</button>
        </form>
        </>
    );
};
export default SpendPoints;