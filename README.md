# @creenv/loader 

A tiny file loader 

```js
import FileLoader from "@creenv/file-loader";

let file;

FileLoader("/path/to/my/file").then((filedata) => {
  file = filedata;
  console.log(filedata);
}).catch((err) => {
  console.error(err);
});
```

## *function* Fileloader (**filepath**: *string*, **responseType**: *string)

| argument | type | default | what for ? |
| --- | --- | --- | --- |
| **filepath** | *string* | | the path to the file, relative to the script or to the server root depending on which case suits the best for you |
| **responseType** | *string* | | the type of response expected, cf: the type of the file requested. A list of valid responseType is available under the [XHTML Media Types - Second Edition](https://www.w3.org/TR/xhtml-media-types/) page.

