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

interface IPerson {
  readonly key: object;

  getKey(): number;
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

interface IHouse {
  door: boolean;
  key: object;

  tenants: object[];

  comeIn(): void;
  OpenDoor?(): void;
}
abstract class House implements IHouse {
  door: boolean = false;
  key: object;

  tenants: object[] = [];

  comeIn(): void {
    if (this.door) {
      this.tenants.push(Person);
    }
  }

  abstract OpenDoor(): void;
}
class MyHouse {}

const key = new Key();

// const house = new MyHouse(key);
const person = new Person(key);
person.getKey();

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
