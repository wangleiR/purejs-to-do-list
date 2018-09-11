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

    const rows = this.data.map(item => `<input value=${item.name} />
        <select>
            <option value = ${item.status === STATUS.TODO ? 'selected' : "" }>${STATUS.TODO}</option>
            <option value = ${item.status === STATUS.FINISH ? 'selected' : "" }>${STATUS.FINISH}</option>
            <option value = ${item.status === STATUS.BLOCKED ? 'selected' : "" }>${STATUS.BLOCKED}</option>
        </select><br>`).join("");
    this.container.innerHTML = `<table>${rows}</table>`;
  }
}

export default ToDoList;