// 32eafd2e
// let url=`http://www.omdbapi.com/?apikey=32eafd2e&s=${find}`
var count=0;
function press(){
    var find=document.querySelector("#search").value
    let url=`http://www.omdbapi.com/?apikey=32eafd2e&s=${find}`
     getData(url);
}

async function getData(url){
    try
    {var res= await fetch(url)
    var data=await res.json();
    var Data=data.Search;
      appendProduct(Data);
    }
    catch(err){
        console.log(' err', err);
        appendError();
    }
}


function appendProduct(Data)
{
    document.querySelector("#container").innerHTML=""
    Data.map(function (el){
        

        let div=document.createElement("div")
        let boxl=document.createElement("div");
        boxl.id="boxl";
        let boxr=document.createElement("div");
        boxr.id="boxr";
        let image=document.createElement("img")
        image.src=el.Poster;

        let Title=document.createElement("h3")
        Title.textContent=el.Title

        let Year= document.createElement("p")
        Year.textContent="Release Year:"+" "+el.Year
        let Type= document.createElement("p")
        Type.textContent="Type:"+" "+el.Type
        var rating= Math.floor(Math.random() * (10 * 10 - 5 * 10) + 5 * 10) / (1*10);
        let IMBD= document.createElement("p")
        if(rating>8.5)
        {
            
        IMBD.textContent="Rating:" +" "+rating+ " "+"(Recommended)";
        }
        else
        {
           
        IMBD.textContent="Rating:" +" "+rating;
        }
        

        boxl.append(image);
        boxr.append(Title,Year,Type,IMBD);
        div.append(boxl,boxr);
        document.querySelector("#container").append(div)
    })
    console.log(' data', Data);
}
function appendError(){
    let image=document.createElement("img")
    image.src="https://2.bp.blogspot.com/-X9sVvOD0hrs/W5cz8WKyknI/AAAAAAAAEKI/s6mNIUQdsy4KGnCgtF1VSZlnj237ArxawCLcBGAs/s1600/not%2Bfound.gif";
    image.id="error"
    document.querySelector("#container").append(image)

}