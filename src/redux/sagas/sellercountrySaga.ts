import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getcountrySuccess } from '../slices/sellerCountrySlice';
import { headers } from '../../../next.config';
function* workGetCatsFetch(data: any) {
    console.log(data.payload,"hyy")
    const bearer="eyJraWQiOiJrbkZJZHp2cThYU29yaHNNd0ZDWkI1SjJmVEhCUVhMMmp5RUFURTNkUWdvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJjNTA4ZTk1ZS1lODVjLTRkYzQtYjY1OC1hMDdkYmY5MGM5ZmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAubWUtc291dGgtMS5hbWF6b25hd3MuY29tXC9tZS1zb3V0aC0xX29ZYXlUNzNHOCIsImNsaWVudF9pZCI6IjJtbGJ0NzltcnBudXBrNDJlYXVrdXFzbjIyIiwib3JpZ2luX2p0aSI6IjUzYjBmMmQ3LWExODYtNGViMi1iNTQ5LWJlYTE1ZDc1YzRhMyIsImV2ZW50X2lkIjoiMWUyNTc2NzctOWYwOC00NjMwLTgxZjYtY2Q4ZDFhODY1ZmM1IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTY1OTM1OTY4MywiZXhwIjoxNjU5NDI0NDEyLCJpYXQiOjE2NTk0MjA4MTIsImp0aSI6IjE3NmFjMzc1LWYxZmMtNDQ1MC04MDhkLTAwYTMzYzJiNzg1MiIsInVzZXJuYW1lIjoiYzUwOGU5NWUtZTg1Yy00ZGM0LWI2NTgtYTA3ZGJmOTBjOWZhIn0.dMkOqbSVKJTl6eDlDcW8NVx0LPDF6-BkFINdHw4u-JjhEtvjzpz4SzI824rQHeBl8jLvTXDJBMZQHHWNRTM8l5f_tn_IgT8UTujWu36rJqKi6VjZjKTmNhU_dFG4gSaGth1gaBiSQK2RwPC0O09BsL_drIi9Su8GF9MeNlyKBwQd5Zrwk8dVlOENFFSLGWPrvYOi1e6CuQ5ezSTmaXW79qJ5qlalTMe5Y9vMW9wl_m-cJ5FymNbQFgZF2gpZN6qpef9fmyh2B8y_SJf9KdY4ObtSjZgYi17-fR3CCT51WLjxQQxdU8YzFmjRDPyxRNOUjlrDWcHwObyjlNv9Oki-pg"
    const url='http://localhost:4000/api/address/countries'
    const sellercouontry = yield call(()=>fetch(url,{
        headers:{
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    }));
    const formattedCountry = yield sellercouontry.json();
    // const formattedCatsShortened = formattedCountry.slice(0,20);
    yield put(getcountrySuccess(formattedCountry));
}


function* sellercountrySaga() {
    yield takeEvery('sellercountry/getcountryFetch', workGetCatsFetch);
}

export default sellercountrySaga;