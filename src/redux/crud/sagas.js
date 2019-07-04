import { call, all, put, takeEvery } from "redux-saga/effects";
import actions from './actions';
import API from '../../Api';

const api = API.create();

 function* getPostsSaga(api, payload ) {
    const { data } = payload;
    const response = yield call(api.getPosts, data)
    if (response.ok) {
        yield put(actions.loadFromApiSuccess(response.data))
    } else {
        yield put(actions.loadFromApiError())
    }
}

 function* createPostSaga(api, { payload }) {
    const { data } = payload;
    const response = yield call(api.createPost, data)
    if (response.ok) {
        yield put(actions.saveIntoApiRequest(response.data))
        alert('SAGA: Datos creados, respuesta del api: ' +
            '\nEstado: '+ JSON.stringify(response.status) +
            '\nUrl: '+ JSON.stringify(response.config.url) +
            '\nMetodo: '+ JSON.stringify(response.config.method) +
            '\nDatos creados: '+ JSON.stringify(response.data) +
            '\n\n**NOTA**: el recurso no se actualizará realmente en el servidor, pero se simulará como si.')
    } else {
        yield put(actions.saveIntoApiError())
    }
}

 function* updatePostSaga(api, { payload } ) {
    const { id } = payload;
    const response = yield call(api.updatePosts, id.id, id)
    if (response.ok) {
        yield put(actions.updateFromApiRequest(response.data))
        alert('SAGA: Datos actulizados, respuesta del api: ' +
            '\nEstado: '+ JSON.stringify(response.status) +
            '\nUrl: '+ JSON.stringify(response.config.url) +
            '\nMetodo: '+ JSON.stringify(response.config.method) +
            '\nDatos actualizados: '+ JSON.stringify(response.data) +
            '\n\n**NOTA**: el recurso no se actualizará realmente en el servidor, pero se simulará como si.')
    } else {
        yield put(actions.updateFromApiError())
    }
}

 function* deletePostSaga(api, { payload }) {
    const { id } = payload;
    const response = yield call(api.deletePosts, id)
     if (response.ok) {
        yield put(actions.deleteFromApiRequest(response.data))
         alert('SAGA: Datos eliminados, respuesta del api: ' +
             '\nEstado: '+ JSON.stringify(response.status) +
             '\nUrl: '+ JSON.stringify(response.config.url) +
             '\nMetodo: '+ JSON.stringify(response.config.method) +
             '\nDatos eliminados: '+ JSON.stringify(id) +
             '\n\n**NOTA**: el recurso no se actualizará realmente en el servidor, pero se simulará como si.')
    } else {
        yield put(actions.deleteFromApiError())
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(actions.LOAD_FROM_API, getPostsSaga, api),
        takeEvery(actions.SAVE_INTO_API, createPostSaga, api),
        takeEvery(actions.UPDATE_FROM_API, updatePostSaga, api),
        takeEvery(actions.DELETE_FROM_API, deletePostSaga, api),
    ])
}