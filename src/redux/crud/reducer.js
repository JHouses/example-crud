import crudActions from './actions';

const initState = {
    isLoading: false,
    errorMessage: false,
    data: {},
    specificData: {
        userId: null,
        id: null,
        title: '',
        body: ''
    }
};

export default  function reducer(state = initState, { type, payload }) {
    switch (type) {
        case crudActions.LOAD_FROM_API:
            return {
                ...state,
                isLoading: true,
                errorMessage: false
            };
        case crudActions.DELETE_FROM_API_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: false
            };
        case crudActions.UPDATE_FROM_API_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: false
            };
        case crudActions.SAVE_INTO_API_REQUEST:
            return {
                ...state,
                isLoading: true,
                errorMessage: false
            };
        case crudActions.LOAD_FROM_API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                errorMessage: false
            };
        case crudActions.LOAD_FROM_API_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'There is a loading problem'
            };

        case crudActions.SAVE_INTO_API:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                error: false
            };
        case crudActions.SAVE_INTO_API_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'The connection with the api is failed'
            };
        case crudActions.UPDATE_FROM_API:
            return {
                ...state,
                isLoading: false,
                error: false,
                data: payload.id === null ? initState.data : payload.id
            };
        case crudActions.UPDATE_FROM_API_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Not is posible update the record'
            };
        case crudActions.DELETE_FROM_API:
            return {
                ...state,
                isLoading: false,
                error: false,
                id: payload
            };
        case crudActions.DELETE_FROM_API_ERROR:
            return {
                ...state,
                isLoading: false,
                error: 'Not is posible delete the record'
            }
        default:
            return state;
    }
}