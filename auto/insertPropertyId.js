// eslint-disable-next-line @typescript-eslint/no-var-requires
const { updateFile, processArgs } = require("./update-file-helper");

const stringsToReplace = ["// Your custom aliases here - do not delete"];
const args = processArgs();

const updates = (fileContent) => {
  console.log(args, 'a22');
  const { propertyId } = args;

  return fileContent.replace(
    stringsToReplace[0],
    `${stringsToReplace[0]}\n    "${propertyId}",`
  );
};

updateFile({ args, updateFn: updates, stringsToReplace });
