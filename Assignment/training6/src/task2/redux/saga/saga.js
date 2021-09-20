import { fork } from '@redux-saga/core/effects';
import sagaTask from './sagaTask';
import sagaStatus from './sagaStatus';


function* rootSaga(){
    yield fork(sagaTask);
    yield fork(sagaStatus);
}

export default rootSaga;