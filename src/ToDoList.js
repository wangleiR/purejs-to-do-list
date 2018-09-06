import { STATUS } from './Model';

class ToDoList {
  constructor(model) {
    this.data = model.getData();
    model.on('ON_ADD', this.render.bind(this));
    model.on('ON_DELETE', this.render.bind(this));
  }

  render(container) {
    if (!this.container) {
      this.container = container;
    }

    const selectOptions = this.data.map(item => {
        Object.keys(STATUS).forEach(it => {
          if (STATUS[it] == item.status) {

          }
        })
    });
    
    const rows = this.data.map(item => `<tr><td>${item.name}</td><td>
        <select>
            <option selected>${item.status}</option>
            <option>${STATUS.TODO}</option>
            <option>${STATUS.FINISH}</option>
            <option>${STATUS.BLOCKED}</option>
        </select>
        </td></tr>`);
    this.container.innerHTML = `<table>${rows}</table>`;
  }
}

export default ToDoList;