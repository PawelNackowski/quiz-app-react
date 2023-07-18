const audioClick = new Audio('/click.wav');

export const click = () => {
  audioClick.play();
};