import {shallow} from "enzyme";
import Resource from "./Resource";
import store from "../store";
import {Provider} from "react-redux";

const provider = app => (<Provider store={store}>{app}</Provider>);

describe("fundamental tests", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(provider(<Resource/>));
        expect(wrapper.exists()).toEqual(true);
    })
});
