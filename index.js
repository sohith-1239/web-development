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
function randomUser(){
    fetch("https://randomuser.me/api")
        .then(function(rawData){
            return  rawData.json();
        })
        .then(function(jsonData){
            var user=jsonData.results[0];
            var gender=user.gender;
            var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
            var img=user.picture.large;
            document.getElementById("user-name").innerHTML=fullName;
            document.getElementById("user-gender").innerHTML=gender;
            document.getElementById("user-image").src=img;
        })
}