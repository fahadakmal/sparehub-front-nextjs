import { spawn, all, takeEvery, put } from 'redux-saga/effects';
import { apiGet, apiPost } from '../../services/index';
import {
  getDocumentTypesError,
  getDocumentTypesRequest,
  getDocumentTypesSuccess,
  saveDraftError,
  saveDraftRequest,
  saveDraftSuccess,
  uploadFileRequest,
  uploadFileSuccess,
  uploadFileError,
  getSellerCompanyInfoRequest,
  getSellerCompanyInfoError,
  getSellerCompanyInfoSuccess,
} from '../slices/sellerSlice';

type response = {
  data: any;
  error: string;
  message: string;
  statusCode: number;
};

function* fetchSellerApplication(action) {
  try {
    const response: response = yield apiGet('/company', action.payload);
    if (response.error) {
      yield put(getSellerCompanyInfoError(response.error));
    } else {
      console.log(response.data)
      yield put(getSellerCompanyInfoSuccess(response.data));
    }
  } catch (error) {
    yield put(getSellerCompanyInfoError(error));
  }
}

function* saveApplicationAsDraft(action) {
  const { token, data } = action.payload;
  try {
    const response: response = yield apiPost('/company', data, token);
    if (response.error) {
      yield put(saveDraftError(response.error));
    } else {
      console.log("success")
    }
  } catch (error) {
    yield put(saveDraftError(error));
  }
}

function* fetchDocumentTypes(action) {
  try {
    const response: response = yield apiGet('/documentType', action.payload);
    if (response.error) {
      yield put(getDocumentTypesError(response.error));
    } else {
      yield put(
        getDocumentTypesSuccess(
          response?.data.map((item) => {
            return {
              id: item.id,
              name: item.documentName,
            };
          }),
        ),
      );
    }
  } catch (error) {
    yield put(getDocumentTypesError(error));
  }
}

function* uploadFile(action) {
  const { token, data } = action.payload;
  const formData = new FormData();
  formData.append('file', data);
  try {
    const response: response = yield apiPost('/upload', formData, token);
    if (response.error) {
      yield put(uploadFileError(response.error));
    } else {
      yield put(uploadFileSuccess(response.data))
    }
  } catch (error) {
    yield put(uploadFileError(error));
  }
}

function* saveSellerDraft() {
  yield takeEvery(saveDraftRequest.type, saveApplicationAsDraft);
}
function* getDocumentTypes() {
  yield takeEvery(getDocumentTypesRequest.type, fetchDocumentTypes);
}
function* uploadSellerFiles() {
  yield takeEvery(uploadFileRequest.type, uploadFile);
}

function* getSellerCompanyInfo() {
  yield takeEvery(getSellerCompanyInfoRequest.type, fetchSellerApplication);
}

export default function* rootSaga() {
  yield all([spawn(saveSellerDraft), spawn(getDocumentTypes), spawn(uploadSellerFiles), spawn(getSellerCompanyInfo)]);
}
