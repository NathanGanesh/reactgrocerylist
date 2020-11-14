import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [ input, setInput ] = React.useState('');
	const [ list, setList ] = React.useState([ 'asd' ]);

	const [ alertValues, setAlertValues ] = useState({ show: false, msg: '', color: '' });
	const [ editName, setEditName ] = React.useState('');
	const [ edit, setEditState ] = useState(false);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (!input) {
			showAlert(true, 'red', 'please enter value');
			//input empty
		} else if (input && edit) {
			console.log(editName);
			setList(
				list.map((item, index) => {
					if (item === editName) {
						console.log('hey');
						let newItem = input;
						console.log(input);
						return input;
						// console.log(index);
					}
					return item;
				})
			);
			setInput('');
			setEditState(false);
			setEditName(null);
		} else {
			setInput('');
			setList([ ...list, input ]);
		}
	};
	const showAlert = (show = false, color = '', msg = '') => {
		setAlertValues({ show, color, msg });
	};

	const removeItem = (name) => {
		showAlert(true, 'red', 'item removed');
		setList(list.filter((item) => item !== name));
	};

	const editItem = (id) => {
		const item = list.find((item) => item === id);
		setEditState(true);
		setInput(item);
		setEditName(id);
	};

	return (
		<div className="main-container">
			<div className="alert-box">
				{alertValues.show && (
					<Alert color={alertValues.color} text={alertValues.msg} list={list} showAlert={showAlert} />
				)}
			</div>
			<h2>grocery bud</h2>
			<form onSubmit={handleOnSubmit}>
				<input
					className="input-egg"
					placeholder="e.g. eggs"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				{edit ? (
					<input type="submit" className="submit-button" value="Edit" />
				) : (
					<input type="submit" className="submit-button" value="Submit" />
				)}
			</form>
			{list.length !== 0 && (
				<div className="list-items">
					{list.map((item, index) => {
						return <List item={item} key={index} removeItem={removeItem} editItem={editItem} />;
					})}
				</div>
			)}

			{list.length !== 0 && (
				<div className="clear-items">
					<button onClick={() => setList([])}>Clear items</button>
				</div>
			)}
		</div>
	);
}

export default App;
