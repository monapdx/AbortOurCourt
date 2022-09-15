const folderList = {
  "1": {
    type: "folder",
    name: "Root",
    parentId: null,
    contentList: ["2", "3", "4", "6", "7"]
  },
  "2": {
    type: "folder",
    name: "css",
    parentId: "1",
    contentList: ["8"]
  },
  "3": {
    type: "folder",
    name: "js",
    parentId: "1",
    contentList: ["9"]
  },
  "4": {
    type: "folder",
    name: "images",
    parentId: "1",
    contentList: ["10"]
  },
  "5": {
    type: "folder",
    name: "Folder D",
    parentId: "2",
    contentList: []
  },
  "6": {
    type: "file",
    name: "index.html",
    parentId: "1",
    contentList: []
  },

  
    "9": {
    type: "file",
    name: "script.js",
    parentId: "3",
    contentList: []
  },
  
    "10": {
    type: "file",
    name: "logo.png",
    parentId: "4",
    contentList: []
  },
  
    "8": {
    type: "file",
    name: "style.css",
    parentId: "2",
    contentList: []
  },
};
let currentFolder = "1";
const contentTemplate = document.querySelector("#content-template .content");
const backButton = document.querySelector("#back-button");
backButton.addEventListener("click", (event) => {
  currentFolder = folderList[currentFolder].parentId;
  createFolders();
});

const headerElement = document.querySelector("header");
headerElement.addEventListener("click", (event) => {
  let addNewButton = event.target.closest(".add-new");
  if (addNewButton) {
    const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };
    const newId = uid();
    let contentType = "folder";
    let contentName = "New Folder";
    if (addNewButton.id === "add-file") {
      contentType = "file";
      contentName = "New File";
    }
    folderList[newId] = {
      type: contentType,
      name: contentName,
      parentId: currentFolder,
      contentList: []
    };
    folderList[currentFolder].contentList.push(newId);
  }
  createFolders();
});

const mainContainer = document.querySelector("main");

mainContainer.addEventListener("click", (event) => {
  let contentNode = event.target.closest(".folder");
  if (contentNode.classList.contains("folder")) {
    currentFolder = contentNode.id;
    createFolders();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createFolders();
});

let createFolders = () => {
  mainContainer.innerHTML = "";
  let titleFolder = document.querySelector("#title-folder");
  titleFolder.textContent = folderList[currentFolder].name;

  if (folderList[currentFolder].parentId) {
    backButton.classList.remove("hidden");
  } else {
    backButton.classList.add("hidden");
  }

  folderList[currentFolder].contentList.forEach((contentId) => {
    let newContent = contentTemplate.cloneNode(true);
    newContent.id = contentId;
    newContent.classList.add(folderList[contentId].type);
    newContent.querySelector(".content-name").textContent =
      folderList[contentId].name;
    newContent.querySelector(".content-type").textContent =
      folderList[contentId].type === "folder" ? "folder" : "description";
    mainContainer.appendChild(newContent);
  });
};