var expect = require('expect');
var actions = require('actions');

describe('Actions test', () => {
  it('Should generate search text action', () => {
      var action = {
        type : 'SET_SEARCH_TEXT',
        searchText: 'Search this',
        priority: 'High'
      };

      var res = actions.setSearchText(action.searchText, action.priority);
      expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'feed fishes',
      priority: 'Medium'
    };

    var res = actions.addTodo(action.text, action.priority);
    expect(res).toEqual(action);
  });

  it('Should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
      priority: 'Low'
    };

    var res = actions.toggleShowCompleted(action.priority)
    expect(res).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    };

    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
