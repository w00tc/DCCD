import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import store from "../redux/store"
import { Provider } from 'react-redux';

import React from "react";

import { shallow } from "enzyme";
import App from '../App';

it("renders without crashing", () => {
    shallow(
        <Provider store={store}>
            <App />
        </Provider>
    );
});
