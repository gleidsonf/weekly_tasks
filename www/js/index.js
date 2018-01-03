let instance = M.Tabs.init(document.querySelector('.tabs'), {
    duration: 500
})

let elem = document.querySelector('.modal');
let instanceModal = M.Modal.init(elem, {
    opacity: 0.5
})

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
    console.log(taskName.value);
    document.querySelector('#taskname').textContent = '';
    document.getElementsByName('week')[0].checked=true
});


configureCheckbox = function(taskName, day_week) {
  let day_name = weekMap.get(parseInt(day_week.value));
  let divDay = document.getElementById(day_name);
  let label = document.createElement('label');
  let input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'filled-in');
  input.setAttribute('name', day_name + '_option');
  let span = document.createElement('span');
  span.textContent = taskName.value;
  label.appendChild(input);
  label.appendChild(span);
  divDay.appendChild(label);

};
