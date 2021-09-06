/*img src="https://i.ibb.co/3YDkW32/d20-1-nobg-verde.png" 
img src="https://i.ibb.co/kxQcVJR/d20-2-nobg-verde.png" 
img src="https://i.ibb.co/4tDLzv6/d20-3-nobg-verde.png" 
img src="https://i.ibb.co/J59FY4H/d20-5-nobg-verde.png"
img src="https://i.ibb.co/7khPWvq/d20-6-nobg-verde.png" 
img src="https://i.ibb.co/DQQFYsc/d20-7-nobg-verde.png"
img src="https://i.ibb.co/8PnxBR9/d20-8-nobg-verde.png" 
img src="https://i.ibb.co/h2VD7dh/d20-9-nobg-verde.png" 
img src="https://i.ibb.co/qYgT6h7/d20-10-nobg-verde.png"
img src="https://i.ibb.co/P4KNvRV/d20-11-nobg-verde.png"
img src="https://i.ibb.co/PjxLXXm/d20-12-nobg-verde.png" 
img src="https://i.ibb.co/SKyCSjd/d20-13-nobg-verde.png" 
img src="https://i.ibb.co/C93p4Nn/d20-14-nobg-verde.png" 
img src="https://i.ibb.co/xmcsN0g/d20-15-nobg-verde.png"
img src="https://i.ibb.co/MGsGdKc/d20-16-nobg-verde.png" 
img src="https://i.ibb.co/q1f4bJB/d20-17-nobg-verde.png"
img src="https://i.ibb.co/VgWLYh1/d20-18-nobg-verde.png" 
img src="https://i.ibb.co/H4XxTPR/d20-19-nobg-verde.png" 
img src="https://i.ibb.co/fCtSNPm/d20-20-nobg-verde.png" 
*/


mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 