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
      data.forEach((mutt) => {
        const newPuppy = new PuppyView(mutt);
        const dogs = document.querySelector(`.card`);
        dogs.appendChild(newPuppy.el);
      });
      // this.render(dogs, data);
    });
  }

  // add(something) {
  //
  // }

//   render(dogs, data) {
//     dogs.innerHTML = ``;
//     data.forEach(() => {
//       const dog = new PuppyView(dogs, data);
//       dogs.appendChild(dog);
//     });
//   }
}
