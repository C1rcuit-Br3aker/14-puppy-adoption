'use strict';
import ApplicationView from 'application-view';

export default class PuppyView {
  constructor(puppy) { debugger;
    this.el = document.createElement(`div`);
    this.puppy = puppy;
    this.render();
    // this.listenForClick();
  }

  // listenForClick() {
  //   const button = this.el.querySelector('.save');
  //   button.addEventListener(`click`, () => {
  //     const puppy = this.el.querySelectorAll(`input`).value.Object.assign();
  //     this.savePuppy(puppy);
  //   });
  // }

  // savePuppy() {
  //   fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`, { method: `POST` }).
  //     then(res => res.json()).
  //     then(data => {
  //
  //       this.render();
  //     });
  // }

  render() {
    this.el.innerHTML = `
      <div class="profile-image">
      <img src="${this.puppy.photoUrl}"></div>
      <div class="profile-card">
      <ul class="card-info">
      <li class="puppy-card-info">
      <h4 class="puppy-info">${this.puppy.name}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${this.puppy.age}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${this.puppy.photoUrl}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${this.puppy.profile}</h4>
      </li>
      </ul>
      <button class="delete">Delete</button>
      <button class="update">Update</button>
      </div>
      `;
  }
}
