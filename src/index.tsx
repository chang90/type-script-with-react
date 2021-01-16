import ReactDOM from 'react-dom';
import Parent from './props/Parent';
import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';
import UserSearchCla from './classes/UserSearch';
import EventComponent from './events/EventComponent';

const users = [
  {name: 'a', age: 20},
  {name: 'b', age: 20},
  {name: 'c', age: 21}
]

const App = () => {
  return (
  <div>
    <h1>Hi</h1>
      <Parent></Parent>
      <GuestList />
      <UserSearch/>
      <EventComponent/>
      <UserSearchCla users={users}/>
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));