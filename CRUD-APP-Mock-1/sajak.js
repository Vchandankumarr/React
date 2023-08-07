const postform = document.getElementById('post-form');
let OurData = [];



postform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const imageLink = document.getElementById('image-link').value;

  

  
    let productData = {
        title: title,
        price: price,
        description: description,
        image: imageLink
    };

    await productpostfetch(productData);
});

const productpostfetch = async (productData) => {
    try {
        const response = await fetch('https://productserver-7szk.onrender.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });
        if (!response.ok) {
            throw new Error('Failed to post data.');
        }
       
        postform.reset();
      
        await getproductdata();
    } catch (error) {
        console.log(error);
    }
};

const renderGrid = (data) => {
    const gridDiv = document.querySelector('.grid');
    gridDiv.innerHTML = '';

    data.forEach((el) => {
        const gridItem = document.createElement('div');
        gridItem.innerHTML = `
            <h3>${el.title}</h3>
            <img src="${el.image}" alt="${el.title}">
            <h3>${el.price}</h3>
            <p>${el.description}</p>
        `;
        gridDiv.appendChild(gridItem);
    });
};

const Sorted = document.getElementById('sort');
Sorted.addEventListener('change', (e) => {
    e.preventDefault();
    if (Sorted.value === 'asc') {
       
        const SortedAscData = OurData.slice().sort((a, b) => a.price - b.price);
        renderGrid(SortedAscData);
    } else if (Sorted.value === 'desc') {
        
        const SortedDescData = OurData.slice().sort((a, b) => b.price - a.price);
        renderGrid(SortedDescData);
    } else if (Sorted.value === 'nothing') {
       
        renderGrid(OurData);
    }
});

const getproductdata = async () => {
    try {
        const response = await fetch('https://productserver-7szk.onrender.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data.');
        }
        const data = await response.json();
        OurData = data;
        renderGrid(OurData); 
    } catch (error) {
        console.log(error);
    }
};


getproductdata();