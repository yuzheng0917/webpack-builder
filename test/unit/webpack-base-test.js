const assert = require("assert");

describe("webpack-base-test case", () => {
  const baseConfig = require("../../lib/webpack.base");

  it("entry", () => {
    assert.equal(
      baseConfig.entry.index,
      "E:/git/webpackdemo/builder-webpack/test/smoke/template/src/index/index.jsx"
    ),
      assert.equal(
        baseConfig.entry.search,
        "E:/git/webpackdemo/builder-webpack/test/smoke/template/src/search/index.jsx"
      );
  });
});
