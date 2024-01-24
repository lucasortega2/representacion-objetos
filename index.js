const MyArray = [
  {
    name: "Jonh Smith",
    title: "Newbie Programer",
    buttontext: "Follow",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    name: "Alesha Doe",
    title: "FullStack Programer",
    buttontext: "Add Friend",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    name: "Jessica Jones",
    title: "Copywriter",
    buttontext: "View Text",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
];
const $template = document.getElementById("template").content;
const $fragment = document.createDocumentFragment();
const $array = document.getElementById("array");
const representarObjetosArray = () => {
  MyArray.forEach((el) => {
    $template.querySelector(".template-img").src = el.avatar;
    $template.querySelector(".template-name").textContent = el.name;
    $template.querySelector(".template-description").textContent = el.title;
    $template.querySelector(".template-buttonFollow").textContent =
      el.buttontext;
    const $clone = $template.cloneNode(true);
    $fragment.append($clone);
  });

  $array.append($fragment);
};
representarObjetosArray();
