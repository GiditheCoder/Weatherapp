
// module.exports = {
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",  // Use babel-jest to handle JSX and ES modules
//   },
//   testEnvironment: "jest-environment-jsdom",  // Specify jsdom environment explicitly

//   moduleNameMapper: {
//     '\\.css$': '<rootDir>/__mocks__/styleMock.js',
//   }, 
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
// };



module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",  // Use babel-jest to handle JSX and ES modules
  },
  testEnvironment: "jest-environment-jsdom",  // Specify jsdom environment explicitly

  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  }, 
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
