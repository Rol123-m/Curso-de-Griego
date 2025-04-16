// auth.js - Colocar esto en todas las páginas (excepto index.html)
document.addEventListener('DOMContentLoaded', function() {
    if(!localStorage.getItem('authenticated')) {
        window.location.href = "index.html";
        return;
    }
    
    const initial = localStorage.getItem('userInitial');
    if(!initial) return;
    
    const circle = document.createElement('div');
    circle.className = 'user-initial-circle';
    circle.id = 'userInitial';
    circle.textContent = initial;
    circle.onclick = function() { location.href = 'logout.html'; };
    
    document.body.appendChild(circle);
});
// En tu auth.js
if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) window.netlifyIdentity.on("login", () => {
        document.location.href = "/home.html";
      });
    });
  }