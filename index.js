const sidebar = document.getElementById("side-bar");
const questionContainer = document.querySelector(".click-event"); 
const mousemove = document.querySelector(".mousemove");
const mouse = document.querySelector(".mouse");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.getElementById("p1");
const response2 = document.getElementById("video-1");
const response3 = document.getElementById("video-2");
const span = document.createElement("span");
span.innerHTML = "&#10004;";
const trials = document.querySelector(".trials");
const trialsDiv = trials.querySelectorAll("div");
trialsDiv.forEach(div => {
  div.setAttribute("data-good", span.innerHTML);
});
setTimeout(() => {
  document.querySelector(".message_ai").classList.add("add")
}, 3000);
document.querySelector("#exitIcon").addEventListener("click", e => {
  document.querySelector(".message_ai").classList.remove("add");
});
const keypressConttainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const target = document.getElementById("target");
"use strict";

    const userId = {
      name: null,
      identity: null,
      image: null,
      message: null,
      date: null 
    }
    const userComment = document.querySelector(".usercomment");
    const publishBtn = document.querySelector("#publish");
    const comments = document.querySelector(".comments");
    const userName = document.querySelector(".user");

let array = ["ingénieur", "informaticien", "en herbe"]
let wordIndex = 0;
let letterIndex = 0;
const createLetter = () => {
  const letter = document.createElement("span");
	target.appendChild(letter);
  
	letter.textContent = array[wordIndex][letterIndex];
  
  setTimeout(() => {
    letter.remove();
  }, 2800);
};
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
const counterDisplay = document.querySelector("h9");
let counter = 0;

const bubbleMaker = () => {

  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  // document.body.appendChild(bubble);
  
  
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  
  
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter
    bubble.remove();
  })

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 300); 
const mouses = document.querySelectorAll(".mouse");


btn.addEventListener('click', () => {
  sidebar.classList.toggle("active");
});

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.transform = "rotate(2deg)";
  response.style.background = "rgba(214, 96, 227, 0.728)";
  response2.classList.toggle("show-response2"); 
});

btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.transform = "rotate(-2deg)";
  response.style.background = "#e23e30c7";
  response3.classList.toggle("show-response3");
});
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.y + "px";
    mouse.style.left = e.x + "px";
  });
});


window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
})
window.addEventListener("mousedown", () => {
  // mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  // mousemove.style.border = "2px solid pink";
});
window.addEventListener("mouseup", () => {
  // mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  // mousemove.style.border = "2px solid teal";
});
// questionContainer.addEventListener("mouseenter", () => {
//   questionContainer.style.background = "rba(0,0,0,0.6)";
// });
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(65, 53, 134, 0.806)";
});

// response.addEventListener("mouseover", () => {
//   response.style.transform = "translateX(0)";

//   response.style.transform = "rotate(2deg)";
// });

document.addEventListener("keypress", () => {
  console.log("yes !!");
})

userComment.addEventListener("input", e => {
  if(!userComment.value) {
    publishBtn.setAttribute("disabled", "disabled");
    publishBtn.classList.remove("abled")
  }else {
    publishBtn.removeAttribute("disabled");
    publishBtn.classList.add("abled")
  }
})

function addPost() {
  if(!userComment.value) return;
  userId.name = userName.value;
  if(userId.name === "Anonymous") {
    userId.identity = false;
    userId.image = "/assets/img/id.png";
  }else {
    userId.identity = true;
    userId.image = "user.png"
  }
  

userId.message = userComment.value;
userId.date = new Date().toLocaleString();
let published =
`<div class="parents">
  <img src="${userId.image}">
  <div>
    <h10>${userId.name}<h10>
    <p>${userId.message}</p>
    <div class="engagements"><img src="./assets/img/like.png"><img src="./assets/img/link.png"></div>
    <span class="date">${userId.date}</span>
  </div>
</div>`;

comments.innerHTML += published;
userComment.value = "";

let commentsNum = document.querySelectorAll(".parents").length;
document.getElementById("comment").textContent = commentsNum;
}
publishBtn.addEventListener("click", addPost)


