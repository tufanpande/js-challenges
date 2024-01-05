console.log("hello from date");

//Date

//Date is an object

const today= new Date();
const someTime= new Date("2016-01-02");
console.log(today,someTime);



//ISO date time
const now =today.toISOString();
console.log(now);

//wite a functions that accepts the date and show which data is entered as date

const dayFinder =(date)=>{
    const day = new Date(date);
    return day.getDay();
    

};

 console.log(dayFinder("2024-01-05"));
 const res= dayFinder("2016-01-02");
 

 switch (res){
    case 1:
        console.log("sunday");
        break;
        case 2:
        console.log("Monday");
        break;
        case 3:
        console.log("Tuesday");
        break;
        case 4:
        console.log("wednesday");
        break;
        case 5:
        console.log("thursday");
        break;
        case 6:
        console.log("friday");
        break;
        case 7:
        console.log("saturday");
        break;
        default:
        console.log("not Saturday");
 }