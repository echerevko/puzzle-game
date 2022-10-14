function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function importAll(r) {
  return r.keys().map(r);
}

function dragStart2(r) {
  r = this;
  return r; //this refers to image that was clicked on for dragging
}

export { dragOver, dragEnter, dragLeave, importAll, dragStart2 };
