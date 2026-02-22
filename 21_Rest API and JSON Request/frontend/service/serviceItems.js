export const addTodoItems = async (data) => {
    const response = await fetch('http://localhost:3000/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await response.json();
};


export const getAllTodoItems = async (data) => {
    const response = await fetch('http://localhost:3000/api/todo');
    
    return await response.json();
};


export const MarkComplete = async (data) => {
    const response = await fetch('http://localhost:3000/api/todo/' + data._id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const items = await response.json();    
    return await response.json();
};

export const deleteTodoItem = async (id) => {
    const response = await fetch(`http://localhost:3000/api/todo/${id}` , {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });
         
    return await response.json();
};