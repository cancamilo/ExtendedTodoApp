var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchText Reducer', () =>{
    it('should set search text', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cat',
        priority: 'Low'
      };

      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual({
        Low: action.searchText
      });
    });
  });

  describe('toggle show todos Reducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
        priority: 'Medium'
      };

      var res = reducers.showCompletedReducer(undefined, df(action));
      expect(res).toEqual({High: false, Medium: true, Low: false});
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'break bones',
        priority: 'High'
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [{
          id: '123',
          text: 'any',
          priority: 'High',
          completed: true,
          createdAt: 123,
          completedAt: 125
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });


  });
});
