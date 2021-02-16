function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that's not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  // console.log(backwards);

  return backwards.join("");
  // return backwards;

}

console.log(reverse("Hi my name is Jason"));
