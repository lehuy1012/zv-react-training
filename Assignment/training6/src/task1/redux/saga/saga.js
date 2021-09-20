import loginSaga from './sagaLogin';
import homeSaga from './sagaHome';
import { fork } from '@redux-saga/core/effects';


function* rootSaga(){
    yield fork(loginSaga)
    yield fork(homeSaga)
}

export default rootSaga;