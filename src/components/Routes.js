import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Balance from './Balance'
import AddTransaction from './AddTransaction'
import SpendPoints from './SpendPoints'
import AllTransactions from './AllTransactions'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' component={Balance}/>
                <Route exact path ='/add-transaction' component={AddTransaction}/>
                <Route exact path ='/spend-points' component={SpendPoints}/>
                <Route exact path ='/all-transactions' component={AllTransactions}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;