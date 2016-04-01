'use strict';
import ApplicationView from 'application-view';

export default class PuppyView {
  constructor(el, dog) {
    debugger;
    this.el = el;
    this.dog = dog;
    this.render(el, dog);
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

  render(el, dog) {
    this.dog.forEach((mutt) => {
      const thing = document.querySelector(`.card`);
      thing.innerHTML = `
      <div class="profile-image">
      <img src="${mutt.photoUrl}"</div>
      <div class="profile-card">
      <ul class="card-info">
      <li class="puppy-card-info">
      <h4 class="puppy-info">${mutt.name}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${mutt.age}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${mutt.photoUrl}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${mutt.profile}</h4>
      </li>
      </ul>
      <button class="delete">Delete</button>
      <button class="update">Update</button>
      </div>
      `;
    });
  }
}
