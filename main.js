const glink = document.querySelector("#glink");
const btn = document.querySelector("#btn");
const downloadLink_textArea = document.querySelector("#download-link");

btn.addEventListener('click', (e) => {
      e.preventDefault();
    //   console.log(glink.value);

    const glinkValued = glink.value
    const confirm = glink.value.includes("https://drive.google.com/file/d/");
    // console.log(glink.value);

    if(confirm == true){
       var getDownloadLink = glink.value
       .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
       .replace("view?usp=share_link", " ");

    //    console.log(getDownloadLink);
     downloadLink_textArea.textContent = getDownloadLink;

    }


});

let copied = document.querySelector(".copy");
