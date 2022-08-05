// 파일명.test.js > 파일명.js 에 단위테스트를 작성하겠다는 의미
// https://jestjs.io/docs/getting-started

// 테스트 수행하고싶은 함수 require('경로')
const add = require("../add.js");

// test("테스트 설명", () => { expect(테스트함수(인수,...)).결과값(인수)})
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
