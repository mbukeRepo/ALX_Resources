import {shallow} from "enzyme";
import Resources from "./Resources";
import store from "../store";
import {Provider} from "react-redux";

const provider = app => (<Provider store={store}>{app}</Provider>);

describe("fundamental tests", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(provider(<Resources/>));
        expect(wrapper.exists()).toEqual(true);
    })
});
