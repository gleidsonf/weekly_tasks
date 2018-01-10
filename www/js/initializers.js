// let instance = M.Tabs.init(document.querySelector('.tabs'), {
//     duration: 500
// })

// let elem = document.querySelector('.modal');
// let instanceModal = M.Modal.init(elem, {
//     opacity: 0.5,
//     onCloseEnd: function() {
//       document.querySelector('form').reset();
//     }
// });

var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {});

let newtask = document.querySelector('#newtask');

newtask.addEventListener('click', function() {
  let week = document.querySelector('#week');
  week.setAttribute('class', 'hide');
  document.querySelector('#taskform').setAttribute('class', 'container');
  instance.close();
});


// document.addEventListener('DOMContentLoaded',() => {
//   let taskController = new TaskController();
//   document.querySelector('form').addEventListener('submit', event => {taskController.add(event)})
// });
