import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function saveTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

const savedTime = localStorage.getItem('videoplayer-current-time');
player.on('timeupdate', throttle(saveTime, 1000));
player.setCurrentTime(savedTime);

