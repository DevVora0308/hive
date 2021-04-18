function getPageName()
{
    console.log("In getPageName()");
    var path = window.location.pathname;
    var pageName = path.split("/").pop();
    pageName = pageName.split('.');
    pageName = pageName[0].toLowerCase();
    pageName = pageName[0].toUpperCase() + pageName.substring(1,pageName.length);
    // console.log("PageName is "+pageName);
    // console.log("pageName: "+document.getElementById("pageName"));
    // console.log("w3-include-html "+document.getElementsByTagName("w3-include-html"));
    document.addEventListener('DOMContentLoaded', (event) => {
        // console.log(document.getElementById("pageName"));
        document.getElementById("pageName").innerHTML = pageName;
    });
    var obj =document.getElementById("pageName");
    obj!=null? obj.innerHTML = pageName: (x=1);
    // console.log("PageName is "+pageName);
    // var x = document.getElementsByTagName("w3-include-html");
    // console.log("x: "+x);
    // var l = x.length;
    // console.log("l: "+l);
    // for (var i = 0; i < l; i++) {
    //     document.write(x[i].tagName + "<br>");
    // }
    // console.log("text: "+text);
    console.log("Out getPageName()");
}

function getTagName()
{
    console.log("In getTagName()");
    var title = document.title;
    console.log("pageName: "+title);
    document.addEventListener('DOMContentLoaded', (event) => {
        // console.log(document.getElementById("pageName"));
    document.getElementById("pageName").innerHTML = title;
    });
    // console.log("PageName is "+pageName);
    // var x = document.getElementsByTagName("w3-include-html");
    // console.log("x: "+x);
    // var l = x.length;
    // console.log("l: "+l);
    // for (var i = 0; i < l; i++) {
    //     document.write(x[i].tagName + "<br>");
    // }
    // console.log("text: "+text);
    console.log("Out getPageName()");
}