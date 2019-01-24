class User {

    // Свойства - определяют состояние будущего объекта 
    firstname: string;
    lastname: string;
    
    // Методы - определяют поведение будущего объекта 
    print() : void {  
        console.log(`${this.firstname} ${this.lastname}`);
    }
}

let user1: User = new User();
user1.firstname = "Andrey";
user1.lastname = "Kuznetsov";

user1.print();
