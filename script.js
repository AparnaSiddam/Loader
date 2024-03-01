const doc = document.querySelector('body');
const header = document.createElement('h1');
      header.textContent = 'Loader';
      header.style.color = 'maroon';
      header.style.textDecoration = 'underline';
      header.style.textAlign = 'center';
      
const container = document.querySelector('.container');

doc.insertBefore(header, container);
