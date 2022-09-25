import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
// import useAxios from "axios-hooks";

const UserList = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        setData(data);
      };
      useEffect(() => {
        getData();
      }, []);
console.log(data)
    //   const [{ data, loading, error }, refetch] = useAxios("https://jsonplaceholder.typicode.com/users");
    //   if (loading) return <p>Loading...</p>;
    //   if (error) return <p>Error!</p>;
      return (
    //   <div>{JSON.stringify(data)}</div>
    <div style={{display:"flex",flexWrap:"wrap",width:"100%"}}>
      {data.map((el) => (
        <UserCard el={el} key={el.id} />
      ))}
      </div>
      )
    }

export default UserList