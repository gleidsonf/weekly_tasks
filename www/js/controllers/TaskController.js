class TaskController {
  constructor() {
    let $ = document.querySelector.bind(document); // alias
    this._dayWeek = $('[type=radio]:checked');// TODO Fixed chekbox $('[type=radio]:checked');
    this._inputTaskName = $('#taskname');
    this._taskList = new TaskList();
    this._taskWeekList = new WeekTaskList();
    this._taskView = new TaskView(document.querySelector('#container-table'));
    this._taskView.update(this._taskList);
  }

  add(event) {
    event.preventDefault();
    this._taskList.add(this._createTask());
    this._taskView.update(this._taskList);
    // alert('Ola');
    this._clearForm();
    this._taskView.returnToHome();
  }

// day_week, title, date_task
  _createTask() {
    return new Task(
      // document.querySelector('[type=radio]:checked').value,
      this._dayWeek.value,
      this._inputTaskName.value,
      new Date()
    );
  }

  _clearForm() {
    document.querySelector('form').reset();
  }
}
