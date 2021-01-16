import { useState } from 'react';

const users = [
  {name: 'a', age: 20},
  {name: 'b', age: 20},
  {name: 'c', age: 21}
]

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) =>{
      return user.name === name;
    })
    setUser(foundUser);
  };

  return <div>
    <h3>User search</h3>
    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    <button onClick={onClick}>Find User</button>
    <div>
      {user?.name}
      {user?.age}
    </div>
  </div>;
}

export default UserSearch;