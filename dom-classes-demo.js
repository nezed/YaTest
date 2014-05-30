document.getElementById('b-ex1').onclick = function() {
		document.getElementById('ex1').addClass('green');
};
document.getElementById('b-ex2').onclick = function() {
		document.getElementById('ex2').removeClass('green');
};
document.getElementById('b-ex3').onclick = function() {
		document.getElementById('ex3').toggleClass('green');
};
document.getElementById('b-ex10').onclick = function() {
		document.querySelectorAll('.example').addClass('green');
};
document.getElementById('b-ex20').onclick = function() {
		document.querySelectorAll('.example').removeClass('green');
};
document.getElementById('b-ex30').onclick = function() {
		document.querySelectorAll('.example').toggleClass('green');
};