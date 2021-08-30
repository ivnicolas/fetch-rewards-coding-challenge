import React from 'react';

const navBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="/add-transaction">Add Transaction</a></li>
                <li><a href="/spend-points">Spend Points</a></li>
                <li><a href="/all-transactions">All Transactions</a></li>
                <li><a href="/">Balance</a></li>
            </ul>
        </nav>
    );
};
export default navBar;

