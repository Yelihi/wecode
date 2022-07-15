const ChooseEvenNumber = () => {
  let number = Array(50)
    .fill()
    .map((arr, i) => i);
  let evenNumber = [];

  number.forEach((number) => {
    if (number % 2 === 0) {
      evenNumber.push(number);
    }
  });

  return evenNumber;
};
