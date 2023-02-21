export class User {
   protected name: string
   private email: string
   private active: boolean = false

    constructor(name: string, email: string, active: boolean = false) {
        this.name = name
        this.email = email
        this.active = active
    }

    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name')
        }
        this.name = newName
    }

    public getName(): string {
        return this.name
    }

    public getNumber(): number {
        return 10;
    }
}

export class Manager extends User {
    private code;

    constructor(name: string, email: string, active: boolean, code: string) {
        super(name, email, active)
        this.code = code
    }

    public getName(): string {
        return `Manager: ${this.name}`
    }
    
    public getNumber(): number {
        return super.getNumber() + 10;
    }
}

const manager1 = new Manager('Manager1', 'manager1@email.com', true, '4t53s2')
console.log(manager1)
console.log(manager1.getNumber())