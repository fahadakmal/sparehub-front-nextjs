import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getcountrySuccess } from '../slices/sellerCountrySlice';
import { headers } from '../../../next.config';
function* fetchCountries(data: any) {
//   const token = localStorage.getItem('auth');
  console.log(data.payload, 'hyy');
//   console.log(token,"token")
  const bearer =
    'Bearer eyJraWQiOiJtNEdaZDgyeHJSVFdiT0VwN1U1cjZUNmZrMzFiT1Erd09jRDNtTkRIVDg4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzMDMxZDM4Ny0xYmE1LTRlOGQtYWE2ZC0wNjdhMWMwMDM0YWUiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAubWUtc291dGgtMS5hbWF6b25hd3MuY29tXC9tZS1zb3V0aC0xX0JRQzN5RFdNeiIsImNsaWVudF9pZCI6IjF1NjFycmVvMW4za2RycDEwZXV0aGtrdmNyIiwib3JpZ2luX2p0aSI6IjUyODdjNzAyLTY4Y2MtNDYyMC1iMTg2LTYxNTZhNDI0MjA0NSIsImV2ZW50X2lkIjoiOTY3Njg4Y2EtNzgxYS00M2VjLTgzNWQtNGMzNWEzMzQwYTQ5IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1OTY5MzM1MSwiZXhwIjoxNjU5Njk2OTUxLCJpYXQiOjE2NTk2OTMzNTEsImp0aSI6IjAxNGEzYmU0LWIxN2UtNGVlMC1iYmVhLWU3MjU4YWE4MDViZSIsInVzZXJuYW1lIjoiMzAzMWQzODctMWJhNS00ZThkLWFhNmQtMDY3YTFjMDAzNGFlIn0.tH670xo1mxaoKfdPLHUTFI0tLs5niQstWoLW31vSRmhUBexXVeochlJa9hZi7O_C1SgB3qN3I3BXQfdgZzFyvKlalpXczixMs9Ari7uP3RUCByHEV9iGpFuvSdwOHGzwAAr8erwQ4MvOxFCexkzpVbDuw0lS1pjxgu6wJhfXYwAQVkdYYeSA7In1pix5NY_-_KFqOaTqT84htOE1NSO6VlxtuGa6vIdEh0fiElrJfIgb0hmIPgOpmb-ZxvDfGgmovvPWJMEj6G-B5ZHqkidl1hRokBG3-KJaHc1wUoSF1x8D7EPtkQ8C_Y86oftt_MfobIiRXN6kK0Is0UlO7zdkWQ';
  const url = 'http://localhost:4000/api/address/countries';
  const sellercouontry = yield call(() =>
    fetch(url, {
      headers: {
        Authorization: bearer,
        type: 'Bearer',
      },
    }),
  );
  const formattedCountry = yield sellercouontry.json();
  // const formattedCatsShortened = formattedCountry.slice(0,20);
  yield put(getcountrySuccess(formattedCountry));
}

function* sellercountrySaga() {
  yield takeEvery('sellercountry/getcountryFetch', fetchCountries);
}

export default sellercountrySaga;
