const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and school name if provided valid arguments", () => {
      const intern = new Intern(
        "Jared",
        1,
        "jared@fakemail.com",
        "2University"
      );

      expect(intern.name).toEqual("Jared");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("jared@fakemail.com");
      expect(intern.school).toEqual("2University");
    });
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Intern();

      expect(cb).toThrow();
    });
    it("should throw an error if not provided a name", () => {
      const cb = () => new Intern(1, "jared@fakemail.com", "2University");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an id", () => {
      const cb = () => new Intern("jared", "jared@fakemail.com", "2University");
      const err = new Error("Expected parameter 'id' to be a positive int");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a valid email", () => {
      const cb = () => new Intern("jared", 1, 1, "2University");
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a valid school name", () => {
      const cb = () => new Intern("jared", 1, "jared@fakemail.com", 1);
      const err = new Error("Expected parameter 'school' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
  describe("getSchool", () => {
    it("should return the intern's school name", () => {
      const school = "2University";

      const result = new Intern(
        "jared",
        1,
        "jared@fakemail.com",
        "2University"
      ).getSchool();

      expect(result).toEqual(school);
    });
  });
  describe("getRole", () => {
    it("should return the string 'Intern'", () => {
      const role = "Intern";

      const result = new Intern(
        "jared",
        1,
        "jared@fakemail.com",
        "2University"
      ).getRole();

      expect(result).toEqual(role);
    });
  });
});
