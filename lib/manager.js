const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    // Error handling
    if (typeof parseInt(officeNumber) !== "number" || isNaN(parseInt(officeNumber)) || parseInt(officeNumber) < 0) {
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