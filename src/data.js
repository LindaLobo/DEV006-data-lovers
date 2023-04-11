// estas funciones son de ejemplo

const ages = [32, 33, 12, 40];

export const checkAge = (age) => {
  return age > document.getElementById("ageToCheck").value;
}

export const myFunction = () => {
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}

export const anotherExample = () => {
  return "OMG";
};
