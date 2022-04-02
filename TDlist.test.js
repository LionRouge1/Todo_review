import displayList from './__mocks__/displayList';
import TDlist from './src/TDlist';

describe('Testing add funtion', () => {
  test('Add li tag', () => {
    document.body.innerHTML = '<div>'
     + '  <ul id="list"></ul>'
    + '</div>';
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

describe('testing remove function', () => {
  test('Delete li tag', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="list">'
    + '     <li class="task"><input type="text" class="description" id="1" value="task"></li>'
    + '     <li class="task"><input type="text" class="description" id="2" value="task"></li>'
    + '  </ul>'
    + '</div>';
    const list = new TDlist();
    list.removeTask('2');
    const element = document.querySelectorAll('#list li');
    expect(element.length).toBe(1);
  });

  test('Delete li tag 2', () => {
    document.body.innerHTML = '<div>'
       + '  <ul id="list"> <li class="task"><input type="text" class="description" id="1" value="task"></li></ul>'
      + '</div>';
    const list = new TDlist();
    expect(list.removeTask('1')).toBe(0);
  });
});