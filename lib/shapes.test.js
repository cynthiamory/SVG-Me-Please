// Global variables for requirement to use local modules.
const { Square, Circle, Triangle } = require('../lib/shapes');

// A FUNCTION TO DESCRIBE THE TEST FOR SQUARE.
describe('Square', () => {
    it('should render the correct SVG', () => {
        const shape = new Square(`${this.colour}`);
        expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="100" fill="${this.colour}" />`);
    });
});

// A FUNCTION TO DESCRIBE THE TEST FOR CIRLCLE.
describe('Circle', () => {
    it('should render the correct SVG', () => {
        const shape = new Circle(`${this.colour}`);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${this.colour}" />`);
    });
});

// A FUNCTION TO DESCRIBE THE TEST FOR TRIANGLE.
describe('Triangle', () => {
    it('should render the correct SVG', () => {
        const shape = new Triangle(`${this.colour}`);
        expect(shape.render()).toEqual(`<polygon points="150,20 20,180 280,180" style="fill:${this.colour}" />`);
    });
});
