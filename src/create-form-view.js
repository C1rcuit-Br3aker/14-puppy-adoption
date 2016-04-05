'use strict';

export default class CreateFormView {
  constructor(data, application) {
    this.data = data;
    this.application = application;

    document.querySelector(`.form`).addEventListener(`submit`, (ev) => {
      ev.preventDefault();
      const formData = {
        name: document.querySelector(`.new-puppy-name`).value,
        age: document.querySelector(`.new-puppy-age`).value,
        photoUrl: document.querySelector(`.new-puppy-pic`).value,
        profile: document.querySelector(`.new-puppy-info`).value,
      };
      fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(formData),
      }).then(res => res.json())
      .then((info) => {
        document.querySelector(`.new-puppy-name`).value = ``;
        document.querySelector(`.new-puppy-age`).value = ``;
        document.querySelector(`.new-puppy-pic`).value = ``;
        document.querySelector(`.new-puppy-info`).value = ``;
        this.application.add(info);
      });
    });

    this.drop = document.querySelector(`.dropdown-button`);
    this.drop.addEventListener(`click`, () => {
      document.querySelector(`.form`).classList.toggle(`-active`);
    });
  }
}
