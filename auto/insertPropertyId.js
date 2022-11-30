// eslint-disable-next-line @typescript-eslint/no-var-requires
const { updateFile, processArgs } = require("./update-file-helper");
const github = require('@actions/github');
const stringsToReplace = ["// Your custom aliases here - do not delete"];
const args = processArgs();

const updates = (fileContent) => {
  console.log(args, 'a22');
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
  const propertyId = github.context.payload.client_payload.propertyId
  // const { propertyId } = args;

  return fileContent.replace(
    stringsToReplace[0],
    `${stringsToReplace[0]}\n    "${propertyId}",`
  );
};

updateFile({ args, updateFn: updates, stringsToReplace });
