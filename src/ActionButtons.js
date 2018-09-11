import {STATUS} from "./Store";
import  { addItem,deleteItem } from './Action';

class ActionButtons {
  constructor(store) {
      this.store = store;
  }

  render(container) {

    const addButton = document.createElement("button");
    addButton.innerText = 'ADD';
    container.appendChild(addButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'DELETE';
    container.appendChild(deleteButton);

    addButton.addEventListener('click',() => {
      this.store.dispatch(addItem('Meeting4',STATUS.FINISH));
    });

    deleteButton.addEventListener('click',() => {
      this.store.dispatch(deleteItem("Meeting4"));
    });

  }
}

export default ActionButtons;