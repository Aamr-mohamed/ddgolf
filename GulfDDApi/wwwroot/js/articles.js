const url = "http://localhost:5066";
const lang = sessionStorage.getItem("lang") ?? "en";

renderArticles();

async function renderArticles() {
  const parent = document.querySelector(".news-container");
  const articles = await fetchArticles();
  for (const art of articles) {
    const container = document.createElement("div");
    container.classList.add("news-item");

    const img = document.createElement("img");
    img.src = url + art.imagePath;
    img.classList.add("article-img");

    const date = document.createElement("p");
    date.innerText = formatDate(new Date(art.createdDate));
    date.classList.add(lang);

    const title = document.createElement("h3");

    title.innerText = lang == "ar" ? art.titleAr : art.titleEn;
    title.classList.add(lang);

    const btn = `<button onclick="window.location='${url}/article-info.html?lang=${lang}&id=${
      art.id
    }'" class="${lang}"> ${
      lang == "ar" ? "اقرا المزيد" : "Read more"
    } <img src="./assets//arrow-left-svgrepo-com.svg" alt="Arrow" loading="lazy" /> </button>`;

    container.appendChild(img);
    container.appendChild(date);
    container.appendChild(title);
    container.appendChild(htmlToElement(btn));

    parent.appendChild(container);
  }
}

async function fetchArticles() {
  const res = await fetch(url + "/Articles");
  const articles = await res.json();
  return articles;
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
