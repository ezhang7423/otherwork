const fs = require("fs");
var bayes = require("bayes");

var classifier = bayes();

// teach it positive phrases
async function main() {
  // now ask it to categorize a document it has never seen before
  var revivedClassifier = bayes.fromJson(stateJson);

  let f = await classifier.categorize("awesome, cool, amazing!! Yay.");
  // => 'positive'
  console.log(f);
  // serialize the classifier's state as a JSON string.

  // // load the classifier back from its JSON representation.
}

main();
