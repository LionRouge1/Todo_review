const displayList = (TList,id) => {
  const li =document.createElement('li');
  li.className = 'task';
  li.innerHTML = `<input type="text" class="description" id="${id}" value="task">`;
  TList.appendChild(li);
}
export default displayList;