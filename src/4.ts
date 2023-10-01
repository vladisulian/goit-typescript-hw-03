interface IKey {
  readonly key: number;

  getSignature(): number;
}

class Key implements IKey {
   key: number = Math.random();

  getSignature(): number {
    return this.key;
  }
}

class House {}
class MyHouse {}
class Person {}

const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
