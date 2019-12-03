self.addEventListener(
  'message',
  (e: any) => {
    var data = e.data;
    switch (data.cmd) {
      case 'start':
        const d = {
          a: 'aaa',
          b: 'bbbb'
        };
        self.postMessage(d);
        break;
      case 'stop':
        self.postMessage(
          'WORKER STOPPED: ' + data.msg + '. (buttons will no longer work)'
        );
        self.close(); // Terminates the worker.
        break;
    }
  },
  false
);
