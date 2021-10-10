let country=document.getElementById('countryCode');
let submit=document.getElementById('submit').onclick=function(){
    let value=country.value;
    if(value.length!=0){
  let apiKey="b047a4ac6414432cb675dd813cd00584";
let news=fetch(`https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apiKey}`)
.then(response => response.json())
.then(data => {
let articles=data.articles; 
let heading=`<h1> Showing Live News updates regarding country :${value}</h1>`  
let newHTML=""
articles.forEach(element => {
    let newsHtml=`<div class="row">
    <div class="col-sm-6 col-md-4 col-lg-10">
    
      <div class="thumbnail">
      <b><h3>Title:${element["title"]}</h3></b>
      <hr>
        <div class="caption">
          <h3>The author:<b>${element["author"]}</b></h3>
          <p>Description:${element["description"]}</p>
          <hr>
         <b> <p>Published at:${element["publishedAt"]}</p><b>
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
else{
    window.alert(" please enter country code");
}

}


