var redux = require('redux');

var todoId = 0;
// Create reducer object. This takes a state by default if it has not been initialized before. The action to be dispatched.
// This functionality is directly used by redux.

// Breakup reducer into multiple reducers.
var searchReducer = (state = {High: 'nadadenada', Medium: 'sisas', Low: 'vamo'}, action) =>{
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        [action.priority] : action.text
      }
      break;
    default:
      return state;
  }
};

var todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':

      return [
        ...state,
        {
          id: todoId++,
          text: action.todo.text,
          priority: action.todo.priority
        }
      ];

    case 'REMOVE_TODO':
      return state.filter( item => item.id !== action.id);
      break;
    default:
      return state;
  }
};

var reducer = redux.combineReducers({

  searchTexts: searchReducer,
  todos: todoReducer
})

// Creates a single store to keep the state of the entire application.
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension && window.devToolsExtension()
));

// subscribe to changes in state
var unsubscribe = store.subscribe( () => {
  var state = store.getState();
  console.log('State from subscribe callback', state);
  document.getElementById('app').innerHTML = "yoooooo";
});

// Actions generators
var changeSearchText = (priority, text) => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    priority,
    text
  }
};

var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

var removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};


// dispatch some actions
store.dispatch(changeSearchText('High', 'Burn'));
store.dispatch(changeSearchText('Low', 'Boil'));
store.dispatch(addTodo({text: 'Try climbing', priority: "Medium"}));
store.dispatch(addTodo({text: 'Learn piano', priority: "Low"}));
store.dispatch(addTodo({text: 'Start a Business', priority: "High"}));
store.dispatch(removeTodo(1));
