
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newP = document.createElement('p');
  newP.innerHTML = string;
  while (htmlElement.childElementCount > 0) {
    htmlElement.removeChild(htmlElement.firstChild);
  };
  htmlElement.appendChild(newP);
  // check if element has children
  //iterate over children
  //remove node/appending children(remove previous)
};

htmlGenerator('Party Time.', partyHeader);

