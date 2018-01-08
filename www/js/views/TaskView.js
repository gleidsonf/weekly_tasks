class TaskView {

  constructor(element) {
    this._element = element;
  }

  update(model) {
    console.log(`#${model.day_name}`);
    document.querySelector(`#${model.day_name}`).innerHTML = this._template(model);

    // this._element.innerHTML = this._template(model);
  }

  _template(task) {
    return `
      <tr class="${task.status}">
        <td>
          <label>
            <input type="checkbox" name="${task.day}_option" value="${task.date_task}">
            <span>${DateHelper.short(task.day)}</span>
          </label>
        </td>
        <td>${task.title}</td>
        <td class="status">${task.status} <span class="hide">${task.date_task}</span></td>
      </tr>
    `
  }
}
