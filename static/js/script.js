const elements = [
    { selector: '.imghub', url: 'https://github.com/ppp-toro' },
    { selector: '.imggmail', url: 'https://mail.google.com' },
    { selector: '.imglink', url: 'https://www.linkedin.com/feed/' }
  ];

  elements.forEach(function(element) {
    const el = document.querySelector(element.selector);
    el.addEventListener('click', function() {
      openURL(element.url);
    });
  });

  function openURL(url) {
    window.open(url, '_blank');
  }