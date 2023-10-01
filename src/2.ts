/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}\nDepartment: ${this.department}\nSalary: ${this.salary}\n`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, 5000);
  }

  public incSalary(value: number) {
    console.log("Increasing salary\n");
    this.salary += value;
  }
}

const manager = new Manager("John", "FullStack development", 5000);

console.log(`Before -> \n${manager.getEmployeeDetails()}`);
manager.incSalary(5000);
console.log(`After -> \n${manager.getEmployeeDetails()}`);

export {};
