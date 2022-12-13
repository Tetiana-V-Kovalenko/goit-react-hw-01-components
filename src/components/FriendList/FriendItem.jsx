import PropTypes from 'prop-types'; 
import css from './FriendList.module.css';
const FriendItem=({avatar,name,isOnline,id})=>{
   return  (
    <li className={css.item} key={id}>
  <span className={`${css.status} ${isOnline ? css.green : css.red}`}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
   )
};


export default FriendItem