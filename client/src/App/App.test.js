import App from "./App";
import {shallow} from "enzyme";
import store from "../store";
import {Provider} from "react-redux";

const provider = (app) => (<Provider store={store}>{app}</Provider>);

describe("fundamental tests for App", () => {
  it('renders without crashing', () => {
    const wrapper = shallow(provider(<App/>));
    expect(wrapper).toEqual(true);
  });
});
