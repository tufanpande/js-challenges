// write a function that returns user name who has admin access


   // {name:"raktim", roles:["admin"]},
    //{name:"harry", roles:["guests"]},
    //{name:"sita",roles:["admin","vendor"]}



const user=[
    {name:"raktim", roles:["admin"]},
    {name:"harry", roles:["guests"]},
    {name:"sita",roles:["admin","vendor"]},
];

    const checkRole = (role)=>{
//        const newUsers= user.map((user)=>{
//             if (user.roles.includes(role)) return user.name;
//         });
// return newUsers;
return user.filter((user)=> user.roles.includes(role));
    };

const resp= checkRole("admin");
console.log(resp);




// write a function that sum  every character of [1,2,3]

function sumCharacters(arr) {
    const fun =(acc,curValue)=>{
        return acc+ curValue;
    }
    return arr.reduce (fun, 0)
}

console.log (sumCharacters([1,2,3]));

//coursework.io



//write a pagination function that returns 5 items on page change
//["1",'2','3','4','5','6','7','8']
const paginate=(arr,page)=>{
    const itemsPerPage =5;
    return arr.slice((page-1)*itemsPerPage, page * itemsPerPage);
};

const data= ['1','2','3','4','5','6','7','8'];
console.log(paginate(data, 1));
console.log(paginate(data, 2));