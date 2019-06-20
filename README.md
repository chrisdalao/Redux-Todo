# REACT REDUX TODO

[NETLIFY DEPLOYMENT]('https://cdredux-todo.netlify.com/')

## Application Coverage

- Redux
- mapStateToProps
- Actions
- Reducers

## The Application

CRUD Functionality covered:

### CREATE

```
export const addNewTodo = newTodo => {
  return {
    type: ADD_NEW_TODO,
    payload: newTodo
  };
};
```

### DELETE

```
export const clearCompletedTodo = () => {
  return {
    type: CLEAR_TODO
  };
};
```
