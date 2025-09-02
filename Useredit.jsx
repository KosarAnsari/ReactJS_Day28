import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

function Useredit() {
  const { id } = useParams();
  const [Age, setage] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getuserData();
  }, []);

  const getuserData = async () => {
    const url = 'http://localhost:3000/users/' + id;

    let response = await fetch(url);
    response = await response.json();
    setage(response.Age);
    setname(response.name);
    setemail(response.email);
  };

  async function updateuser() {
    const url = 'http://localhost:3000/users/' + id;
    console.log(name, Age, email);
    let response = await fetch(url, {
      method: 'Put',
      body: JSON.stringify({ Age, name, email }),
    });
    response = await response.json();
    if (response) {
      alert('successfully updated!');
      navigate('/');
    }
  }
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h3>Edit User Details</h3>
        <input
          type="number"
          value={Age}
          onChange={(e) => setage(e.target.value)}
          placeholder="Enter age"
        />
        <br />
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter name"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter email"
        />
        <br />
        <br />
        <button onClick={updateuser}>Update User</button>
      </div>
    </>
  );
}
export default Useredit;
