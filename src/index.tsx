import { h, render } from 'preact';

const target = document.getElementById('root') as HTMLElement;

const App = () => {
  var worker = new Worker('./app.worker.js');
  worker.addEventListener(
    'message',
    (e: any) => {
      console.log('Worker said: ', e.data.a);
    },
    false
  );

  const sayHI = () => {
    console.log('say hi');
    worker.postMessage({ cmd: 'start', msg: 'Hi' });
  };

  const stop = () => {
    // Calling worker.terminate() from this script would also stop the worker.
    worker.postMessage({ cmd: 'stop', msg: 'Bye' });
  };

  console.log(worker);

  return (
    <div>
      <div onClick={sayHI}>say hi!</div>
      <div onClick={stop}>stop</div>

      <output id="result"></output>
    </div>
  );
};

render(<App />, target);
