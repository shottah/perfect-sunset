import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {shallow} from 'enzyme';

describe('<Index> renders without crashing:', () => {
	let wrapper;
	beforeEach(() => {wrapper = shallow(<App/>)});

	it('should be defined', () => {
		expect(wrapper).toBeDefined();
	});
});