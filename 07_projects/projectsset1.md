# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
  
    }
  });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form');
//this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} which means underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} which means normal range</span>`;
    } else {
      results.innerHTML = `<span>${bmi} which means overweight</span>`;
    }
  }
});

```

## Project 3 solution

```javascript
const time = document.getElementById('clock');
//const time=document.querySelector("#clock")

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```