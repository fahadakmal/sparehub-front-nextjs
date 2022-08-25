import { spawn, all, takeEvery, put } from 'redux-saga/effects';
import { apiGet } from '../../services/index';
import { getCountriesListError, getCountriesListRequest, getCountriesListSuccess, getCountryStatesListError, getCountryStatesListRequest, getCountryStatesListSuccess, getStateCitiesListError, getStateCitiesListRequest, getStateCitiesListSuccess } from '../slices/addressSlice';

type response = {
  data:any,
  error: string;
  message: string;
  statusCode: number;
};

function* getAllCountries(action) {
  try {
    const response: response = yield apiGet('/address/countries',action.payload);
    if (response.error) {
      yield put(getCountriesListError());
    } else {
      yield put(getCountriesListSuccess(response?.data.map((item)=>{
        return {
            id:item.id,
            name:item.countryName
        }
      })
        
        
        ));
    }
  } catch (error: any) {
    yield put(getCountriesListError());
  }
}

function* getCountryByState(action: any) {
  try {
    const response: response = yield apiGet(`/address/${action.payload.id}/states`, action.payload.token);
    if (response.error) {
      yield put(getCountryStatesListError());
    } else {
      yield put(getCountryStatesListSuccess(response.data.map((item)=>{
        return {
            id:item.id,
            name:item.stateName
        }
      })))
    }
  } catch (error: any) {
    yield put(getCountryStatesListError());
  }
}

function* getCitiesByState(action: any) {
    try {
      const response: response = yield apiGet(`/address/${action.payload.id}/cities`, action.payload.token);
      if (response.error) {
        yield put(getStateCitiesListError());
      } else {
        yield put(getStateCitiesListSuccess(response.data.map((item)=>{
          return {
              id:item.id,
              name:item.cityName
          }
        })))
      }
    } catch (error: any) {
      yield put(getStateCitiesListError());
    }
  }



function* getCountriesList() {
  yield takeEvery(getCountriesListRequest.type, getAllCountries);
}

function* getCountryStates() {
  yield takeEvery(getCountryStatesListRequest.type, getCountryByState);
}


function* getStateCities() {
    yield takeEvery(getStateCitiesListRequest.type, getCitiesByState);
  }



export default function* rootSaga() {
  yield all([spawn(getCountriesList),spawn(getCountryStates),spawn(getStateCities)]);
}
