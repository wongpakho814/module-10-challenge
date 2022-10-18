const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Jared", 1, "jared@fakemail.com");

      expect(employee.name).toEqual("Jared");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("jared@fakemail.com");
    });
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();

      expect(cb).toThrow();
    });
    it("should throw an error if not provided a name", () => {
      const cb = () => new Employee(1, "jared@fakemail.com");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an id", () => {
      const cb = () => new Employee("jared", "jared@fakemail.com");
      const err = new Error("Expected parameter 'id' to be a positive int");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an email", () => {
      const cb = () => new Employee("jared", 1);
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("should return the employee's name", () => {
      const name = "jared";

      const result = new Employee("jared", 1, "jared@fakemail.com").getName();

      expect(result).toEqual(name);
    });
  });
  describe("getId", () => {
    it("should return the employee's id", () => {
      const id = 1;

      const result = new Employee("jared", 1, "jared@fakemail.com").getId();

      expect(result).toEqual(id);
    });
  });
  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const email = "jared@fakemail.com";

      const result = new Employee("jared", 1, "jared@fakemail.com").getEmail();

      expect(result).toEqual(email);
    });
  });
  describe("getRole", () => {
    it("should return the string 'Employee'", () => {
      const role = "Employee";

      const result = new Employee("jared", 1, "jared@fakemail.com").getRole();

      expect(result).toEqual(role);
    });
  });
});
