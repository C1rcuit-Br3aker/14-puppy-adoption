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
      const dogs = document.querySelector('.card')
      const newPuppy = new PuppyView(dogs, data);
      this.render(dogs, data);
    });
  }

  add(something) {

  }

  render(dogs, data) {
    debugger;
    dogs.innerHTML = ``;
    data.forEach(() => {
      const dog = new PuppyView(dogs, data);
      dogs.appendChild(dog);
    });
  }
}
