'use strict';
import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class ApplicationView {
  constructor(el, data) {
    this.el = document.querySelector(`.card`);
    this.data = data;
    this.formView = document.querySelector(`.form`);
    this.postDog();

    this.render();
  }

  add(something) {
    this.data = [...this.data, something];

    this.render();
  }

  remove(something) {
    this.data = this.data.filter((item) => {
      return item._id !== something._id;
    });
    this.render();
  }

  postDog() {
    this.formView = new CreateFormView(this.formView, this);
  }

  render() {
    this.el.innerHTML = ``;
    this.data.forEach((mutt) => {
      const newPuppy = new PuppyView(mutt, this);
      this.el.appendChild(newPuppy.el);
    });
  }
}
