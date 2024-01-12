import React, { useEffect, useState } from "react";
import User from "./components/users/User";
import AddUser from "./components/users/addUser";


function App() {
  let [user, setUser] = useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(res=>res.json())
    .then(user => {
      let rawUser = user.results;
      let filterUser = rawUser.map((usr)=>{
        return{
          uuid:usr.login.uuid,
          name:`${usr.name.title} ${usr.name.first} ${usr.name.last}`,
          phone:usr.phone,
          cell:usr.cell,
          image:usr.picture.thumbnail
        }
      });
      setUser(filterUser);
    })
    .catch(err => console.log(err))
  },[]);

const addUserHandler = (nUser) =>{
  let newUser = [nUser,...user];
  setUser(newUser);
  setShow(!show);
}

const removeUserHandler = (uuid) =>{
  let remainUser = user.filter(usr => usr.uuid != uuid);
  setUser(remainUser);
}

let [show,setShow] = useState(false);
const showForm = () =>{
  setShow(!show);
}

  return (
    <>
    <div className="container">
      <div className="mt-5">
        <h1 className="text-center">Our Employee</h1>
        <button className="btn btn-primary mt-4" onClick={showForm}>Add User</button>
        {show && <AddUser addUser={addUserHandler}/>}
        {
          user.map(usr => <User data={usr} key={usr.uuid} remove={removeUserHandler}  />)
        }
      </div>
    </div>
    </>
  );
}

export default App;




{/* <User image={user[0].image} phone={user[0].phone} cell={user[0].cell} name={user[0].name}/>
      <User image={user[1].image} phone={user[1].phone} cell={user[1].cell} name={user[1].name}/>
      <User image={user[2].image} phone={user[2].phone} cell={user[2].cell} name={user[2].name}/> */}

      
        {/* <User data={user[0]}/>
        <User data={user[1]}/>
        <User data={user[2]}/> */}