
import PropTypes from 'prop-types'


export const PokemonCard = ( { id , name , sprites}) => {
  return (
    <section className="card">
      <h2>#{id} - {name}</h2>
      <div>
      {
        sprites.map( 
            (sprite , index) => 
            <img   key={ `${ id }-${ index }` } src={ sprite } alt={ name } /> 
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
