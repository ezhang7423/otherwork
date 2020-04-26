const fs = require("fs");
var bayes = require("bayes");

var stateJson = fs.readFileSync("model.json");
var testing = fs.readFileSync("testing.txt", "utf-8");
testing = testing.split("\n");

async function main() {
  // now ask it to categorize a document it has never seen before
  var classifier = bayes.fromJson(stateJson);

  total = 0;
  correct = 0;
  for (let x of testing) {
    let rev = x.split(" ");
    let pred = await classifier.categorize(x);
    if (rev.slice(-1)[0] == pred) {
      correct += 1;
    }
    total += 1;
  }
  console.log(correct / total);
  // serialize the classifier's state as a JSON string.

  // // load the classifier back from its JSON representation.
}

main();
