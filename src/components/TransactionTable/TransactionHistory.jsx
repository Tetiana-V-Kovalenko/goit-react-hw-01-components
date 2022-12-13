import css from './Transactions.module.css'
import PropTypes from 'prop-types';
const TransactionHistory =({transactions})=>{
    return (
        <table className={`${css.transaction_history}`}>
  <thead className={css.transaction_thead}>
    <tr >
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transaction_tbody}>
  {transactions.map(transaction => {
return (<tr className={css.transaction_body_row} key={transaction.id}>
       <td>{transaction.type}</td>
       <td>{transaction.amount}</td>
       <td>{transaction.currency}</td>
     </tr>)
  })
  }
  </tbody>
</table>
    )
}
TransactionHistory.propTypes={
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}
export default TransactionHistory