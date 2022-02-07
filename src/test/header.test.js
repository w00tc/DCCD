import React from 'react';
import renderer from 'react-test-renderer';
import store from '../redux/store';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Header } from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('With React Testing Library', () => {
    const mockStore = configureStore(store);

    it('Shows "Rendered Component"', () => {
        const component = renderer.create(<Provider store={store}><BrowserRouter>
            <Header/>
        </BrowserRouter></Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        expect(component);
    });
});
