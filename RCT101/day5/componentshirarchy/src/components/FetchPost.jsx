import { useState,useEffect } from "react";

import Postitem from "../components/Postitem"

// const Postitem=(prop)=>{
//     // console.log(prop)
//     const {id,title}=prop
//     console.log(id,title)
//     return(
//         <div style={{border:"1px solid red", padding:"10px", margin:"10px"}}>
//             <h1>{id}</h1>
//             <p>{title}</p>
//                     </div>
//     )
// }


const getdata=(page)=>{
     return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
     .then(async(res)=>{
        const totalCount=Number(res.headers.get("x-total-count"))
        const data=await res.json()
        return{
            data:data,
            totalCount:totalCount
        }
     }
     )
}
function Posts(){

    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)
    const [err,seterr]=useState(false)

    const [page,setPage]=useState(1)
    const [totalCount,settotalCount]=useState(0)



    

    useEffect(()=>{
        fetchdata(page)
    },[page])

    const fetchdata=async(page)=>{
       

        try {
            setLoading(true)
            const {data,totalCount}=await getdata(page)
            setPosts(data)
            console.log(data,totalCount)
            setLoading(false)
            settotalCount(totalCount)
        } catch (error) {
            seterr(true)
            setLoading(false)
        }

    }

    

   

    
    if(loading){
        return <h1>Loading....!!!!</h1>
    }

    if(err){
        return <h1>Error something went wrong...!!!</h1>
    }

    const handlepage=(val)=>{
        const updatedpage=page+val;
        setPage(updatedpage)
    }
    

    return (
        <div>
            <h1>All the posts will be displayed below when you click on button</h1>
            {/* <button onClick={fetchdata}>click me to see all the posts</button> */}
            {
                posts.map((post=>{
                       return <Postitem  key={post.id} {...post}/>
                }))

                
            }

            {/* pagination */}

            <div>
                <button disabled={page===1} onClick={()=> handlepage(-1)}>PREV</button>
                <button disabled>{page}</button>
                <button disabled={page===Math.ceil(totalCount/10)} onClick={()=> handlepage(1)}>NEXT</button>
            </div>

            <div>
                {
                    new Array(Math.ceil(totalCount/10)).fill(0).map((el,idx)=>{
                    return    <button onClick={()=> setPage(idx+1)}>{idx+1}</button>
                    })
                }
            </div>
        </div>

    )
}

export default Posts