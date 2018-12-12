var fs = require('fs');
const data = fs.readFileSync("/Users/t/galvanize/capstone/client/App.vue", "utf8");

const Login = reactVueTemplateParser(data);

describe("App View", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<View />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});