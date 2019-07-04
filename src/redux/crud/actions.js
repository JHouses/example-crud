const crudActions = {
    LOAD_FROM_API: 'LOAD_FROM_API',
    LOAD_FROM_API_SUCCESS: 'LOAD_FROM_API_SUCCESS',
    LOAD_FROM_API_ERROR: 'LOAD_FROM_API_ERROR',

    SAVE_INTO_API_REQUEST: 'SAVE_INTO_API_REQUEST',
    SAVE_INTO_API: 'SAVE_INTO_API',
    SAVE_INTO_API_ERROR: 'SAVE_INTO_API_ERROR',

    UPDATE_FROM_API_REQUEST: 'UPDATE_FROM_API_REQUEST',
    UPDATE_FROM_API: 'UPDATE_FROM_API',
    UPDATE_FROM_API_ERROR: 'UPDATE_FROM_API_ERROR',

    DELETE_FROM_API_REQUEST: 'DELETE_FROM_API_REQUEST',
    DELETE_FROM_API: 'DELETE_FROM_API',
    DELETE_FROM_API_ERROR: 'DELETE_FROM_API_ERROR',

    loadFromApi: () => {
        return { type: crudActions.LOAD_FROM_API };
    },
    loadFromApiSuccess: data => ({
        type: crudActions.LOAD_FROM_API_SUCCESS,
        payload: { data }
    }),
    loadFromApiError: error => ({
        type: crudActions.LOAD_FROM_API_ERROR,
        payload: { error }
    }),

    saveIntoApiRequest: () => {
        return { type: crudActions.SAVE_INTO_API_REQUEST };
    },
    saveIntoApi: data => ({
       type: crudActions.SAVE_INTO_API,
       payload: { data }
    }),
    saveIntoApiError: error => ({
       type: crudActions.SAVE_INTO_API_ERROR,
       payload: { error }
    }),

    updateFromApiRequest: () => {
        return { type: crudActions.UPDATE_FROM_API_REQUEST };
    },
    updateFromApi: ( id, data )=> ({
        type: crudActions.UPDATE_FROM_API,
        payload: { id, data }
    }),
    updateFromApiError: error => ({
        type: crudActions.UPDATE_FROM_API_ERROR,
        payload: { error }
    }),

    deleteFromApiRequest: () => {
        return { type: crudActions.DELETE_FROM_API_REQUEST };
    },
    deleteFromApi: id => ({
        type: crudActions.DELETE_FROM_API,
        payload: { id }
    }),
    deleteFromApiError: error => ({
        type: crudActions.DELETE_FROM_API_ERROR,
        payload: { error }
    })
};

export default crudActions