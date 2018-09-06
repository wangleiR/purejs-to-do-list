import {STATUS} from "./Model";

class ActionButtons {
  constructor(model) {
      this.model = model;
  }

  render(container) {

    const addButton = document.createElement("button");
    addButton.innerText = 'ADD';
    container.appendChild(addButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = 'DELETE';
    container.appendChild(deleteButton);

    addButton.addEventListener('click',() => {
      this.model.appendData({name: 'Meeting4', status: STATUS.FINISH} );
    });

    deleteButton.addEventListener('click',() => {
      this.model.deleteData();
    });

  }
}

export default ActionButtons;