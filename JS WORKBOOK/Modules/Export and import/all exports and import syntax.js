// Before declaration of a class/function/…:
// export [default] class/function/variable ...
// Standalone export:
// export {x [as y], ...}.
// Re-export:
// export {x [as y], ...} from "module"
// export * from "module" (doesn’t re-export default).
// export {default [as y]} from "module" (re-export default).
// Import:

// Importing named exports:
// import {x [as y], ...} from "module"
// Importing the default export:
// import x from "module"
// import {default as x} from "module"
// Import all:
// import * as obj from "module"
// Import the module (its code runs), but do not assign any of its exports to variables:
// import "module"