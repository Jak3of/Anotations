
import PropTypes from 'prop-types'

import { memo } from 'react'

export const Small = memo(
    ({ value}) => {
        console.log('me volvi a renderizar :C')
    
        
        return (
            <div>
                <small>{ value }</small>
            </div>
        )
    }
)

Small.displayName = 'Small'

Small.propTypes = {
    value: PropTypes.number
}


