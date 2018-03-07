import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className="row text-center">
      <div className="col-12">
        <h1>Welcome!</h1>
      </div>
      <div className="col-12">
        <Link to="/ledger/simple-ledger">Simple Ledger</Link>
      </div>
      <div className="col-12">
        <Link to="/ledger/duplicate-ledger">Duplicate Ledger</Link>
      </div>
      <div className="col-12">
        <Link to="/ledger/complicated-ledger">Complicated Ledger</Link>        
      </div>
    </div>
  );
};

export default Main;
