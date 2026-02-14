const titleText="Happy Birthday 🎉";
const paragraph1="Selamat ulang tahun! 🎂Semoga makin keren, makin sukses, dan jangan lupa tetap jadi diri sendiri yang seru dan baik hati. Semoga tahun ini lebih banyak tawa daripada drama ya!";
const paragraph2="Semoga di usia yang baru ini kamu diberikan kesehatan, kebahagiaan, rezeki yang lancar, dan selalu dikelilingi orang-orang yang sayang sama kamu. Terima kasih sudah jadi saudara terbaik!";
const paragraph3="Teruslah jadi pribadi yang kuat, rendah hati, dan penuh semangat. Aku selalu bangga punya saudara seperti kamu. Semoga semua impianmu tercapai dan kamu selalu dikelilingi kebahagiaan.";
const paragraph4="Sekali lagii... Selamat hari ulang tahun ! 🎉 Semoga tahun ini penuh dengan petualangan seru, tawa yang tak berakhir, dan semua hal baik yang kamu impikan. kita selalu ada di sini untuk mendukungmu, jadi jangan ragu untuk berbagi cerita dan momen bahagiamu. Semoga hari spesialmu ini menjadi awal dari babak baru yang penuh kebahagiaan dan kesuksesan! 🎂🎈";
const paragraph5="Sekali lagii... Selamat menuaaa ! 🎉🎂🎈";

const titleElement=document.getElementById("title");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const p3=document.getElementById("p3");
const p4=document.getElementById("p4");
const p5=document.getElementById("p5");

function openLetter(){
  const envelope = document.getElementById("envelope");
  const bgMusic = document.getElementById("bgMusic");
  
  envelope.classList.remove("close");
  envelope.classList.add("open");
  
  // Play music from 59 seconds
  bgMusic.currentTime = 59;
  bgMusic.play().catch(err => console.log("Audio play failed:", err));

  setTimeout(()=>{
    document.getElementById("opening").style.display="none";
    document.getElementById("main-content").style.display="flex";
    typeTitle();
  }, 2500);
}

let index=0;
function typeTitle(){
  if(index<titleText.length){
    titleElement.innerHTML+=titleText.charAt(index);
    index++;
    setTimeout(typeTitle,120);
  }else{
    setTimeout(()=>{
      typeParagraph(paragraph1,p1,()=>{
        typeParagraph(paragraph2,p2,()=>{
          typeParagraph(paragraph3,p3,()=>{
            typeParagraph(paragraph4,p4,()=>{
              typeParagraph(paragraph5,p5);
            });
          });
        });
      });
    },300);
  }
}

function typeParagraph(text,element,callback){
  let i=0;
  function typing(){
    if(i<text.length){
      element.innerHTML+=text.charAt(i);
      i++;
      setTimeout(typing,45);
    }else if(callback){
      setTimeout(callback,400);
    }
  }
  typing();
}
