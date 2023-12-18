import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transactionHistory']}>
      <thead className={css['tab-title']}>
        <tr>
          <th className={css['tab-title-text']}>Type</th>
          <th className={css['tab-title-text']}>Amount</th>
          <th className={css['tab-title-text']}>Currency</th>
        </tr>
      </thead>
      <tbody className={css['tab-body']}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css['tab-text']}>{item.type}</td>
            <td className={css['tab-text']}>
              {parseFloat(item.amount).toFixed(2)}
            </td>
            <td className={css['tab-text']}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
