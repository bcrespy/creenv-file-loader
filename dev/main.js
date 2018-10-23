import FileLoader from "../lib/index";

let file;

FileLoader("filetest.txt").then((filedata) => {
  file = filedata;
  console.log(filedata);
}).catch((err) => {
  console.error(err);
});