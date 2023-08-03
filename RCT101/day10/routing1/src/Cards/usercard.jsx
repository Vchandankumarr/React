import { Link } from "react-router-dom"

function Usercard(data){
    console.log("user card")
    console.log(data)
    return (
        <div >
            <img src={data.avatar} alt="" />
            <h1> Name:-{data.first_name}{" "} {data.last_name} </h1>
            <h2>{data.email}</h2>
            <Link to={`/user/${data.id}`}>More Info</Link>

        </div>
    )
}

export default Usercard