import React, { useState } from 'react';

const AddTodoForm = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoBody, setTodoBody] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoTitle([...todoTitle, {title: todoTitle, complete: false}])
        setTodoBody([...todoBody, {body: todoBody, complete: false}])
        console.log(todoTitle);
        console.log(todoBody);
        // TODO
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" >
			<input
				type='text'
				className='form-control mb-3 mr-sm-3'
				placeholder='Add todo title...'
				value={todoTitle}
				onChange={(event) => setTodoTitle(event.target.value)}
			></input>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2 '
				placeholder='Add todo description...'
				value={todoBody}
				onChange={(event) => setTodoBody(event.target.value)}
                style={{height: "80px"}}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
        </form>
    )
}

export default AddTodoForm
