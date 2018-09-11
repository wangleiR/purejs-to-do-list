import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import  { Reducer }  from './Store';
import {createStore} from "redux";

const startup = () => {
  const reducer = createStore(Reducer);
  new ActionButtons(reducer).render(document.getElementById('action-buttons'));
  new BarChart(reducer).render(document.getElementById('bar-chart'));
  new ToDoList(reducer).render(document.getElementById('to-do-list'));
};

startup();