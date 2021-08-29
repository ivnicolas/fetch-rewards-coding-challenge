import React, { Component } from 'react';

class Balance extends Component {
    
    getPayers(){
    let allTransactions = JSON.parse(localStorage.transactions)
      if(localStorage.length !==0) {
        let payers = allTransactions.reduce(function(r,a){
            r[a.payer] = r[a.payer]+a.points || a.points;
            return r
        }, Object.create(null))
        return JSON.stringify(payers)
      }
      else{
          return "No Transactios to Report"
      }
    }
   
   getTotal(){
       let balance = 0 
       if(localStorage.length !== 0){
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