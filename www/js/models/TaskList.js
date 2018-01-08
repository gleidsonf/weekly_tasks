class TaskList {
  constructor() {
    this._tasks = [];
  }

  add(task) {
      this._tasks.push(task);
  }

  get tasks() {
    return [].concat(this._tasks);
  }
}
