import React, { Component } from 'react';
import {Transaction} from './Transaction';

class allTransactions extends Component {
    //going through all the transactions, if they exist, and passing them as props to the transaction component 
    render() {
        return (
            <div>
                <h1> All Transactions</h1>
                {localStorage.transactions ? JSON.parse(localStorage.transactions).map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>)) : 'No Transactions' }
            </div>
        );
    }
}
export default allTransactions;

