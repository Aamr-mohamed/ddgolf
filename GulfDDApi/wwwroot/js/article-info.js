const url = `http://${window.location.host}`;
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const lang = sessionStorage.getItem("lang") ?? "en";

renderArticle(id);
renderSideArticles();

async function renderArticle(id) {
  const parent = document.querySelector(".left-section");
  const article = await getArticle(id);
  console.log(article);
  const title = document.createElement("h2");
  title.innerText = lang == "ar" ? article.titleAr : article.titleEn;
  title.classList.add(lang);
  parent.appendChild(title);

  const date = document.createElement("p");
  date.innerText = formatDate(new Date(article.createdDate));
  date.classList.add(lang);
  parent.appendChild(date);

  const img = document.createElement("img");
  img.src = url + article.imagePath;
  parent.appendChild(img);

  const content = document.createElement("article");
  content.innerText = lang == "ar" ? article.contentAr : article.contentEn;
  content.classList.add(lang);
  parent.appendChild(content);

  const editBtn = document.createElement("button");
  editBtn.innerText = lang == "en" ? "Edit Article" : "تصحيح المقال";
  editBtn.classList.add(lang, "edit-btn");
  editBtn.onclick = () => {
    window.location.href = `${url}/addArticle.html?lang=${lang}&id=${id}`;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = lang == "en" ? "Delete Article" : "حذف المقال";
  deleteBtn.classList.add(lang, "delete-btn");
  deleteBtn.onclick = async () => {
    if (
      confirm(
        lang == "en"
          ? "Are you sure you want to delete this Article?"
          : "هل أنت متأكد أنك تريد حذف هذه المقالة؟"
      ) === true
    ) {
      const res = await fetch(`${url}/Articles/${id}`, { method: "DELETE" });
      if (res.status === 200) {
        alert(
          lang == "en" ? "Article deleted successfully" : "تم حذف المقالة بنجاح"
        );
        window.location.href = `${url}/articles.html?lang=${lang}`;
      } else {
        alert(
          lang == "en" ? "Error Deleting Article" : "حدث خطأ أثناء حذف المقالة"
        );
      }
    }
  };
  parent.appendChild(editBtn);
  parent.appendChild(deleteBtn);
}

async function renderSideArticles() {
  const parent = document.querySelector(".right-section");
  const allArticles = await fetchArticles();
  const length = allArticles.length <= 3 ? allArticles.length : 3;

  for (let i = 0; i < length; i++) {
    const article = allArticles[i];
    const container = document.createElement("div");
    container.classList.add("article-item");

    const img = document.createElement("img");
    img.src = url + article.imagePath;
    container.appendChild(img);

    const date = document.createElement("p");
    date.innerText = formatDate(new Date(article.createdDate));
    date.classList.add(lang);
    container.appendChild(date);

    const title = document.createElement("h4");
    title.innerText = lang == "ar" ? article.titleAr : article.titleEn;
    title.classList.add(lang);
    container.appendChild(title);

    parent.appendChild(container);
  }
}

async function getArticle(id) {
  const res = await fetch(`${url}/Articles/${id}`);
  if (res.status !== 200) {
    window.location.href = `${url}/articles.html?lang=${lang}`;
    return;
  }
  const article = await res.json();
  return article;
}

async function fetchArticles() {
  const res = await fetch(url + "/Articles");
  const articles = await res.json();
  return articles;
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
