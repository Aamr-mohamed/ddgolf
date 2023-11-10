const url = "http://localhost:5066";
const lang = sessionStorage.getItem("lang") ?? "en";
const form = document.getElementById("myForm");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id) {
  pageTitle = "Edit Article";
  document.title = pageTitle;
  populateValues(id);
}

async function populateValues(id) {
  const article = await getArticle(id);

  const titleEn = document.querySelector("#titleEn");
  const titleAr = document.querySelector("#titleAr");
  const contentEn = document.querySelector("#contentEn");
  const contentAr = document.querySelector("#contentAr");

  titleEn.value = article.titleEn;
  titleAr.value = article.titleAr;
  contentEn.value = article.contentEn;
  contentAr.value = article.contentAr;
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

async function postArticle(formData) {
  const res = await fetch(`${url}/Articles/`, {
    method: "POST",
    body: formData,
  });
  if (res.status !== 200) {
    alert("error creating article");
    return;
  }
  alert("Article created successfully");
  window.location.href = `${url}/articles.html?lang=${lang}`;
}

async function putArticle(id, formData) {
  await fetch(`${url}/Articles/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (res.status !== 200) {
    alert("error updating article");
    return;
  }
  alert("Article created successfully");
  window.location.href = `${url}/articles.html?lang=${lang}`;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  if (id) {
    putArticle(id, formData);
  } else {
    postArticle(formData);
  }
});
