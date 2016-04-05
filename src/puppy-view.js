'use strict';

export default class PuppyView {
  constructor(puppy, application) {
    this.el = document.createElement(`div`);
    this.application = application;
    this.puppy = puppy;
    this.createTemplate();
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
        profile: this.el.querySelector(`.puppy-profile`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies/${this.puppy._id}`, {
        method: `PUT`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(puppy)
      }).
      then((res) => res.json()).
      then((info) => {
        Object.assign(this.puppy, info);
        this.render();
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
      }).then(res => res.json())
      .then(() => {
        this.application.remove(this.puppy);
      });
  }

  createTemplate() {
    this.el.classList.add(`main-content`);
    this.el.innerHTML = `
      <div class="profile-image">
        <img class="pup-pic" src="">
      </div>
      <div class="profile-card">
        <ul class="card-info">
          <li class="puppy-card-info">
            <p class="puppy-info">Name</p>
            <input class="puppy-name" value="">
          </li>
          <li class="puppy-card-info">
            <p class="puppy-info">Age</p>
            <input class="puppy-age" value="">
          </li>
          <li class="puppy-card-info">
            <p class="puppy-info">Photo URL</p>
            <input class="puppy-pic" value="">
          </li>
          <li class="puppy-card-info">
            <p class="puppy-info">Profile</p>
            <input class="puppy-profile" value = "">
          </li>
          <li class="button-container">
            <button class="delete">Delete</button>
            <button class="update">Update</button>
          </li>
        </ul>
      </div>`;
  }

  render() {
    this.el.querySelector(`.pup-pic`).setAttribute(`src`, this.puppy.photoUrl);
    this.el.querySelector(`.puppy-name`).value = this.puppy.name;
    this.el.querySelector(`.puppy-age`).value = this.puppy.age;
    this.el.querySelector(`.puppy-pic`).value = this.puppy.photoUrl;
    this.el.querySelector(`.puppy-profile`).value = this.puppy.profile;
  }
}
