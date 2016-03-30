'use strict';
import ApplicationView from 'application-view';

export default function () {
  const app = document.querySelector(`.form`);
  const application = new ApplicationView(app);
}
