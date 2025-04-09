// Solution

class Dinglemouse {
    constructor() {
      this.output = {};
    }  
    setAge(age) {
      this.age = age;
      this.output.age = ` I am ${age}.`;
      return this;
    }
    setSex(sex) {
      this.sex = sex;
      this.output.sex = ` I am ${sex == 'M' ? "male" : "female"}.`;
      return this;
    }
    setName(name) {
      this.name = name;
      this.output.name = ` My name is ${name}.`;
      return this;
    }
    hello() {
      return `Hello.` + Object.values(this.output).join('');
    }
  }