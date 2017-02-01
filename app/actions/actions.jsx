
// Set search text indicating the text and in which list to search (priority)
export var setSearchText = (searchText, priority) => {
  return {
      type: 'SET_SEARCH_TEXT',
      searchText,
      priority
  };
};

// Add in the specified list
export var addTodo = (text, priority) => {
  return {
    type: 'ADD_TODO',
    text,
    priority
  };
};

// Show completed elements in the indicated list
export var toggleShowCompleted = (priority) => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
    priority
  };
};

// Mark todo as checked.
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
