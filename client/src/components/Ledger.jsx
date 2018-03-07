import React from 'react';
import Transaction from './Transaction';
import { Link } from 'react-router-dom';

class Ledger extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      transactionArray: [],
      balance: 0,
    };
  }

  componentWillMount() {
    const filter = array => {
      return array.filter((obj, idx, arr) => {
        return arr.map(i => i.activity_id).indexOf(obj.activity_id) === idx;
      });
    };

    const path = this.props.location.pathname
    if (path.length > 1) {
      let ledger = path.slice(8);
      fetch(`/ledger/${ledger}`)
      .then(res => {
        res.json()
        .then(data => {
          let filtered = filter(data).sort((a,b) => Date.parse(b.date) - Date.parse(a.date));
          this.setState({ transactionArray: filtered, balance: filtered[0].balance });
        });
      })
      .catch(err => {
        throw err;
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>${this.state.balance}</h1>
            <p className="lead">Balance</p>
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="row text-center">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Transaction</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.transactionArray.map((transaction, idx) =>
                <Transaction key={idx} info={transaction} />
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Ledger;
