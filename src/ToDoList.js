import { STATUS } from './Store';

class ToDoList {
  constructor(store) {
    this.store = store;
      store.subscribe(() =>{
          console.log(store.getState());
          this.render(this.container);
      })
  }

  render(container) {
    if (!this.container) {
      this.container = container;
    }

    const rows = this.store.getState().map(item => `<input value=${item.name} />
        <select>
            <option value = ${item.status === STATUS.TODO ? 'selected' : "" }>${STATUS.TODO}</option>
            <option value = ${item.status === STATUS.FINISH ? 'selected' : "" }>${STATUS.FINISH}</option>
            <option value = ${item.status === STATUS.BLOCKED ? 'selected' : "" }>${STATUS.BLOCKED}</option>
        </select><br>`).join("");
    this.container.innerHTML = `<table>${rows}</table>`;
  }
}

export default ToDoList;