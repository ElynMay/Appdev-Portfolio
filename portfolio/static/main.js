document.addEventListener('DOMContentLoaded', function () {
  const typingElement = document.querySelector('.typing');
  const text = typingElement.innerText;
  typingElement.innerText = '';
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          typingElement.innerText += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100);
      }
  }

  typeWriter();
});


