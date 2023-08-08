const cardsData = [
    {
      image: 'image1.jpg',
      name: 'Card 1',
      age: 25,
      place: 'City A',
      moreInfo: 'Additional information about Card 1...',
    },
    // Add more card data here
  ];
  
  const cardContainer = document.querySelector('.card-container');
  
  function createCard(cardData) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.src = cardData.image;
    card.appendChild(image);
  
    const name = document.createElement('h3');
    name.textContent = cardData.name;
    card.appendChild(name);
  
    const button = document.createElement('button');
    button.textContent = 'More Information';
    button.addEventListener('click', () => {
      alert(`Age: ${cardData.age}\nPlace: ${cardData.place}\n${cardData.moreInfo}`);
    });
    card.appendChild(button);
  
    cardContainer.appendChild(card);
  }
  
  // Create cards using data
  cardsData.forEach(createCard);
  