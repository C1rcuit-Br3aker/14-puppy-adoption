'use strict';

export default class PuppyView {
  constructor(puppy) {
    this.el = document.createElement(`div`);
    this.puppy = puppy;
    this.render();
    this.listenForClick();
  }

  listenForClick() {
    const update = this.el.querySelector(`.update`);
    update.addEventListener(`click`, () => {
      const puppy = {
        name: this.el.querySelector(`.puppy-name`).value,
        age: this.el.querySelector(`.puppy-age`).value,
        photoUrl: this.el.querySelector(`.puppy-pic`).value,
        profile: this.el.querySelector(`.puppy-info`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
        },
        body: JSON.stringify(puppy) }).
        then(res => res.json()).
        then(info => {
          this.el.querySelector(`.puppy-name`).value = ``;
          this.el.querySelector(`.puppy-age`).value = ``;
          this.el.querySelector(`.puppy-pic`).value = ``;
          this.el.querySelector(`.puppy-info`).value = ``;
          this.render(info);
        });
    });

    const deleteDog = this.el.querySelector(`.delete`);
    deleteDog.addEventListener(`click`, () => {
      this.removeDog();
    });
  }

  removeDog() {
    fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies/${this.puppy._id}`, {
      method: `delete`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
    }).then(res => res.json())
    .then((data) => {
      this.application.remove(this.data);
    });
  }

  render() {
    this.el.innerHTML = `
      <div class="profile-image">
        <img src="${this.puppy.photoUrl}">
      </div>
      <div class="profile-card">
        <ul class="card-info">
          <li class="puppy-card-info">
            <h4 class="puppy-info">Name</h4>
            <input class="puppy-name" placeholder="${this.puppy.name}">
          </li>
        <li class="puppy-card-info">
          <h4 class="puppy-info">Age</h4>
          <input class="puppy-age" placeholder="${this.puppy.age}">
        </li>
        <li class="puppy-card-info">
          <h4 class="puppy-info">Photo URL</h4>
          <input class="puppy-pic" placeholder="${this.puppy.photoUrl}">
        </li>
        <li class="puppy-card-info">
          <h4 class="puppy-info">Profile</h4>
          <input class="puppy-profile" placeholder="${this.puppy.profile}">
        </li>
        </ul>
        <button class="delete">Delete</button>
        <button class="update">Update</button>
      </div>
      `;
  }
}
