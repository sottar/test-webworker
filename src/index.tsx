import { h, render } from 'preact';
import { useState } from 'preact/hooks';

const target = document.getElementById('root') as HTMLElement;

const App = () => {
  return (
    <div>
      <p>
        You clicked <b>0</b> times
      </p>
    </div>
  );
};

render(<App />, target);
