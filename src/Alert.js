import React, { useEffect } from 'react';

const Alert = (props) => {
	const { color, text, list, showAlert } = props;

	useEffect(
		() => {
			const timeout = setTimeout(() => {
				showAlert();
			}, 3000);
			return () => clearTimeout(timeout);
		},
		[ list ]
	);

	return (
		<div className="alert" style={{ backgroundColor: `${color}` }}>
			<p>{text}</p>
		</div>
	);
};

export default Alert;
