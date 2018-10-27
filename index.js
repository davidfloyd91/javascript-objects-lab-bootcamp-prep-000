var recipes = {

};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key] : value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value;
}
function deleteFromObjectByKey(object, key) {
  return delete object.key;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var object = return delete object.key;
}
