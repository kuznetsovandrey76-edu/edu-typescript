function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Andrey Kuznetsov!";

document.body.innerHTML = greeter(user);