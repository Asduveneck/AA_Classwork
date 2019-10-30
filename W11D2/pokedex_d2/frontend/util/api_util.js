export const fetchAllPokemon = () => {
  return(
    $.ajax({
      method: 'get', 
      url: '/api/pokemon/'
    })
  );
};


export const fetchPoke = (id) => {
  return(
    $.ajax({
      method: 'get',
      url: `/api/pokemon/${id}`
    })
  );
};

export const fetchItems = (id) => {
  
}