
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogsArr = (Object.keys(dogs))


const dogLinkCreator = function (breed) { // list = dogs // if we want more modularity
  const dogLinks = [];
  for(breed of dogsArr){
    let newA = document.createElement('a');
    newA.innerHTML = breed  // name
    newA.href = dogs[breed] // link. Hopefully href works like this

    let newLi = document.createElement('li');
    newLi.className += "dog-link";
    newLi.append(newA);

    dogLinks.push(newLi); 
  }

  return dogLinks;
}


const attachDogLinks = function() {
  let dogLinks = dogLinkCreator();

  
  const dogUl = document.querySelector('.drop-down-dog-list');

  dogLinks.forEach(link => {
    dogUl.append(link);
  });

}

const handleLeave = function() {
  const dogNav = document.querySelector('.drop-down-dog-nav');
  dogNav.addEventListener('mouseout', function() {
    let dogLis = document.querySelectorAll('.drop-down-dog-nav li');
    dogLis.forEach(el => {
      el.classList.add('dog-link'); 
    })
  })
}
const handleEnter = function() {
  const dogNav = document.querySelector('.drop-down-dog-nav');
  dogNav.addEventListener('mouseover', function() {
    let dogLis = document.querySelectorAll('.drop-down-dog-nav li');
    dogLis.forEach(el => {
      el.classList.remove('dog-link'); 
    })
  })
}

module.exports = attachDogLinks();
module.exports = handleEnter();
module.exports = handleLeave();