
export class User {
    constructor(
        public username: string,
        public password: string,
        public email: string,
        public firstName: string,
        public gender: string,
        public id: number,
        public image: string,
        public lastName: string,
        public token: string



    ) { }

    toString() {
        return `${this.username} ${this.password} ${this.email} ${this.firstName} ${this.gender} ${this.id} ${this.image} ${this.lastName} ${this.token}`
    }

    
}