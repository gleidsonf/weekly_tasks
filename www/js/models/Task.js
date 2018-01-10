class Task {

  constructor(day_week, title, date_task) {
      this._dayID = parseInt(day_week);
      this._day_name = DateHelper.dayName(day_week);
      this._title = title;
      this._status; // TODO chamar funcao que retorna um status apropriado
      this._date_task = new Date(date_task).toLocaleDateString();
  }

  get day_name() {
    return this._day_name;
  }

  get dayID() {
    return this._dayID;
  }

  get title() {
    return this._title;
  }

  get status() {
    return this._status;
  }

  get date_task() {
    return this._date_task;
  }



}
