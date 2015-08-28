describe("A suite", () => {
 
  beforeEach(angular.mock.module('myApp'));

  it("contains spec with an expectation", () => {
    expect(true).toBe(true);
  });

   it("contains spec with an expectation1", () => {
    expect(false).toBe(true);
  });
});