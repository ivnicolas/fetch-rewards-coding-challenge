import React from 'react';
import { Route, Switch} from 'react-router';

import Balance from './Balance'
import addTransaction from './addTransaction'
import spendPoints from './spendPoints'
import allTransactions from './allTransactions'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Balance}/>
            <Route exact path ='/add-transaction' component={addTransaction}/>
            <Route exact path ='/spend-points' component={spendPoints}/>
            <Route exact path ='/all-transactions' component={allTransactions}/>

        </Switch>
    );
};

export default Routes;