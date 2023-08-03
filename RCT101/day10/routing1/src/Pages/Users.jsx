import { useState, useEffect } from "react";

import Usercard from "../Cards/usercard";

const getdata = async () => {
  try {
    let res = await fetch(`https://reqres.in/api/users?page=2`);
    let data = await res.json();
    // console.log(data.data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

getdata();

function User() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetcherr, setFetcherr] = useState(false);

  const fetchandupdatedata = () => {
    setLoading(true);
    getdata()
      .then((res) => {
        setData(res);
      })
      .catch(() => {
        setFetcherr(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchandupdatedata();
  }, []);
  console.log(data.data);
 

  return loading ? (
    <h1>Loading....</h1>
  ) : fetcherr ? (
    <h1>Error in loading</h1>
  ) : (
    <>
      <h1>Users fetched data</h1>

      {/* {data?.data?.map((user) => {
     
return <h1 key={user.id}>{user.first_name}</h1>;
      })} */}

      { data?.data?.map((user)=>{
 return <Usercard key={user.id} {...user} />
    })}
    </>
  );
}

export default User;
