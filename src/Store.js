const STATUS = {
    FINISH : 'Finsh',
    TODO :'Todo',
    BLOCKED: 'Blocked'
};

const initState = [
    {name: 'Meeting1', status: STATUS.FINISH},
    {name: 'Meeting2', status: STATUS.TODO},
    {name: 'Meeting3', status: STATUS.BLOCKED}
];

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ON_ADD':
            return [
                ...state,
                {
                    name: action.name,
                    status: STATUS.TODO
                }
            ];
        case 'ON_DELETE':
            return state.filter(item =>
                item.name !== action.name
            );
        default:
            return state;
    }
};

export {
    STATUS,
    Reducer
};