/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * A simple file loader method, will maybe be later bundled into a larger module, but right now it stands for
 * itself
 **/

 /**
  * Load a file, returns a promise which resolves with file as parameter
  * 
  * @param {string} filepath path to the file
  * @param {?string} responseType the type of response expected (default = text)
  * 
  * @return {Promise}
  */
function FileLoader (filepath, responseType = "text") {
  return new Promise( (resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.open( "GET", filepath, true );
    xhr.onloadend = () => {
      if( xhr.status == 404 ) 
        reject( xhr.statusText );
      else 
        resolve( xhr.response );
    }
    xhr.send();
  });
}

export default FileLoader;