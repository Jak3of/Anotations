
import PropTypes from 'prop-types';
import { useState } from 'react';



export function CounterApp( {value} ) {


	const [seg, setSeg] = useState(value);
	const [min, setMin] = useState(0);
	const [hor, setHor] = useState(0);

	const handleAdd = () =>	setSeg(seg + 1)


	const handleSub = () => setSeg(seg - 1)
	
	const handleReset = () =>{
		
		setSeg(value);
		setMin(0);
		setHor(0);
	}
	
	// setTimeout(() => {
		
	// 	setSeg(prevSeg => prevSeg + 1);
	
	// }, 1000);
	
	if (seg === 60) {
		setSeg(0);
		setMin( min + 1 );
		
		}
	
	if (min === 60) {
		setMin(0);
		setHor( hor + 1 );
	}
	
	if (seg === -1 && min > 0) {
		setSeg(59);
		setMin(min - 1);
		if (min === -1 && hor > 0) {
			setHor(hor - 1);
		}
	} else if (seg === -1 && min === 0 && hor === 0) {
		setSeg(0);
		setMin(0);
		setHor(0);
	}
	console.log('render');

	return (
		<>
            <h1>CounterApp </h1>
			<h3 style={{ textAlign: 'center' }}>{seg}</h3>
			<h2 style={{ textAlign: 'center' }}>{hor}:{min}:{seg}</h2>

			<button className="btn" onClick={ handleAdd } >+1</button>
			<button className="btn" onClick={ handleSub } >-1</button>
			<button className="btn" aria-label="btn-reset" onClick={ handleReset } >Reset</button>
		</>
		)
}

CounterApp.propTypes = {
	value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
	value: 0
}


