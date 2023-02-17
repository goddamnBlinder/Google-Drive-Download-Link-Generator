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
            if (target.value === "") {
              
               alert("NOT COPIED");
            } else {
               target.select();
               target.setSelectionRange(0, 60);
               target.execCommand("copy");
               alert("COPIED");
               copied.style.transition = "0.5 ease"
               copied.textContent = "COPIED";
               copied.style.fontVariant = "inherit";

               
            }
            
         }
          copyText();
         const copied = document.querySelector(".copy");
         copied.addEventListener('click', () =>{
            return copyText(downloadLink_textArea)
      });
      
      
   };     
   
   
   //*THE AUDIO TAG
         const audio1 = `<audio width= "300" height="32" controls="controls"src= " "`;
         const audio2 = `"type="audio/mp3"></audio>`;
         const embedAudio = document.querySelector("#embed-audio");
         embedAudio.value = `${audio1}${downloadLink_textArea.value}${audio2}`;
         // console.log(embedAudio.value);
 //*TO COPY THE AUDIO
 const copy_Audio = document.querySelector(".copy");
 copy_Audio.addEventListener("click", () =>{
      return copyText(embedAudio);
   });

   //? THE VIDEO TAG
   const video_doc = glink.value.replace("/view?usp=sharing", "");
   
   const video1 = `<iframe src="`;
   const video2 = `/preview" width="560" height= "315"></iframe>`;

   const emebed_video = document.querySelector("#embed-video");
   emebed_video.value = `${video1}${video_doc}${video2}`;

//? TO COPY THE VIDOE/DOCS
const copyVideo_doc = document.querySelector(".copy");
copyVideo_doc.addEventlisterner("click", ()=>{
   return copyText(emebed_video);
})
  else{
   
  }
});
      
