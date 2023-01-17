const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");
var topics = [];
const topic = document.getElementById("topic");
// topic.addEventListener("input", function (e) {
//   topics.push(e.target.value);
// });

function addTopic() {
  topics.push(topic.value);
  console.log(topics);
}

document.querySelector(".button").addEventListener("click", addTopic);

let draggedItem = null;

for (let i = 0; i < listItems.length; i++) {
  const item = listItems[i];
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    setTimeout(() => {
      item.style.display = "none";
    }, 0);
  });
  item.addEventListener("dragend", function () {
    setTimeout(() => {
      draggedItem.style.display = "block";
      draggedItem = null;
    }, 0);
  });
  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];
    list.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    list.addEventListener("dragenter", function (e) {
      e.preventDefault();
      this.style.backgroundColor = "rgba(0,0,0,0.3)";
    });
    list.addEventListener("dragleave", function (e) {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
    list.addEventListener("drop", function (e) {
      this.style.backgroundColor = "rgba(0,0,0,0.1)";
      this.append(draggedItem);
    });
  }
}
