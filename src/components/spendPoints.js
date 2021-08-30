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

        let pointsSpent = 0 
        for(let i = 0 ; pointsSpent<spendRequest.points; i++){
            if(pointsToSpend[i].points - spendRequest.points< 0){
                    debugger
                    pointsSpent+=pointsToSpend[i].points
                    //adjust the payer array to account for spent points 
                    payerBalance[pointsToSpend[i].payer] -= pointsToSpend[i].points
                    debugger
                    //set that entry equal to zero 
                    pointsToSpend[i].points = 0
                    debugger
            }   else{
                    //all point cover the remainder
                    debugger
                }
        }

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
        //    let pointsSpent = 0 
        //     for(let i = 0 ; pointsSpent=spendRequest.points; i++){
        //         if(pointsToSpend[i].points - spendRequest.points< 0){
        //                 pointsSpent+=pointsToSpend[i].points
        //                 //adjust the payer array to account for spent points 
        //                 payerBalance[pointsToSpend[i].payer] -= pointsToSpend[i].points
        //                 //set that entry equal to zero 
        //                 pointsToSpend[i].points = 0
        //                 debugger
        //         }   else{
        //                 //all point cover the remainder
        //                 debugger
        //             }
        //     }

        
        //    while(pointsSpent < spendRequest.points){
        //         for(let i = 0 ; i<pointsToSpend.length; i++){
        //             if(pointsToSpend[i].points - spendRequest.points< 0){
        //                     pointsSpent+=pointsToSpend[i].points
        //                     //adjust the payer array to account for spent points 
        //                     payerBalance[pointsToSpend[i].payer] -= pointsToSpend[i].points
        //                     //set that entry equal to zero 
        //                     pointsToSpend[i].points = 0
        //                     debugger
        //             }   else{
        //                     //all point cover the remainder
        //                     debugger
        //                 }
        //         }

        //     }    
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




