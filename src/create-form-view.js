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
      this.addPuppy(data[0]);
    });
  }

  addPuppy(data) {
      this.el.innerHTML = `
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
    };
  }
