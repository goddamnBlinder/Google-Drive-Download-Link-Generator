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
         
         
         
         function copyText (target){
            if (target.value == "") {
               alert("Please generate a download link ");
            } else {
               target.select();
               target.setSelectionRange(0, )
               target.execCommand("copy")
               alert("The Google link is copied to clipboard");
            }
            
         }

         const copied = document.querySelector(".copy");
         copied.addEventListener('click', () =>{
            return copyText(downloadLink_textArea)
      });
         
         
}



// copied.addEventListener('click', (e) => {
//        e.preventDefault();
//  downloadLink_textArea.select();
//  downloadLink_textArea.setSelectionRange(0, 60);
//  document.execCommand("copy");

//  if( !downloadLink_textArea.value === ''){
//     copied.style.transition = "0.5 ease"
//     copied.textContent = "COPIED";
//     copied.style.fontVariant = "inherit";
//  }else{
//    copied.style.transition = '0.5 ease-in ';
//    copied.textContent = "NOT COPIED";
//    copied.style.fontVariant = "inherit";
//  }
// });60