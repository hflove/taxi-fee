"use strict";
const main = require("../main/main");

describe('taxi fee', function () {
    it('2公里以内', function() {
        let inputs = [1,25];
        let summary = main(inputs);
        let expected = "应付车费：12元"
        expect(summary).toEqual(expected)
    });

    it('2公里以外，8公里以内', function() {
        let inputs = [3.5,30];
        let summary = main(inputs);
        let expected = "应付车费：15元"
        expect(summary).toEqual(expected)
    });

    it('8公里以外', function() {
        let inputs = [10.3,50];
        let summary = main(inputs);
        let expected = "应付车费：26元"
        expect(summary).toEqual(expected)
    });
});
