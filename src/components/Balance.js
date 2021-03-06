import React, { Component } from 'react';

class Balance extends Component {
    //Show the total points available by each payer
    getPayers(){
      if(localStorage.transactions) {
        let allTransactions = JSON.parse(localStorage.transactions)
        let payers = allTransactions.reduce(function(r,a){
            if(r[a.payer]!== undefined){
                r[a.payer]+=a.points
            } else{
                r[a.payer]=a.points;
            } 
            return r
        }, Object.create(null))
        localStorage.setItem("payers", JSON.stringify(payers))
        // we are stringifying it so that it can show on the page 
        return JSON.stringify(payers)
      }
      else{
          return "No Transactions to Report"
        }
    }
    // Get Total Points
   getTotal(){
       
       if(localStorage.transactions){
        let allTransactions = JSON.parse(localStorage.transactions)
        let balance = allTransactions.reduce((acc,transaction) => acc + transaction.points,0)
        localStorage.setItem("balance", JSON.stringify(balance))
        return balance
       }else{
           return 0
       }
   }
    render() {
        return (
            <div className='center'>
            <h2 style={{color: 'orange'}}>SUMMARY</h2>
            <h2>TOTAL POINTS : {this.getTotal()} POINTS </h2>
            <h2>PAYER BALANCE: {this.getPayers()}</h2>
            </div>  
        );
    }
}
export default Balance;
