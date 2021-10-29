import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// First we use the global afterEach function from Jest to call the cleanup function
// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// Then we'll use the describe functino to declare the component we're testing
describe('About component', () => {
    // First Test
    // this will be the baseline to verify that the component is rendering
    // "test" can be used interchangeably with "it" to create a test
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
})