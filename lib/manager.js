const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Error handling
    if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
      throw new Error("Expected parameter 'officeNumber' to be a positive int");
    }

    this.officeNumber = officeNumber;
  }

  getOfficeNum() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;