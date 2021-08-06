import {useEffect, useState} from "react";


export default function Hello({}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => {
          console.log(result[0])
          setUser(result[0].name)
        })
        .catch(e => {
          console.log(e);
        });
  }, []);

  return (
      <p>hello, {user}</p>
  );
}
