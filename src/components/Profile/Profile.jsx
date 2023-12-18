import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css['user-profile']}>
      <div className={css['user-description']}>
        <img src={avatar} alt="User avatar" className={css['avatar']} />
        <p className={css['user-name']}>{username}</p>
        <p className={css['card-tag']}>@{tag}</p>
        <p className={css['user-location']}>{location}</p>
      </div>

      <ul className={css['user-stats']}>
        <li className={css['user-stats-item']}>
          <span className={css['card-label']}>Followers</span>
          <span className={css['label-quantity']}>{stats.followers}</span>
        </li>
        <li className={css['user-stats-item']}>
          <span className={css['card-label']}>Views</span>
          <span className={css['label-quantity']}>{stats.views}</span>
        </li>
        <li className={css['user-stats-item']}>
          <span className={css['card-label']}>Likes</span>
          <span className={css['label-quantity']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;