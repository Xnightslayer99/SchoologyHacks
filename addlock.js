(function () {    
    let toInsertIframe = document.createElement("iframe");
    let password = prompt("Please enter the password")
    password = encodeURI(password);
    toInsertIframe.src = `https://bubbybabur.github.io/SchoologyHacks/lock/#${password}`;
    toInsertIframe.width = "10px";
    toInsertIframe.height = "10px";
    document.getElementById("edit-body_ifr").contentDocument.getElementById("tinymce").appendChild(toInsertIframe);
    alert("After it shows up (give some time to load), press post. Some sites don't allow you to put them in iframes (most sites actually), but I'm pretty sure Github Pages is a safe bet.");
})();
