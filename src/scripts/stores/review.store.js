import { EventEmitter } from "../utils/eventEmmiter";

class ReviewStore extends EventEmitter {
  constructor() {
    super();
    this._list = [];
    this._url = './backend/Review.txt';
  }

  getList(onError) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', this._url);
    xhr.send();

    xhr.addEventListener('readystatechange',() => {
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

const reviewStore = new ReviewStore();

export { reviewStore };