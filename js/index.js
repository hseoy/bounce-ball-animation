import { bounceBallAnimation } from './app.js';

onload = () => {
    const animationWrapper = document.createElement('div');
    animationWrapper.setAttribute("id", "animationWrapper");
    animationWrapper.style.width = '50vw';
    animationWrapper.style.height = '50vh';
    animationWrapper.style.backgroundColor = '#aa1e1e';
    animationWrapper.style.overFlow = 'hidden';
    document.body.appendChild(animationWrapper);

    bounceBallAnimation(animationWrapper, '#eee', 50, 13);
}