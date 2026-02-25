const contains = function (object, value) {
  if (Number.isNaN(object) && Number.isNaN(value)) {
    return object.value === value.value;
  }
  if (object === value) {
    return true;
  }
  if (object !== Object(object)) {
    // case object is primitive
    return object === value;
  } else {
    // object is object or array
    if (Array.isArray(object)) {
      let found = false;
      object.map((obj) => {
        found = contains(obj, value) || found;
      });
      return found;
    } else {
      // it's an object
      return contains(Object.values(object), value);
    }
  }
};
// Do not edit below this line
module.exports = contains;
