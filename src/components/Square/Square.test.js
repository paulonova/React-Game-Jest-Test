import React from 'react'
import Square from './Square'
import {shallow} from 'enzyme'

test('renders without crashing', () => {
  shallow(<Square/>);
});

