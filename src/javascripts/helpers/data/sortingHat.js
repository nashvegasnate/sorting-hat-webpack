const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const theHat = houses[Math.floor(Math.random() * houses.length)];
  return theHat;
};

export default sortingHat;
