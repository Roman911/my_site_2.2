import { EventEmitter } from '../utils/eventEmmiter';

class PhotoStore extends EventEmitter {
  constructor() {
    super();
    this._list = [];
    if (window.matchMedia("(max-width: 768px)").matches) {
      this._url = './json/photo_m.json';
    } else {
      this._url = './json/photo.json';
    }
  }

  getList(onError) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', this._url);
    xhr.send();

    xhr.addEventListener('readystatechange',() => {
      console.log(xhr.readyState);
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          this._list = JSON.parse(xhr.response);
          this.publish('dataChanged', this._list);
        } else {
          onError(xhr.status);
        }
      }
    });
  }
}

const photoStore = new PhotoStore();

export { photoStore };