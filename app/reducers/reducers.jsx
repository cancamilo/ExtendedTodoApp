
var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = {High: '', Medium: '', Low: ''}, action) =>{
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        [action.priority] : action.searchText
      }
      break;
    default:
      return state;
  }
};

export var showCompletedReducer = (state = {High: false, Medium: false, Low: false}, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return {
        ...state,
        [action.priority] : !state[action.priority]
      }

      break;
    default:
      return state;
  }
};

export var todosReducer = ( state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':

      return [
        ...state,
        {
          id: uuid(),
          priority: action.priority,
          text: action.text,
          completed: false,
          createdAt: moment().unix()
        }
      ];

    case 'TOGGLE_TODO':
      return state.map( (todo) => {
        if(todo.id === action.id) {
          var newState = !todo.completed;

          return {
            ...todo,
            completed : newState,
            completedAt: newState ? moment.unix() : undefined
          };
        }
        return todo;
      });
      break;

    case 'REMOVE_TODO':
      return state.filter( item => item.id !== action.id);

    default:
      return state;
  }
};
