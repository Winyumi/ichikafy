(function () {
  /** @type {HTMLTextAreaElement} */
  const inputTextArea = document.querySelector('#input textarea');
  /** @type {HTMLButtonElement} */
  const generateButton = document.querySelector('#input button#generate');
  /** @type {HTMLTextAreaElement} */
  const outputTextArea = document.querySelector('#output textarea');
  /** @type {HTMLButtonElement} */
  const copyButton = document.querySelector('#output button#copy');

  generateButton.addEventListener('click', (event) => {
    const convertedText = ichikafy(inputTextArea.value);
    outputTextArea.value = convertedText;
  });

  let copyButtonTimer;

  copyButton.addEventListener('click', (event) => {
    clearTimeout(copyButtonTimer);
    outputTextArea.select();
    try {
      navigator.clipboard.writeText(outputTextArea.value);
      copyButton.innerText = copyButton.dataset.labelCopied;
      copyButtonTimer = setTimeout(() => {
        copyButton.innerText = copyButton.dataset.labelCopy;
      }, 2000);
    } catch (error) {
      console.error(error);
      alert('Failed to copy.');
    }
  });

  outputTextArea.addEventListener('focus', (event) => {
    outputTextArea.select();
  });

  function ichikafy(str) {
    return str.replace(/an/gi, 'Ichika');
  }
})();
