document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      const target = this.getAttribute('data-target');
  
      // Hide all sections
      document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
      });
  
      // Show the target section
      document.getElementById(target).style.display = 'block';
    });
  });
  
  // Initially show the home section
  document.getElementById('home').style.display = 'block';