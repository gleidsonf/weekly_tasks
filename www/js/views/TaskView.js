class TaskView {

  constructor(element) {
    this._element = element;
  }

  update(model) {
    // console.log(`#${model.day_name}`);
    // if(model) {
    //   document.querySelector(`#${model.day_name}`).innerHTML = this._template(model);
    // }

    this._element.innerHTML = this._template(model);
  }

  _template(model) {
    // TODO Criar tabela e inserir numa div
    return `
    <table>
      <thead>
        <th>Day</th>
        <th>Task</th>
        <th>Status</th>
      </thead>
      ${
        model.weekDays.forEach(function(value, key) {
          console.log(value);
          return `
          <tbody id="#${DateHelper.dayName(key)}">
            ${
              value.map(n => {
                return `
                <tr class="${n.status}">
                <td>
                <label>
                <input type="checkbox" name="${model.day}_option" value="${model.date_task}">
                <span>${DateHelper.short(model.day)}</span>
                </label>
                </td>
                <td>${model.title}</td>
                <td class="status">${model.status} <span class="hide">${model.date_task}</span></td>
                </tr>

                `
              })
            }
            </tbody>
          `
        })
      }
    </table>
    `
  }
}
