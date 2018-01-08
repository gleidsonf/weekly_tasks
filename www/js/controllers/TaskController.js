class TaskController {
  constructor() {
    let $ = document.querySelector.bind(document); // alias
    this._inputTaskName = $('#taskname');
    this._dayWeek = $('[type=radio]:checked');
    this._taskList = new TaskList();
    this._taskView = new TaskView('table');
    this._taskView.update(this._taskList);
  }
}
