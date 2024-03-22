
import PropTypes from 'prop-types'


export const PokemonCard = ( { id , name , sprites}) => {
    console.log( sprites )
  return (
    <section className="card">
      <h2>#{id} - {name}</h2>
      <div>
      {
        sprites.map( 
            sprite => 
            <img  key={ sprite } src={ sprite } alt={ name } /> 
            )
      }
      </div>
    </section>
  )
}

PokemonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  sprites: PropTypes.array
}

PokemonCard.defaultProps = {
  id: 1,
  name: 'bulbasaur',
  sprites: []
}
