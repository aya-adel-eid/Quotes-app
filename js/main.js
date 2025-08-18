
var quotes = [
  {
    quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name:'― Albert Einstein'
  },
{
    quote:"“A room without books is like a body without a soul.”",
    name:"― Marcus Tullius Cicero"
  },
   {
    quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name:"― Bernard M. Baruch"
  },
  {
    quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    name:"― Dr. Seuss"

  },
   {
    quote:"“You only live once, but if you do it right, once is enough.”",
    name:"― Mae West"

  }
  ,{
    quote:"“Be the change that you wish to see in the world.”",
    name:"― Mahatma Gandhi"
 }
  ]
  var lastNum=-1;
  function checkNumberRepeate(){
    var newNum;
    while(true){
        newNum = Math.trunc(Math.random() *quotes.length)
        if(newNum!==lastNum)break;
        
    }
    lastNum=newNum;
   return newNum
}

function changeQuotes( ){
   var x = checkNumberRepeate();
    var change=quotes[x];
    document.getElementById("quote").innerHTML=change.quote
  document.getElementById("authore").innerHTML=change.name

}