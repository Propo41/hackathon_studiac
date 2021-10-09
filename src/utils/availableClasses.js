const getAvailableClasses = (subjects) => {
  const dropdownClasses = [];
  dropdownClasses.push("All");
  subjects.forEach((subject) => {
    // only  push unique classes
    if (dropdownClasses.indexOf(subject.Class.category) === -1) {
      dropdownClasses.push(subject.Class.category);
    }
  });
  return dropdownClasses;
};

export default getAvailableClasses;
