const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
      const manager = new Manager("Jared", 1, "jared@fakemail.com", 1);

      expect(manager.name).toEqual("Jared");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("jared@fakemail.com");
      expect(manager.officeNumber).toEqual(1);
    });
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager();

      expect(cb).toThrow();
    });
    it("should throw an error if not provided a name", () => {
      const cb = () => new Manager(1, "jared@fakemail.com", 1);
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an id", () => {
      const cb = () => new Manager("jared", "jared@fakemail.com", 1);
      const err = new Error("Expected parameter 'id' to be a positive int");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an email", () => {
      const cb = () => new Manager("jared", 1, 1);
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an office number", () => {
      const cb = () => new Manager("jared", 1, "jared@fakemail.com");
      const err = new Error("Expected parameter 'officeNumber' to be a positive int");

      expect(cb).toThrowError(err);
    });
  });
  describe("getOfficeNum", () => {
    it("should return the manager's office number", () => {
      const officeNum = 1;

      const result = new Manager(
        "jared",
        1,
        "jared@fakemail.com",
        1
      ).getOfficeNum();

      expect(result).toEqual(officeNum);
    });
  });
  describe("getRole", () => {
    it("should return the string 'Manager'", () => {
      const role = "Manager";

      const result = new Manager(
        "jared",
        1,
        "jared@fakemail.com",
        1
      ).getRole();

      expect(result).toEqual(role);
    });
  });
});
