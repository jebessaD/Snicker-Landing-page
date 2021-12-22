"strict"
class user{
    constructor(name,age,email){
        this.userName =name;
        this.age=age;
        this.email=email;
    }
    returnEmail(){
        return this.email;
    }
    static file(){
        console.log("static do not need to instantiated");
    }
    sayhello(){
        console.log("hello " + this.userName);
    }

}
let person = new user("jaba","21","jaba@gmail.com")
person.sayhello()
let email=person.returnEmail()
console.log(email);
user.file();