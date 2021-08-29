import React, { Component } from 'react';
import {Transaction} from './Transaction';

class allTransactions extends Component {
    getTransactions(){
        
        if(localStorage.length !== 0){
            let transactions = []
            for(let i = 0 ; i<localStorage.length ; i++){
                transactions.push(JSON.parse(localStorage[localStorage.key(i)]))
            }
            return transactions
        }else{
            return 0
        }
    }

    render() {
        return (
            <div>
                <h1> AllTransactions</h1>
                {this.getTransactions() === 0 ? 'No Transaction' : this.getTransactions().map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>))}
            </div>
        );
    }
}

export default allTransactions;

