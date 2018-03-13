// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertie) => {
  return propertie;
};
const createNotEnumerableProperty = (propertie) => {
  Object.defineProperty(Object.prototype, propertie, {
    enumerable : false,
    get: function(){ return propertie; },
    set: function(value) {propertie = value;}
  });
  return propertie;

};
const createProtoMagicObject = () => {
  magition = new Function();
  magition.__proto__ =  magition.prototype;
  return magition;
};

let counter = 0;

const incrementor = () => {
  counter++;
  return incrementor;
};

incrementor.toString = function() {
  return counter;
};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (element) => {
  return new Promise( (success) => {
    setTimeout(function() {
      success(element);
    }, 1100);
  });
};

const getDeepPropertiesCount = (obj) => {
  str = JSON.stringify(obj);
  let count = 0;
  for (let i = 1; i < str.length-1; i++){
    if (Number.isInteger(parseInt(str[i],10))) {
      count++;
      if (Number.isInteger(parseInt(str[i-1],10)))
        count--;
    }
  }
  return count;
};




const createSerializedObject = () => {
  obj = JSON.stringify({});
  return new Object(obj);
};
const toBuffer = () => {};
const sortByProto = (arrForSort) => {
  return arrForSort.sort(function(a, b){
    return a - b;
  });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
