const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

userAnswers.forEach((answers, index) => {
   if(answers === correctAnswers[index]) {
    score += 25;
   }

});
scrollTo(0,0);

document.getElementById('show').style.display = 'block'

let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent = `${score}%`;
    if(output === score){
        clearInterval(timer);
    }else {
        output ++;
    }

},200);

});