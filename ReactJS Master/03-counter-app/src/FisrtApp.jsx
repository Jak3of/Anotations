
import PropTypes from 'prop-types';

export default function FirstApp({title , subTitle, name}) {
	return (<>
		<h1>{title}</h1>
		<p>{subTitle}</p>
		<p>{name}</p>
	</>)
}



FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	name: PropTypes.string

}

FirstApp.defaultProps = {
	subTitle: 'No hay subtitulo',
	title: 'No hay titulo',
	name: 'Nelson'
}


