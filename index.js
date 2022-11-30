const core = require('@actions/core');
const github = require('@actions/github');
var fs = require('fs');
// function readWriteAsync(filepath) {
//   fs.readFile(filepath, 'utf-8', function (err, data) {
//     if (err) throw err;

//     var newValue = data.replace(/^\./gim, 'myString');

//     fs.writeFile(filepath, newValue, 'utf-8', function (err) {
//       if (err) throw err;
//       console.log('filelistAsync complete');
//     });
//   });
// }

function readWriteSync(filepath) {
  var data = fs.readFileSync(filepath, 'utf-8');

  var newValue = data.replace(/^\./gim, 'myString');

  fs.writeFileSync(filepath, 'test', 'utf-8');

  console.log('readFileSync complete');
}


try {
  // `who-to-greet` input defined in action metadata file
  // readWriteAsync();
  readWriteSync('./suppress.tsx');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}