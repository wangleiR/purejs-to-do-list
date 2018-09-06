const Model = class {
    constructor() {
       this.listeners = {
        'ON_ADD': [],
        'ON_DELETE':[],
       };

        this.data = [
            {name: 'Meeting1', status: STATUS.FINISH},
            {name: 'Meeting2', status: STATUS.TODO},
            {name: 'Meeting3', status: STATUS.BLOCKED}
        ]
    }

    getData() {
      return this.data;
    }

    appendData(data) {
      this.data.push(data);
      this.trigger('ON_ADD');
    }

    deleteData(){
      this.data.pop();
      this.trigger('ON_DELETE');
    }

    on(eventName, callback) {
        this.listeners[eventName].push(callback);
    }

    trigger(eventName) {
      this.listeners[eventName].forEach(callback => callback());
    }
};

const STATUS = {
    FINISH : 'Finsh',
    TODO :'Todo',
    BLOCKED: 'Blocked'
};


export {
    Model,
  STATUS
};