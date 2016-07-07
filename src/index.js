import $ from 'jquery';
import './style.scss';

let count = 0;

function counter() {
  count = count + 1;
  $('#main').html(`You have been on this page for ${count} seconds`);
}

setInterval(counter, 1000);
