
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  let newP = document.createElement('p');
  newP.append(string);
  htmlElement.append(newP);
};

htmlGenerator('Party Time.', partyHeader);

