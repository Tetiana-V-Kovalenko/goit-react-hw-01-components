import PropTypes from 'prop-types';
import FriendItem from "./FriendItem";
import css from './FriendList.module.css';
const FriendList = ({friends})=>{
    return (
        <ul className={`${css.friend_list}`}>
  {friends.map(friend=>{ 
    return <FriendItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id}/>
  })
  }
</ul>
    )
};

FriendList.propTypes={
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    )
}
export default FriendList