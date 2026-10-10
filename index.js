var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png",
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png",
    },
];
var index=0;
function toggle(){
    index=(index+1)%2;
    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").textContent=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
    console.log(users[(index+1)%2].name+"->"+users[index].name);
}