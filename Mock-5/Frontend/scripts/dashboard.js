let url = "https://wild-puce-betta.cyclic.app/api"
let bag = [];
let employeeForm = document.querySelector("#employeeForm");
const closeBtn = document.querySelector('.close');
const addEmployeeForm = document.getElementById('addEmployeeForm');
const employeeTableBody = document.getElementById('employeeTableBody');
employeeForm.style.display = "none"


let addEmployeeBtn = document.querySelector("#addEmployeeBtn");
addEmployeeBtn.addEventListener("click", () => {
    employeeForm.style.display = "block"
})
closeBtn.addEventListener('click', () => {
    employeeForm.style.display = 'none';
});

fetchEmployees();

addEmployeeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;

    const employeeData = {
        firstName,
        lastName,
        email,
        department,
        salary,
    };

    // Send a POST request to the backend API to add the employee
    fetch(`${url}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to add employee');
        })
        .then((data) => {
            console.log(data); // Log the response data
            bag = data;
            // Clear the form fields
            addEmployeeForm.reset();
            // Close the add employee form modal
            employeeForm.style.display = 'none';
            // Refresh the employee table
            fetchEmployees();
        })
        .catch((error) => {
            console.error(error);
            alert('Failed to add employee');
        });
});




function fetchEmployees() {
    fetch(`${url}/employees`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to fetch employees');
        })
        .then((data) => {
            bag = data
            console.log(data); // Log the response data
            // Clear the existing table rows
             renderData(data)

        })
        .catch((error) => {
            console.error(error);
            alert('Failed to fetch employees');
        });
}

function renderData(data){
    employeeTableBody.innerHTML = '';
    // Iterate through the employees and create table rows
    data.forEach((employee) => {
        const row = document.createElement('tr');
        row.innerHTML = `
    <td>${employee._id}</td>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.email}</td>
    <td>${employee.department}</td>
    <td>Rs.${employee.salary}</td>
    <td>
      <button class="editBtn" data-id="${employee._id}">Edit</button>
      <button class="deleteBtn" data-id="${employee._id}">Delete</button>
    </td>
  `;
        employeeTableBody.appendChild(row);
    });

    const editButtons = document.querySelectorAll('.editBtn');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
          const userId = button.dataset.id;
          window.location.href = `editEmployee.html?id=${userId}`;
            // console.log(userId)
        });
      });


    // Attach event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', handleDelete);
    });

}

// Function to handle delete button click
function handleDelete(event) {
    const employeeId = event.target.dataset.id;

    fetch(`${url}/employees/${employeeId}`, {
        method: 'DELETE',
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed to delete employee');
        })
        .then((data) => {
            console.log(data); // Log the response data
            // Refresh the employee table
            fetchEmployees();
        })
        .catch((error) => {
            console.error(error);
            alert('Failed to delete employee');
        });
}


document.querySelector("#sort").addEventListener("change",(e)=>{
    // console.log(bag)
    let val = e.target.value;
    let sortData;
    if (val === "") {
        renderData(bag);
    } else if (val === "asc") {
      sortData = bag.sort((a,b) => a.salary - b.salary);
      console.log(sortData)
      renderData(sortData);
    } else if (val === "desc") {
      sortData = bag.sort((a,b) => b.salary - a.salary);
      renderData(sortData);
    }
  });

  document.querySelector("#filter").addEventListener("change",(e)=>{
    let val=e.target.value
    if(val==""){
        renderData(bag)
    }else{
        let filterData=bag.filter((el)=>{
            return el.department==val
        })
        renderData(filterData)
    }
})

let searchBtn=document.querySelector("#searchbtn")
searchBtn.addEventListener("click",function(){
   let val=document.querySelector("#search").value
   searchData(val)
})

function searchData(val){
    if(val==""){
        renderData(bag)
    }else{
      let searchData=bag.filter((el)=>{
        return el.firstName.toLowerCase().includes(val.toLowerCase())
      })
     renderData(searchData)
    }
}

let logout = document.querySelector("#logout")
logout.addEventListener("click", () => {
    window.location.href = "index.html"
})
  

