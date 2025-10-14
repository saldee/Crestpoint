
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth'});}});});
const menu=document.querySelector('.menu');
const header=document.querySelector('header');
const hamburger=document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML='&#9776;';
header.insertBefore(hamburger,menu);
hamburger.addEventListener('click',()=>{menu.classList.toggle('menu-open');});
const contactForm=document.querySelector('.contact-form form');
if(contactForm){contactForm.addEventListener('submit',function(e){const name=contactForm.name.value.trim();const email=contactForm.email.value.trim();const message=contactForm.message.value.trim();if(!name||!email||!message){e.preventDefault();alert('Please fill in all fields before submitting.');return false;}const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;if(!emailPattern.test(email)){e.preventDefault();alert('Please enter a valid email address.');return false;}});}
