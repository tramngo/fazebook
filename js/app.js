console.log("hello world");

window.onload = function () {

var newFriends = ["GJetson","Goku","Bam-Bam","Ichiro", "Mr. Slate","Gazoo", 
"Picalo","Grimmace"];

for (var i = 0; i<newFriends.length; i++) {
  console.log(newFriends[i]);

var addNewFriend = document.createElement("li");
addNewFriend.className = "newFriends";
addNewFriend.innerHTML = newFriends[i];
list.appendChild(addNewFriend);
}


};

