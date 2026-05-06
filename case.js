const age = 101

if (age >=0 && age <= 80) {
    switch (age >= 0 && age <= 12) {
        case true:
            console.log("You are a child");
            break;
       case age >= 13 && age <= 19:
            console.log("You are a teenager");
            break;
        case age >= 20 && age <= 35:
            console.log("You are a young adult");
            break;
        case age >= 36 && age <= 60:
            console.log("You are an adult");
            break;
        case age >= 61 && age <= 80:
            console.log("You are a senior citizen");
            break;
        default:
            console.log("Invalid age");
    }



}
else {
    console.log("Invalid age");
}


// switch (age >=0 && age <= 80) {
//     case (age >= 0 && age <= 12):
//         console.log("You are a child");
//         break;
//     case (age >= 13 && age <= 19):
//         console.log("You are a teenager");
//         break;
//     case (age >= 20 && age <= 35):
//         console.log("You are a young adult");
//         break;
//     case (age >= 36 && age <= 60):
//         console.log("You are an adult");
//         break;
//     case (age >= 61 && age <= 80):
//         console.log("You are a senior citizen");
//         break;
    
// default:
//     console.log("Invalid age");
// }
