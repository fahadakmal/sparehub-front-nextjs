import { spawn, all, takeEvery, put } from 'redux-saga/effects';
import { apiGet, apiPost } from '../../services/index';
import { saveDraftError, saveDraftRequest, saveDraftSuccess } from '../slices/sellerSlice';

type response = {
  data:any,
  error: string;
  message: string;
  statusCode: number;
};

function* getAllCountries(action) {
  try {
    const response: response = yield apiPost('/address/countries',action.payload,{});
    if (response.error) {
      yield put(saveDraftError(response.error));
    } else {
      yield put(saveDraftSuccess(response?.data.map((item)=>{
        return {
            id:item.id,
            name:item.countryName
        }
      })
        
        
        ));
    }
  } catch (error: any) {
    yield put(saveDraftError(error));
  }
}




function* saveSellerDraft() {
  yield takeEvery(saveDraftRequest.type, getAllCountries);
}



export default function* rootSaga() {
  yield all([spawn(saveSellerDraft)]);
}
