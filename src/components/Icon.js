import React from 'react';

 

const Icon = ({ name, size}) => {
	return (
		<a href="www.facebook.com" target="_blank" className="icon">
			<img src={name + '.png'} />
		</a>
	)
}

export default Icon;