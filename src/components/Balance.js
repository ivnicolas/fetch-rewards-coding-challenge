import React, { Component } from 'react';

class Balance extends Component {
   
   getTotal(){
       if(localStorage.length !== 0){
        let allTransactions = JSON.parse(localStorage.transactions)
        return allTransactions.reduce((acc,transaction) => acc + transaction.points,0)
       }else{
           return 0
       }
   }
    render() {
        return (
            
              <h4>{this.getTotal()} POINTS</h4>  
           
        );
    }
}

export default Balance;

