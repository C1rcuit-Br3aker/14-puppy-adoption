'use strict';

export default class ApplicationView {
  constructor(el) {
    this.el = el;

    this.getPuppy();
  }

  getPuppy() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`).
      then(res => res.json()).
      then(data => {
        const app = document.querySelector(`.form`);
        const application = new ApplicationView(app, data);
        this.render();
      });
  }

  render() {
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
  }
}
