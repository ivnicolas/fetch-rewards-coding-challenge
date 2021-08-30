import React from 'react';

const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#00209F'}}>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/add-transaction" style={{color: 'white'}}>Add Transaction</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/spend-points" style={{color: 'white'}}>Spend Points</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-transactions" style={{color: 'white'}}>All Transactions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{color: 'white'}}>Balance</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};
export default navBar;

