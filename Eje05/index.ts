interface Person{
    name:string;
    email:string;
    salary:string;
    active:boolean;
}
var emailRegex:any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

var people=Array<Person>();

function createPeople():void{
    let newPerson:any;
    for(let i=0;i<10;i++){
        newPerson={
            name:`Nomar${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+10000),
            active: i%2==0?true:false
        };
        people.push(newPerson);
    }
    newPerson={
        name:"Cesar",            
        email:"a",
        active:true,
    };
}

function validos():void{
    for(let i=0;i<people.length;i++){
        if(people[i].active && (emailRegex.test(people[i].email))){
            console.log(people[i]);
        }
    }
}
createPeople();
validos();