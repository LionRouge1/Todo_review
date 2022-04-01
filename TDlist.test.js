 import TDlist from "./src/TDlist";

test('Add li tag', () => {
  const list = new TDlist(false, 'new task');
  const nbr = list.addTask();
  expect(nbr).toBe(1);
});

test('Add 2 li tag', () => {
 const list = new TDlist(false, 'new task');
 expect(list.addTask()).toBe(2);
});

test('Delete li tag', () => {
 document.body.innerHTML =
   '<div>' +
    '  <ul id="list"> <li class="task"><input type="text" class="description" id="2" value="task"></li></ul>' +
   '</div>';
 const list = new TDlist();
 expect(list.removeTask("2")).toBe(1);
});

test('Add 3 li tag', () => {
 const list = new TDlist(false, 'new task');
 expect(list.addTask()).toBe(2);
});

test('Delete 2 li tag', () => {
 document.body.innerHTML =
   '<div>' +
    '  <ul id="list">' +
      '     <li class="task"><input type="text" class="description" id="2" value="task"></li>'+
      '     <li class="task"><input type="text" class="description" id="2" value="task"></li>'+
    '  </ul>' +
   '</div>';
 const list = new TDlist();
 list.removeTask("2");
  const element = document.querySelectorAll('#list li');
 expect(element.length).toBe(1);
});

test('Delete 3 li tag', () => {
 document.body.innerHTML =
   '<div>' +
    '  <ul id="list"> <li class="task"><input type="text" class="description" id="1" value="task"></li></ul>' +
   '</div>';
 const list = new TDlist();
 expect(list.removeTask("1")).toBe(0);
});