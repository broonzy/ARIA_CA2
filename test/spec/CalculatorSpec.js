describe("My Calculator", function() {
    it("should add valueA to valueB", function() {
        expect(Calculator.addValueAtoValueB(2 + 2)).toBe(4);
    });
    it("should subtract valueA from valueB", function() {
        expect(Calculator.subtractValueAFromValueB(5 - 2)).toBe(3);
    });
    it("should multiply valueA by valueB", function() {
        expect(Calculator.multiplyValueAbyValueB(3 * 3)).toBe(9);
    });
    it("should divide valueA by valueB", function() {
        expect(Calculator.divideValueAbyValueB(3 / 3)).toBe(1);
    });
    it("should be able to deal with strings", function(){
        expect(function() {Calculator.addValueAtoValueB("hello")}).toThrow(new Error("Not a number"))
    })
});
