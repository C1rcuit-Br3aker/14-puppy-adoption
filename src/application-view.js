'use strict';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`).
    then(res => res.json).
    then(data => {
      const makePuppy = new CreateFormView;
      document.querySelector(`.form`).appendChild(makePuppy);
      this.render();
    });
  }

  render() {
    const clear = document.querySelector(`.card`);
    clear.innerHTML = ``;
    const puppy = new PuppyView;
    clear.appendChild(puppy);
  }
}
