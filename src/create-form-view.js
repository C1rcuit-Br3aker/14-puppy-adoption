'use strict';
import ApplicationView from 'application-view';
import PuppyView from 'puppy-view';

export default class CreateFormView {
  constructor(el, data) {
    this.el = document.querySelector('.card');
    this.data = data;
    this.getStuff();
  }

  getStuff() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`).
    then(res => res.json()).
    then(data => {
      this.addPuppy(data);
    });
  }

  addPuppy(data) {
    this.data.forEach((item) => {
      this.el.item.innerHTML = `
      <div class="profile-image">
      <img src="${data.photoUrl}"</div>
      <div class="profile-card">
      <ul class="card-info">
      <li class="puppy-card-info">
      <h4 class="puppy-info">${data.name}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${data.age}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${data.photoUrl}</h4>
      </li>
      <li class="puppy-card-info">
      <h4 class="puppy-info">${data.profile}</h4>
      </li>
      </ul>
      <button class="delete">Delete</button>
      <button class="update">Update</button>
      </div>
      `;

    })

    };
  }
