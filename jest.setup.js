// jest.setup.js
import React from 'react';
global.React = React;
global.ResizeObserver = class {
    observe() {
        // testingPurpose
    }
    unobserve() {
        // testingPurpose
    }
    disconnect() {
        // testingPurpose
    }
};

Object.defineProperty(Element.prototype, 'scrollIntoView', {
    value: jest.fn(),
    writable: true
});

window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () {},
            removeListener: function () {}
        };
    };
