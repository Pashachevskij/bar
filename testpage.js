if(localStorage.getItem('id') == null)
localStorage.setItem('id', Math.random().toString(16).slice(2));
window.juswidgetVariables=new Object();
window.juswidgetVariables.start=new Object();
window.juswidgetVariables.start.id= localStorage.getItem('id'); 
