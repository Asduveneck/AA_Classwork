import React from "react";
import { Route } from "react-router-dom";
// import ItemDetailContainer from "./item_detail_container";

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.requestSinglePokemon(this.props.match.params.id)
    }
  }
  render() {
  
    let poke = this.props.poke;
    let items = this.props.items;
    if (!poke || !items) return null;
    return(
      <div>
        <img src={poke.image_url} alt={poke.name}/>
        <h3>{poke.name}</h3>
        <ul>
          <li>
            Type: {poke.poke_type}
          </li>
          <li>
            Attack: {poke.attack}
          </li>
          <li>
            Defense: {poke.defense}
          </li>
          <li>
            Moves: {poke.moves.join(", ")}
          </li>
          <li> Items
{/*               
              {Object.values(items).map(item => {
                return (
                  <div>
                  <Link to={`/pokemon/${poke.id}/items/${item.id}`}>
                    <img src={item.image_url} alt={item.name} height="69" width="69" />
                  </Link>
                  </div> */}
                );
              })
              }
         
            


          </li>
        </ul>
       
      </div>
    );
  };
}

export default PokemonDetail;