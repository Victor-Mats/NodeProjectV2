function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  var btn = document.createElement("BUTTON");
  document.body.appendChild(btn);
}

let postArray = 
[
  "Demo Post. Woke up early this morning to go buy a mountian bike off of Craigslist. Afterwards, I went to class and then work."
];

function addPost() 
{
  var x = document.getElementById("myText").value;
  postArray.push(x);
  //console.log (postArray);
  //adds last post to latest post
  document.getElementById("demo").innerHTML = x;

  //adds to total posts in history tab
  let aa = postArray.toString();
  document.getElementById("total").innerHTML = aa;
  //document.getElementById("numb").innerHTML = postArray.length;

    for (let i = 0; i < postArray.length; i++) 
    {
      console.log(postArray[i]);
      document.body.appendChild(btn);
    }
}

function getDate()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function ok()
{
  let out = 2;
  return out;
}