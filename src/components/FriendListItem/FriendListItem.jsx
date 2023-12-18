import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css['friend-item']}>
      <span
        className={`${css['status']} ${
          isOnline ? css['online'] : css['offline']
        }`}
      ></span>
      <img
        className={css['friend-avatar']}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css['friend-name']}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;