class WeekTaskList {
  constructor() {
    this._week_days = [
      [1, []],
      [2, []],
      [3, []],
      [4, []],
      [5, []],
      [6, []],
      [7, []]
    ];

    this._map = new Map(this._week_days);
  }

  add(task) {
    this._map.get(task.dayID).push(task);
      // this._list.push(task_list);
  }

  get weekDays() {
    return this._map;
  }

  tasks(day) {
    return [].concat(this._map.get(day));
  }
}


// Uma DayList tem 7 elementos correspondentes aos dias da semana
// E cada TaskList tem infinitas tarefas.
