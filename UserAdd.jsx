import { useState } from 'react';

function UserAdd() {
  const [Age, setage] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const createuser = async () => {
    console.log(Age, name, email);
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
      method: 'Post',
      body: JSON.stringify({ Age, name, email }),
    });
    response = await response.json();
    if (response) {
      alert('user added');
    }
  };
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Add new User / Using POST method</h3>
      <div style={{ textAlign: 'center' }}>
        <input
          type="number"
          placeholder="Enter your Age"
          onChange={(e) => setage(e.target.value)}
        />{' '}
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => setname(e.target.value)}
        />{' '}
        <br /> <br />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setemail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={createuser}>Add User</button>
      </div>
    </>
  );
}
export default UserAdd;
