let $ = document;

let main_headings = {
  "فرانت اند": [
    "آموزش HTML",
    "آموزش CSS",
    "آموزش Flex Box",
    "آموزش CSS Grid",
    "مینی پروژه های تخصصی با CSS",
    "آموزش Tailwind CSS",
    "آموزش تخصصی طراحی قالب",
    "آموزش BootStrap",
    "آموزش JavaScript",
    "پروژه های تخصصی با JS",
    "آموزش جامع ریکت ReactJs",
    "آموزش ویو جی اس",
    "آموزش Vscode",
  ],
  امنیت: [
    "نقشه راه ورود به دنیای هک و امنیت",
    "شبکه با گرایش امنیت",
    "لینوکس با گرایش امنیت",
    "آموزش هکر قانونمند -CEH VII",
    "آموزش کالی لینوکس",
    "آموزش پایتون سیاه",
    "آموزش Burb Suite",
    "آموزش جاوااسکریپت سیاه",
  ],
  پایتون: [
    "دروه آموزش پایتون",
    "پروژه های کاربردی با پایتون",
    "بهینه سازی کد ها در پایتون",
    "آموزش جنگو",
    "مصور سازی داده با پایتون",
  ],
  "پی اچ پی": ["ربات تلگرام با PHP", "پروژه های کاربردی با PHP"],
  "ارتقای مهارت ها": [
    "الگوریتم و ساختمان داده",
    "آموزش websocket",
    "گیت و گیتهاب",
    "آموزش GraphQL",
    "توسعه کتابخانه با JS",
    "افزونه نویسی با JS",
    "Clean Code برای JS",
    "دیپلوی پروژه ها با JS",
    "دوره Mern Stack",
    "آموزش رجکس (rejax)",
    "npm برای جاوااسکریپت کا رها",
    "آموزش VsCode",
  ],
  مقالات: [
    "اچ تی ام ال",
    "بوت استرپ",
    "تست نفوذ و امنیت",
    "جی کوئری",
    "رکت جی اس",
    "سی اس اس",
    "طراحی سایت",
    "ویو جی اس",
  ],
};
let desktop_header = $.getElementById("desktop-header-ul");

Object.keys(main_headings).forEach((heading) => {
  let li_Element = $.createElement("li");
  li_Element.classList.add("relative", "group", "cursor-pointer");

  /** create link */
  let link_Element = $.createElement("a");
  link_Element.classList.add("hover:text-green-400", "transition-all");
  let span_Element = $.createElement("span");
  span_Element.innerHTML = heading;
  let i_Element = $.createElement("i");
  i_Element.classList.add("fa-solid", "fa-angle-down");
  /** add spand and i to the link Element */
  link_Element.appendChild(span_Element);
  link_Element.appendChild(i_Element);

  /** items_list */
  let nav_bar_Element = $.createElement("div");
  nav_bar_Element.classList.add("nva-bar");

  let ul_Element = $.createElement("ul");
  ul_Element.classList.add("navigation-list");
  main_headings[heading].forEach((item) => {
    let new_li_Element = $.createElement("li");
    new_li_Element.innerHTML = item;
    ul_Element.appendChild(new_li_Element);
  });
  /** add ul_Element to navBar */
  nav_bar_Element.appendChild(ul_Element);

  /** add nva_bar and link element to the main li */
  li_Element.appendChild(link_Element);
  li_Element.appendChild(nav_bar_Element);

  /** add all to desktop_header */
  desktop_header.appendChild(li_Element);
});

let mobile_header_sideBar = $.getElementById("mobile-menue-container");
let mobile_header_menue = $.getElementById("mobile-menue");
let cover_all_frame = $.getElementById("cover-dark-them");

Object.keys(main_headings).forEach((heading) => {
  let li = $.createElement("li");

  let a = $.createElement("a");
  a.addEventListener("click", () => {
    if (a.nextElementSibling.classList.contains("hidden")) {
      a.nextElementSibling.classList.remove("hidden");
      a.children[1].classList.add("-rotate-90");
    } else {
      a.nextElementSibling.classList.add("hidden");
      a.children[1].classList.remove("-rotate-90");
    }
  });

  let span = $.createElement("span");
  span.innerHTML = heading;
  let a_icon = $.createElement("i");
  a_icon.classList.add("fa-solid", "fa-angle-left","transition-all");
  a.appendChild(span);
  a.appendChild(a_icon);

  // add a to the li
  li.appendChild(a);

  // add new list:
  let menue_item = $.createElement("ul");
  menue_item.classList.add("mobile-menue-item", "hidden");
  main_headings[heading].forEach((item) => {
    let new_li = $.createElement("li");
    new_li.innerHTML = item;
    menue_item.appendChild(new_li);
  });
  li.appendChild(menue_item);

  // add them all to the list
  mobile_header_menue.appendChild(li);
});

let open_mobile_menue = $.getElementById("open_mobile_menue");
open_mobile_menue.addEventListener("click", () => {
  mobile_header_sideBar.classList.remove("mobile-menue-container_hidden");
  cover_all_frame.classList.remove("invisible", "opacity-0");
});

let close_mobile_menue = $.getElementById("close_mobile_menue");
close_mobile_menue.addEventListener("click", () => {
  mobile_header_sideBar.classList.add("mobile-menue-container_hidden");
  cover_all_frame.classList.add("invisible", "opacity-0");
});
