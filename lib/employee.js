class Employee {
  constructor(name, id, email) {
    // Error handling
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (typeof parseInt(id) !== "number" || isNaN(parseInt(id)) || parseInt(id) < 0) {
      throw new Error("Expected parameter 'id' to be a positive int");
    }
    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
