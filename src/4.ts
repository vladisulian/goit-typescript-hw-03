interface IKey {
  readonly key: number;

  getSignature(): number;
}

interface IPerson {
  readonly key: object;

  getKey(): number;
}

class Key implements IKey {
  key: number = Math.random();

  getSignature(): number {
    return this.key;
  }
}

class Person implements IPerson {
  key: object;

  constructor(key: object) {
    this.key = key;
  }

  getKey(): number {
    console.log(this.key);
    return key.key;
  }
}

class House {}
class MyHouse {}

const key = new Key();

// const house = new MyHouse(key);
const person = new Person(key);
person.getKey();

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
