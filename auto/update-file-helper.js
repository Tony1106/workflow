const fs = require("fs");

const processArgs = () => {
  let output = "";
  let propertyId = "";


  process.argv.forEach((value) => {
    if (value.includes("output")) {
      output = value.split("=")[1] || "";
    }
    if (value.includes("propertyId")) {
      propertyId = value.split("=")[1] || "";
    }

  });

  if (!output | !propertyId) {
    console.error("Missing output or propertyId args");
  } else {
    return { output, propertyId };
  }
};

const validateStringsToReplaceExist = (fileContent, stringsToReplace) => {
  const missingStrings = stringsToReplace.filter(
    (str) => !fileContent.includes(str)
  );
  if (missingStrings.length) {
    throw new Error("Can't find string to replace", missingStrings);
  }
};

const updateFile = ({
  args = processArgs(),
  updateFn = () => { },
  stringsToReplace = [],
}) => {
  const { output } = args;

  try {
    const file = fs.readFileSync(output, "utf8");

    validateStringsToReplaceExist(file, stringsToReplace);
    const updated = updateFn(file);

    fs.writeFileSync(output, updated);
  } catch (err) {
    console.log(err)
    console.error(`💥 Something went wrong updating ${output}`);
    process.exit(1);
  }
};

module.exports = { updateFile, processArgs };
