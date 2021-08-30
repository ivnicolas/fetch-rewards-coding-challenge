import React, { Component } from 'react';

class Balance extends Component {
    
    getPayers(){
    // let allTransactions = JSON.parse(localStorage.transactions)
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
        return JSON.stringify(payers)
      }
      else{
         
          return "No Transactions to Report"
      }
    }
   
   getTotal(){
       let balance = 0 
       if(localStorage.transactions){
        let allTransactions = JSON.parse(localStorage.transactions)
        balance = allTransactions.reduce((acc,transaction) => acc + transaction.points,0)
        localStorage.setItem("balance", JSON.stringify(balance))
        return balance
       }else{
           return balance
       }
   }
    render() {
        return (
            <>
              <h4>{this.getTotal()} POINTS</h4>  
              <h3>{this.getPayers()}</h3>
              </>
           
        );
    }
}

export default Balance;




// let payers = allTransactions.reduce(function(r,a){
//     r[a.payer] = r[a.payer] || [];
//     r[a.payer].push(a.points)
//     r[a.payer]= r[a.payer].reduce((acc,cv) => acc + cv)
//     return r
// }, Object.create(null))