interface IKey {
  readonly signature: number;

  getSignature(): number;
}
class Key implements IKey {
  signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

interface IPerson {
  getKey(): object;
}
class Person implements IPerson {
  private key: object;

  constructor(key: object) {
    this.key = key;
  }

  getKey(): object {
    console.log(this.key);
    return key;
  }
}

interface IHouse {
  door: boolean;
  key: object;

  tenants: object[];

  comeIn(): void;
  openDoor(key: object): void;
}
abstract class House implements IHouse {
  door: boolean = false;
  key: object;

  tenants: object[] = [];

  constructor(key: object) {
    this.key = key;
  }

  comeIn(): void {
    if (this.door === true) {
      this.tenants.push(Person);
      console.log("Person has come in the House");
    }
  }

  abstract openDoor(key: object): void;
}
class MyHouse extends House {
  door: boolean = false;
  doorKey: number;

  constructor(key: object) {
    super(key);
    this.key = key;
  }

  openDoor(key: object): void {
    console.log("Trying to open the door");

    if (key === this.key) {
      console.log("The door was opened successfully");
      this.door = true;
      return;
    }
    console.log("The door wasn't opened successfully");
    return;
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

const personKey = person.getKey();

house.openDoor(personKey);
house.comeIn();

console.log("Is door opened?", house.door);
console.log("Tenants:", house.tenants);

export {};
