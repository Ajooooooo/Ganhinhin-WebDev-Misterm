const login = () => {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let msg = document.getElementById("msg");
  if (user == "" || pass == "") {
    msg.style.color = "red";
    msg.innerHTML = "Please type your username and password.";
  } else {
    msg.style.color = "green";
    msg.innerHTML = "Welcome back, " + user + "! <a href='feed.html'>Go to the feed</a>";
  }
};

function signup() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  let agree = document.getElementById("agree").checked;
  let msg = document.getElementById("msg");
  if (user == "" || pass == "") {
    msg.style.color = "red";
    msg.innerHTML = "Please type a username and password.";
  } else if (agree == false) {
    msg.style.color = "red";
    msg.innerHTML = "Please tick the checkbox to agree.";
  } else {
    msg.style.color = "green";
    msg.innerHTML = "Account created, " + user + "! <a href='login.html'>Log in</a>";
  }
}

let posts = ["Welcome to the WebDev Midterm Exam app. No ads, no tracking.", "Tip: use a different password for every site."];
let count = 2;

function showPosts() {
  let html = "";
  for (let i = 0; i < count; i++) {
    if (posts[i] == null) {
      continue;
    }
    html = "<div class='card'><p>" + posts[i] + "</p><button type='button' onclick='deletePost(" + i + ")'>Delete</button></div>" + html;
  }
  document.getElementById("posts").innerHTML = html;
}

const addPost = () => {
  let text = document.getElementById("text").value;
  if (text == "") {
    alert("Write something first!");
  } else {
    posts[count] = text;
    count++;
    document.getElementById("text").value = "";
    showPosts();
  }
};

function deletePost(i) {
  posts[i] = null;
  showPosts();
}

function saveBio() {
  let bio = document.getElementById("bio").value;
  document.getElementById("bioText").innerHTML = bio;
}
