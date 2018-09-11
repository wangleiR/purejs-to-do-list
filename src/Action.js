

const addItem = (name, status) => ({ type: 'ON_ADD', name, status });
const deleteItem = name => ({ type: 'ON_DELETE', name });


export  {
    addItem,
    deleteItem
}