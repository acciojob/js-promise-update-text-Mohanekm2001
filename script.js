//your JS code here. If required.
 function updateOutput() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Hello, world!');
        }, 1000);
      });
    }

    updateOutput()
      .then((message) => {
        document.getElementById('output').textContent = message;
      })
      .catch((error) => {
        console.error(error);
      });