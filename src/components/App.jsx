import Profile from "./Profile/UserProfile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionTable/TransactionHistory";
import user from '../path/user'
import data from '../path/data'
import friends from '../path/friends'
import transactions from '../path/transactions'
export const App = () => {
  return (
    <div
    >
      <Profile username = {user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
