/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 503:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const fs = __nccwpck_require__(147);

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


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { updateFile, processArgs } = __nccwpck_require__(503);

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

})();

module.exports = __webpack_exports__;
/******/ })()
;