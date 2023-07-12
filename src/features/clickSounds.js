const audioClick = new Audio('/click.wav');

const click = () => {
  audioClick.play();
};

const audioClickError = new Audio ('/click-error.wav');

const clickError = () => { 
  audioClickError.play();
}

export { click, clickError };