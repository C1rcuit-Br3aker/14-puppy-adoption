'use strict';
import ApplicationView from 'application-view';

export default class PuppyView {
  constructor(el, dog) {
    this.el = el;
    this.dog = dog;
    this.render();
    this.listenForClick();
  }

  listenForClick() {
    const button = this.el.querySelector('.save');
    button.addEventListener(`click`, () => {
      const puppy = this.el.querySelectorAll(`input`).value.Object.assign();
      this.savePuppy(puppy);
    });
  }

  savePuppy() {
    fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`, { method: `POST` }).
      then(res => res.json()).
      then(data => {

        this.render();
      });
  }

  render() {
    this.dog.forEach((mutt) => {
      const thing = document.querySelector(`.card`);
      thing.innerHTML = `
      <ul class="form-info"
      <li class="puppy-form-info">
      <h4>Puppy Name</h4>
      <input type="text" class="">
      </li>
      <li class="puppy-form-info">
      <h4>Age</h4>
      <input type="text" class="">
      </li>
      <li class="puppy-form-info">
      <h4>Profile URL</h4>
      <input type="text" class="".
      </li>
      <li class="puppy-form-info">
      <h4>Profile</h4>
      <input type="text" class="">
      </li>
      </ul>
      <button class="save">Save</button>
      `;
    });
  }
}
