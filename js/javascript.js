var x = [

    "<P>Beware of what you become in pursuit of what you want.<p/>",



    "<P>It's not what happens to you, but how you react to it that matters.<p/>",



    "<P>The best revenge is massive success.<p/>",


    "<P>You miss 100% of the shots you don't take.<p/>",



    "<P>Resentment is like drinking poison and waiting for your enemies to die.<p/>",


    "<P>Do not take life too seriously. You will not get out alive.<p/>",






]

function text() {
    var y = Math.floor(Math.random() * x.length)
    document.getElementById("carden").innerHTML = x[y]

}