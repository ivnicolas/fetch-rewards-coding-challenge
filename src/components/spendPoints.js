import React, {useState}from 'react';
import { useHistory } from 'react-router-dom';

const SpendPoints = () => {

    const history = useHistory();
    const [points,setPoints] = useState(0)

    const testFunction = () => {

        const spendRequest = {
            points: +points, 
            timestamp: Date().toLocaleString()
       }

       // we want to push the changes to the two at the end of it all 
       let pointsToSpend = JSON.parse(localStorage.getItem("pointsToSpend"))
       let payerBalance = JSON.parse(localStorage.getItem("payers"))
        let stored = JSON.parse(localStorage.getItem("transactions"))


        let pointsSpent = 0 
        for(let i = 0 ; pointsSpent<spendRequest.points; i++){
            if(spendRequest.points - pointsSpent >=pointsToSpend[i].points){

                const transaction = {
                    id: JSON.parse(localStorage.transactions).length , 
                    payer: pointsToSpend[i].payer,
                    points: -pointsToSpend[i].points, 
                    timestamp: Date().toLocaleString()
               }
               stored.push(transaction)
                    
                    pointsSpent+=pointsToSpend[i].points
                    //adjust the payer array to account for spent points 
                    payerBalance[pointsToSpend[i].payer] -= pointsToSpend[i].points
                    //set that entry equal to zero 
                    pointsToSpend[i].points = 0
                    
            }   else{
                    //all point cover the remainder
                let difference=spendRequest.points - pointsSpent
                let remainder = pointsToSpend[i].points - difference

                    const transaction = {
                        id: Math.floor(Math.random()*10000) , 
                        payer: pointsToSpend[i].payer,
                        points: -difference, 
                        timestamp: Date().toLocaleString()
                   }
                   stored.push(transaction)
                   pointsSpent+=difference

                   payerBalance[pointsToSpend[i].payer] -= difference

                   pointsToSpend[i].points = remainder

                    
                }
        }
        let newPointsToSpend = pointsToSpend.filter(transaction => transaction.points !== 0)
        localStorage.setItem("pointsToSpend", JSON.stringify(newPointsToSpend))
        localStorage.setItem("transactions", JSON.stringify(stored))
        localStorage.setItem("payers", JSON.stringify(payerBalance))

        debugger

    }

    const onSubmit = e => {
        e.preventDefault();

        const spendRequest = {
            points: +points, 
            timestamp: Date().toLocaleString()
       }

       // we want to push the changes to the two at the end of it all 
       let pointsToSpend = JSON.parse(localStorage.getItem("pointsToSpend"))
       let payerBalance = JSON.parse(localStorage.getItem("payers"))


       if(parseInt(localStorage.balance)>spendRequest.points){

        testFunction()
        history.push('/all-transactions')   
       }else{
           // workout error handling
           debugger
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

// with this spend call you should take the amount 
//if the amount to spend is greater than the balance return an error message
// you are going to go through all your transactions in order of date. 
//store balance 




