import { useTranslation } from 'react-i18next';
const translate = (key: string) => {
  const { t } = useTranslation();
  return t(key);
};

export { translate };

export function validateEmail(email: any) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}


// export const dataUrlToFile = (url: string, fileName: string) => {
//   console.log(url)
//   const [mediaType, data] = url.split(",");

// //   // separate out the mime component
//    var mime = url.split(',')[0].split(':')[1].split(';')[0];
//   console.log(mime)
//   // mediaType.match(/:(.*?);/)?.[0];

//   var n = data.length;

//   const arr = new Uint8Array(n);

//   while (n--) {
//     arr[n] = data.charCodeAt(n);
//   }

//   return new File([arr], fileName, { type: mime });
// };




export const dataUrlToFile = (dataURI,name) => {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  return new File([blob], name);
}
