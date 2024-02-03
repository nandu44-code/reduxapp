export const addTodo = (text) => {

    return {
        type: 'ADD_TASK',
        Payload: {
            id: new Date().getTime(),
            text
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TASK',
        Payload: id,
    };
};