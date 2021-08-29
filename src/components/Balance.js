import React, { Component } from 'react';

class Balance extends Component {
   
   getTotal(){
       if(localStorage.length !== 0){
        let allTransactions = JSON.parse(localStorage.transactions)

        // allTransactions.map(transaction => points+= transaction.points)

        // allTransactions.reduce((acc,transaction) => acc + transaction.points,0)

        debugger
        // for(let i = 0 ; i<allTransactions; i++){
        //     points += JSON.parse(localStorage[localStorage.key(i)]).points
        // }

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

