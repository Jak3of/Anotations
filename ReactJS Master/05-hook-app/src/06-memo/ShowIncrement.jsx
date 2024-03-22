import { memo } from "react";
import PropTypes from 'prop-types'

export const ShowIncrement = memo(
    ( { increment }) => {
        console.log('me volvi a renderizar :C');
        return (
            <button className="btn btn-primary"
            onClick={ () => increment() }
            >Incrementar</button>
        )
    }
)

ShowIncrement.displayName = 'ShowIncrement'

ShowIncrement.propTypes = {
    increment: PropTypes.func
}