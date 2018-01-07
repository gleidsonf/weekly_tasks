String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}


// let instance = M.Tabs.init(document.querySelector('.tabs'), {
//     duration: 500
// })
//
// let elem = document.querySelector('.modal');
// let instanceModal = M.Modal.init(elem, {
//     opacity: 0.5,
//     onCloseEnd: function() {
//       document.querySelector('form').reset();
//     }
// })

var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, {});



let week = [
  [1, 'sunday'],
  [2, 'monday'],
  [3, 'tuesday'],
  [4, 'wednesday'],
  [5, 'thursday'],
  [6, 'friday'],
  [7, 'saturday']
];
let weekMap = new Map(week);

let action = document.querySelector('.modal-action');

action.addEventListener('click', function() {
  let taskName = document.querySelector('#taskname');
  let day_week = document.querySelector('[type=radio]:checked');
  configureCheckbox(taskName, day_week);
  document.querySelector('form').reset();
  let week = document.querySelector('#week');
  week.setAttribute('class', 'container');
  document.querySelector('#taskform').setAttribute('class', 'hide');
  instance.close();

});

let newtask = document.querySelector('#newtask');

newtask.addEventListener('click', function() {
  let week = document.querySelector('#week');
  week.setAttribute('class', 'hide');
  document.querySelector('#taskform').setAttribute('class', 'container');
  instance.close();
});

let back_to_week = document.querySelector('#back_week');
back_to_week.addEventListener('click', function() {
  document.querySelector('#taskform').setAttribute('class', 'hide');
  document.querySelector('#week').setAttribute('class', 'container');
});

function dateToStatus(date) {
  current_date = new Date().toLocaleDateString();
  if (date == current_date) {
    return 'Today';
  } else if (date < current_date) {
    return 'Overdue';
  }
  return 'Afterwards';
}

function short(day_name) {
  return day_name.capitalize().substring(0, 3);
}

configureCheckbox = function(taskName, day_week) {

  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let label = document.createElement('label');
  let input = document.createElement('input');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let day_name = weekMap.get(parseInt(day_week.value));

  input.setAttribute('type', 'checkbox');
  span1.textContent = short(day_name);
  label.appendChild(input);
  label.appendChild(span1);
  td1.appendChild(label);

  td2.textContent = taskName.value;

  span2.textContent = new Date().toLocaleDateString();
  span2.setAttribute('class', 'hide');
  td3.textContent = dateToStatus(span2.textContent);
  td3.appendChild(span2);
  td3.setAttribute('class', 'status');

  tr.setAttribute('class', 'today');
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  let list = document.querySelector(`#${day_name}`);

  list.appendChild(tr);



};
