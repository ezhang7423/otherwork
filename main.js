const fs = require("fs");
var bayes = require("bayes");

var classifier = bayes();

let d = JSON.parse(fs.readFileSync("processed.txt", "utf8"));

// teach it positive phrases
async function main() {
  for (let x of d) {
    await classifier.learn(x[0], x[1]);
  }

  // now ask it to categorize a document it has never seen before

  let f = await classifier.categorize("awesome, cool, amazing!! Yay.");
  // => 'positive'
  console.log(f);
  // serialize the classifier's state as a JSON string.
  var stateJson = classifier.toJson();
  fs.writeFileSync("model.json", stateJson);
  // // load the classifier back from its JSON representation.
  // var revivedClassifier = bayes.fromJson(stateJson)
}

main();
