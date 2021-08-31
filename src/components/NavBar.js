import React from 'react';

const navBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'beige'}}>
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="center">
                            <a className="nav-link" href="/"> Home </a> ||
                            <a className="nav-link" href="/add-transaction">Add Transaction</a> || 
                            <a className="nav-link" href="/spend-points" > Spend Points </a> || 
                            <a className="nav-link" href="/all-transactions"> All Transactions </a>
                    </ul>
                </div>
        </nav>
    );
};
export default navBar;

