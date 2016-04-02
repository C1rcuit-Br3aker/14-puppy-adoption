'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(el, data) {
    this.el = document.querySelector(`.card`);
    this.data = data;
    this.formView = document.querySelector(`.form`);
    this.postDog();

    fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`).
    then((res) => res.json()).
    then((info) => { debugger;
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

  postDog() {
    this.formView = new CreateFormView(this.formView, this);
  }

  render() {
    this.el.innerHTML = ``;
    this.info.forEach((mutt) => {
      const newPuppy = new PuppyView(mutt, this);
      this.el.appendChild(newPuppy.el);
    });
  }
}
