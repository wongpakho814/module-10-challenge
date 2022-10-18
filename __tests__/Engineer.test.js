const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and GitHub username if provided valid arguments", () => {
      const engineer = new Engineer("Jared", 1, "jared@fakemail.com", "ibealec");

      expect(engineer.name).toEqual("Jared");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("jared@fakemail.com");
      expect(engineer.github).toEqual("ibealec");
    });
    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer();

      expect(cb).toThrow();
    });
    it("should throw an error if not provided a name", () => {
      const cb = () => new Engineer(1, "jared@fakemail.com", "ibealec");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided an id", () => {
      const cb = () => new Engineer("jared", "jared@fakemail.com", "ibealec");
      const err = new Error("Expected parameter 'id' to be a positive int");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a valid email", () => {
      const cb = () => new Engineer("jared", 1, 1, "ibealec");
      const err = new Error("Expected parameter 'email' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
    it("should throw an error if not provided a valid github username", () => {
      const cb = () => new Engineer("jared", 1, "jared@fakemail.com", 1);
      const err = new Error("Expected parameter 'github' to be a non-empty string");

      expect(cb).toThrowError(err);
    });
  });
  describe("getGitHub", () => {
    it("should return the engineer's GitHub username", () => {
      const username = "ibealec";

      const result = new Engineer("jared", 1, "jared@fakemail.com", "ibealec").getGitHub();

      expect(result).toEqual(username);
    });
  });
  describe("getRole", () => {
    it("should return the string 'Engineer'", () => {
      const role = "Engineer";

      const result = new Engineer("jared", 1, "jared@fakemail.com", "ibealec").getRole();

      expect(result).toEqual(role);
    });
  });
});
