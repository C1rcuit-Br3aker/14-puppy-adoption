'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(el, data) {
    this.el = document.querySelector('.form');
    this.data = data;
    this.goFetch();
  }

  goFetch() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`).
    then((res) => res.json()).
    then((data) => {
      const card = document.querySelector('.card')
      const newPuppy = new CreateFormView(card, data);
      debugger;
      // this.render();
    });
  }

  add(something) {

  }

  render() {
    const clear = document.querySelector(`.card`);
    clear.innerHTML = ``;
    this.data.forEach(() => {
      const dog = new PuppyView;
      clear.appendChild(dog);
    });
  }
}
