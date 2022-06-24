import App from "./App";
import {shallow} from "enzyme";

describe("fundamental tests for App", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper);
  });
});
