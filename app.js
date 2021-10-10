// b047a4ac6414432cb675dd813cd00584

let country=document.getElementById('countryCode');
let submit=document.getElementById('submit').onclick=function(){
    let value=country.value;
    console.log(value);
  let apiKey="b047a4ac6414432cb675dd813cd00584";
let news=fetch(`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apiKey}`)
.then(response => response.json())
.then(data => {
let articles=data.articles; 
let heading=`<h1> Showing Live updates regarding country :${value}</h1>`  
let newHTML=""
articles.forEach(element => {
    console.log(element["author"])
    console.log(element["title"])
    console.log(element["description"])
    console.log(element["publishedAt"])
    let newsHtml=`<div class="row">
    <div class="col-sm-6 col-md-4 col-lg-10">
    
      <div class="thumbnail">
      <b><h3>Title:${element["title"]}</h3></b>
        <div class="caption">
          <h3>The author:${element["author"]}</h3>
          <p>Description:${element["description"]}</p>
          <p>Published at:${element["publishedAt"]}</p>
        </div>
      </div>
    </div>
  </div>
  </div>`
  newHTML+=newsHtml;
  });
  document.getElementById('heading').innerHTML=heading
  document.getElementById('thumbnail').innerHTML=newHTML;
})
country.value=""

}


