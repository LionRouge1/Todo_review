 import displayList from "./__mocks__/displayList";
 import TDlist from "./src/TDlist";
 import {clearAll} from "./src/interactive";

test('Add li tag', () => {
  document.body.innerHTML =
  '<div>' +
   '  <ul id="list"></ul>' +
  '</div>';
  const list = new TDlist(false, 'new task');
  list.addTask();
  const ul = document.getElementById('list');
  displayList(ul, 1);
  const nbr = document.querySelectorAll('#list li');
  expect(nbr.length).toBe(1);
});


test('test local storage', () => {
 const list = new TDlist(false, 'another task');
 expect(list.addTask()).toBe(2);
});


describe.each([
  [0, 'task changed'],
  [1, 'another changes'],
])('.Edit description(%i, %s)', (a, expected) => {
  test(`Edit task '${expected}'`, () => {
    const list = new TDlist(); 
    list.editTask(a, expected);
    expect(list.list[a].Tdescription).toBe(expected);
  });
});

describe.each([
  [0, true],
  [1, false],
  [0, false],
])('task completed', (a, expected) => {
  test('edit description', () => {
    const list = new TDlist(); 
    list.editTask(a, expected);
    expect(list.list[a].Tcompleted).toBe(expected);
  });
});
