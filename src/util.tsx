import { LocalStorage } from "ttl-localstorage";
import { isIE } from "react-device-detect";

import "isomorphic-fetch";

function support_format_webp(): boolean {
  var elem = document.createElement("canvas");

  if (!!(elem.getContext && elem.getContext("2d"))) {
    // was able or not to get WebP representation
    return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
  } else {
    // very old browser like IE 8, canvas not supported
    return false;
  }
}

/*
The MIT License (MIT)
Copyright (c) 2016 David Gomez-Urquiza
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function dataURItoBlob(dataURI: string) {
  // convert base64 to raw binary data held in a string
  var byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to an ArrayBuffer
  var arrayBuffer = new ArrayBuffer(byteString.length);
  var _ia = new Uint8Array(arrayBuffer);
  for (var i = 0; i < byteString.length; i++) {
    _ia[i] = byteString.charCodeAt(i);
  }

  var dataView = new DataView(arrayBuffer);
  var blob = new Blob([dataView], { type: mimeString });
  return blob;
}

function fetchImageFromCache(id: string): string {
  const cachedImage = LocalStorage.get(id);

  if (cachedImage) {
    // IE11 doesn't like creating blobs from data URIs, so we just use the data URI
    return isIE ? cachedImage : URL.createObjectURL(dataURItoBlob(cachedImage));
  } else {
    return "";
  }
}

async function getJSON(url: string): Promise<any> {
  return fetch(url)
    .then((response) => response.json())
    .then((jRes) => {
      return jRes;
    });
}

function createBlobFromImage(
  url: string,
  id?: string,
  ttl?: number
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fetch(url)
      .then((response) => response.blob())
      .then((imageBlob) => {
        // Create a URI pointing to the blob
        const imageObjectURL = URL.createObjectURL(imageBlob);

        // Cache the image in local storage
        if (typeof id !== "undefined" && typeof ttl !== "undefined") {
          const reader = new FileReader();

          reader.onload = (event) => {
            LocalStorage.put(id, event.target?.result, ttl);
          };

          reader.readAsDataURL(imageBlob);
        }
        resolve(imageObjectURL);
      });
  });
}

export {
  createBlobFromImage,
  dataURItoBlob,
  fetchImageFromCache,
  getJSON,
  support_format_webp,
};
