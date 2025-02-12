const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid Height in cm ${height}`;
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid Weight in kg${weight}`;
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    let message = `<span>The calculated BMI is ${bmi}</span>`
    if (bmi< 18.6) {
        message +=`<p>Your are under weight pls include some high protien in your diet</p>`
    }
    else if(18.6>bmi|| bmi<24.6){
        message += `<p>You are fit, be happy and enjoy the food</p>`
    }
    else if(bmi>24.6){
        message += `<p>You are over weight, pls reduce and have balanced diet</p>`
    }
    results.innerHTML=message
  }
});
