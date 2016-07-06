import $ from 'jquery';
import './style.scss';

function counter(time) {
  const num = time + 1;
  $('#main').html(`You have been on this page for ${num} seconds`);
  return num;
}

let count = 0;
setInterval(function interv() { count = counter(count); }, 1000);
