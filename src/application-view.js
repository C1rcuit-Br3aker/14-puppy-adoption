'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(el, data) {
    this.el = document.querySelector(`.card`);
    this.data = data;

    fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`).
    then((res) => res.json()).
    then((info) => {
      info.forEach((mutt) => {
        const newPuppy = new PuppyView(mutt);
        const dogs = document.querySelector(`.card`);
        dogs.appendChild(newPuppy.el);
        // this.render(dogs, mutt);
      });
    });
  }

  add(something) {
    this.data = [...this.data, something];

    this.render();
  }

  remove(something) {
    this.data = this.data.fiter((item) => {
      return item._id !== something._id;
    });
  }

  render() {
    this.el.innerHTML = ``;
    this.info.forEach((mutt) => {
      const newPuppy = new PuppyView(mutt, this);
      this.el.appendChild(newPuppy.el);
    });
  }
}
