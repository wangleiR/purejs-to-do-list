import { STATUS } from './Model';

class BarChart {
  constructor(model) {
    this.data = model.getData();
    model.on('ON_ADD', this.render.bind(this));
    model.on('ON_DELETE', this.render.bind(this));
  }

  render(container) {
    if (!this.container) {
      this.container = container;
    }
    let finshCount = 0;
    let todoCount = 0;
    let blockedCount = 0;

    this.data.forEach(item => {
        if (item.status === STATUS.TODO){
          todoCount++;
        } else if(item.status === STATUS.BLOCKED){
          blockedCount++;
        }else{
          finshCount++;
        }
    });

    const finishLabel = document.createElement("label");
    finishLabel.innerText = "finshed("+ finshCount +") ";

    const todoLabel = document.createElement("label");
    todoLabel.innerText = "to do("+ todoCount +")";

    const blockedLabel = document.createElement("label");
    blockedLabel.innerText = "blocked("+ blockedCount +")";

    this.container.innerHTML =``;

    this.container.appendChild(finishLabel);
    this.container.appendChild(todoLabel);
    this.container.appendChild(blockedLabel);
  }
}

export default BarChart;