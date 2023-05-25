import cs from './rippleEffect.module.scss';

interface IrippleEffect {
  e: any;
}

function rippleEffect<T extends IrippleEffect>(e: any) {
  const rip = document.createElement('span');
  rip.className = cs.rippleEffect;

  let x = e.nativeEvent.offsetX;
  let y = e.nativeEvent.offsetY;

  rip.style.left = `${x}px`;
  rip.style.top = `${y}px`;
  e.target.appendChild(rip);

  rip.addEventListener('animationend', (event) => {
    rip.removeEventListener;
    rip.remove();
  });

  // setTimeout(() => {
  //   rip.remove();
  // }, 400);
}

export default rippleEffect;
