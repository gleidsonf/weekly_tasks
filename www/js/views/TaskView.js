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

  returnToHome() {
    let week = document.querySelector('#week');
    week.setAttribute('class', 'container');
    document.querySelector('#taskform').setAttribute('class', 'hide');
  }

  _template(model) {
    return `
    <table>
      <thead>
        <th>Day</th>
        <th>Task</th>
        <th>Status</th>
      </thead>
      <tbody>
      ${model.tasks.map(n => {
        return `
        <tr class="${n.status}">
          <td>
          <label>
          <input type="checkbox" name="${n.day}_option" value="${n.date_task}">
          <span>${DateHelper.short(n.day)}</span>
          </label>
          </td>
          <td>${n.title}</td>
          <td class="status">${model.status} <span class="hide">${model.date_task}</span></td>
        </tr>
        `
      })}
      </tbody>
    </table>
    `
  }
    /**_template(model) {
    // TODO Criar tabela e inserir numa div
    console.log('template chamado')
    <table>
    <thead>
    <th>Day</th>
    <th>Task</th>
    <th>Status</th>
    </thead>
    return `
      ${
        model._map.forEach(function(value, key) {
          console.log("Valor: " + value);
          return `
          <h2>Teste</h2>;;
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
  } */
}
