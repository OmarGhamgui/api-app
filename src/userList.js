import React, { useState, useEffect } from "react";

const UserList = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
      console.log(data);
    }
    fetchData();
  });
  return(<table  style={{width:"100%"}}>{data.map((user) => (
    
        <tr key={user.id}>
      <th >{user.name}</th>
      <th> {user.username}</th>
      <th>{user.email}</th>
    </tr>
  ))   } </table>)
;
};

export default UserList;
