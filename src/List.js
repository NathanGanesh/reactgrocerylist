import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = (props) => {
	const { item, removeItem, editItem } = props;
	// console.log(props);
	return (
		<article className="list-item">
			<div>
				<p>{item}</p>
			</div>
			<div>
				<button onClick={() => editItem(item)}>
					<FaEdit />
				</button>
				<button onClick={() => removeItem(item)}>
					<FaTrash />
				</button>
			</div>
		</article>
	);
};

export default List;
