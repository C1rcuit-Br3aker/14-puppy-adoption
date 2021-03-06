'use strict';
import ApplicationView from 'application-view';

export default function () {
  fetch(`http://tiny-tn.herokuapp.com/collections/cb-puppies`)
    .then((res) => res.json())
    .then((data) => {
      const app = document.querySelector(`.form`);

      const application = new ApplicationView(app, data);
    });
}
