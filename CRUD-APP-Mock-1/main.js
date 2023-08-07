const Name=document.getElementById("name")
const Image=document.getElementById("image")
const price=document.getElementById("price")
const PostData=document.getElementById("PostData")

PostData.addEventListener("submit", AddPost)


let myData=[]

///console.log(myData)



function AddPost(e){
    e.preventDefault()
    let obj={
        Image:Image.value,
        Name:Name.value,
        price:+price.value
    }
    FetchData(obj)
    Image.value=""
    
    
}


async function FetchData(obj){
    try {
      const newData=await  fetch(`https://deployeement-server.onrender.com/posts`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify(obj)

        })
        console.log(newData)
        getallData()

    } catch (error) {
        console.log(error)
    }
}

async function getallData(){
    try {
        const response = await fetch('https://deployeement-server.onrender.com/posts', {
            method: 'GET',
            headers: {
                "Content-Type":"application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data.');
        }
        let data = await response.json();
        //console.log(data)
        //  myData =data
         localStorage.setItem("mydata", JSON.stringify(data))
         
        RenderAllData(data); 
    } catch (error) {
        console.log(error);
    }
}


const storedArrayString = localStorage.getItem("mydata");


const retrievedArray = JSON.parse(storedArrayString);
console.log(retrievedArray)




const putid=document.getElementById("id")
const putName=document.getElementById("putName")
const putImage=document.getElementById("putImage")
const PutPrice=document.getElementById("PutPrice")
const PutData=document.getElementById("PutData")

PutData.addEventListener("submit", PutMyData)

function PutMyData(e){
 e.preventDefault()
 let obj={
    id:+putid.value,
    Image:putImage.value,
    Name:putName.value,
    price:+PutPrice.value
  }
  let id=obj.id
 
  PutallData(obj,id)

}

async function PutallData(obj,id){
    try {
        const putallmyData=await fetch(`https://deployeement-server.onrender.com/posts/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        })
         getallData()
    } catch (error) {
        console.log(error)
    }
}


const Patchid=document.getElementById("patchid")
const patchPrice=document.getElementById("patchprice")
const PatchData=document.getElementById("PatchData")

PatchData.addEventListener("submit", patchMyData)

function patchMyData(e){
    e.preventDefault()
    let obj={
        id:+Patchid.value,
        price:+patchPrice.value
    }
    console.log(obj)
    let id=obj.id
    PatchlData(obj,id)
    

}

async function PatchlData(obj,id){
    try {
        const patchallmyData=await fetch(`https://deployeement-server.onrender.com/posts/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        })
          getallData()
    } catch (error) {
        console.log(error)
    }
}

const Deleteid=document.getElementById("Deleteid")
const DeleteData=document.getElementById("DeleteData")

DeleteData.addEventListener("submit", DeletecardData)

function DeletecardData(e){
    e.preventDefault()
    let obj={
        id:+Deleteid.value
    }
    DeletesigleCard(obj.id)
   
}

async function DeletesigleCard(id){
    console.log(id)
    try {
        const patchallmyData=await fetch(`https://deployeement-server.onrender.com/posts/${id}`,{
            method:"DELETE"
        })
        getallData()
    } catch (error) {
        console.log(error)
    }
}

const SortData=document.getElementById("SortData")

SortData.addEventListener("change", sortAllData)

function sortAllData(){
    if(SortData.value=="asc"){
       const sortedData=retrievedArray.sort((a,b)=> a.price-b.price)
       RenderAllData(sortedData)
    }
    else if(SortData.value=="desc"){
        const sortedData=retrievedArray.sort((a,b)=> b.price-a.price)
       RenderAllData(sortedData)
    }
    
    else if(SortData.value=="default"){
        console.log(retrievedArray)
        RenderAllData(retrievedArray)
        
    }
}


const Render=document.getElementById("part2")

function RenderAllData(Data){
    Render.innerHTML=null
    for(let el of Data){
        Card(el)
        
    }
   

}


function Card(el){
   let card=`<div id="Card-div">
   <img width="80%" src=${el.Image} alt="">
   <h2>${el.Name}</h2>
   <p>$${el.price}</p>
   <button id="delete"  >DELETE</button>
</div>`
Render.innerHTML+=card

}


 
getallData()
// console.log("LOL")