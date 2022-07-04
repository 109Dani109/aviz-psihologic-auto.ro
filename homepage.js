
// let btnMessage = document.getElementById("btnMessage");

// document.addEventListener("scroll" , () =>{
//     addActiveClass() });


// function addActiveClass() {
//     let scrolled = window.scrollY;

//     if(scrolled > 130) {
//         btnMessage.style.right="0px"; 
//         btnMessage.classList.add("pulseAnimation");
//     } else {
//         btnMessage.style.right="-100px";  
//         btnMessage.classList.remove("pulseAnimation");   
//     }
// }


let footer = document.querySelector(".footer");

let copyRight = document.querySelector(".copyRight");

let dropdowncontent = document.querySelector(".dropdown-content");

let header = document.querySelector("header");

let navTop = document.querySelector(".navDesc");

navTop.innerHTML = `
<a href="https://psyhology.ro">
            <div class="logo" >
                <img id="logo" width="160px" height="180px" alt="aviz psihologic" title="aviz psihologic permis auto / obtinere permis conducere" src="Photos/LogoDorobantiPerla.png">
            </div>
           </a> 

        

              <div class="locationNav">
                  <i class="fas fa-map-marked-alt"></i>
                  <div>
                    Dorobanţi - Perla <br>
                    Soseaua Stefan cel Mare Nr. 1-3 Bloc Perla Sc. 2 Et. 3<br>
                    Bucuresti Sector 1
                 </div>
              </div>
            
              
              <div class="phoneNav">
                  <i class="fad fa-phone-volume"></i>
                  <div>
                      0737 129 122<br>
                       
                  </div>
              </div>
            
              <div class="programNav">
                  <i class="far fa-clock"></i>
                  <div>
                      Luni-Vineri <br>
                      9:00 - 21:00
                      
                  </div>
                
                  <div>
                    Sâmbătă <br>
                    9:00 - 16:00
                    
                </div>
              
              </div>
            
              <div  style="text-align: center;" class="program">
              
                <h3 style="padding-bottom: 5px;">Program</h3> 
                  
                  <p> Luni-Vineri : 9:00 - 21:00</p> 
                  <p style="padding-left: 15px;"> Sâmbătă : 9:00 - 16:00</p>
              
              </div>`;


// header.innerHTML = `
//   <div  class="rightJS li"><div>Centru psihologic Bucuresti sector 1 , oferim <strong> aviz</strong> psihologic soferi profesionisti ,<strong> aviz</strong>  obtinere permis auto, <strong> aviz</strong> port arma, clinica. </div></div>`;  

// setTimeout(()=>{
//   document.querySelector(".rightJS").style.color="white";
// },800)

footer.innerHTML = `  <div class="dateContact">
<h1> Date de contact:</h1>
<p> <i class="fas fa-map-marker-alt"></i> Dorobanţi - Perla <br> <span style="padding-left: 18px;">Soseaua Ștefan cel Mare nr 1-3 <br> </span>  <span style="padding-left: 18px;"> Bl. Perla Sc. 2 Et. 3 ap. 54 Interfon 054 <br>  <span style="padding-left: 18px;"> Bucuresti, Sector 1 <br>  </span> </p>
<br><br>
<p> <i class="fas fa-phone-alt"></i> 0737 129 122 <br> <span style="padding-left: 20px;"> </span></p>
<br><br>
<a  href="mailto:consultatie@psyhology.ro" class="emailBox">
<i class="far fa-envelope" > </i> consultatie@psyhology.ro
</a>
<br><br>
</div>



<div  class="text">

<h1> Informaţii utile:</h1>
<a  href="informatii-utlie.html#gdpr" >
     GDPR
</a>

<a  href="informatii-utlie.html#termenisiconditii" >
    Termeni Si Condiţii
</a>
<a  href="informatii-utlie.html#politicaconfidentialitate" >
    Politica de confidentialitate
</a>
<a  href="informatii-utlie.html#notainformare" >
    Nota de informare  
</a>
<a  href="informatii-utlie.html#cookies" >
    Politica de cookies 
</a>

</div>

<div" class="map">
<h1> Unde ne gasiţi? </h1>

<iframe id="map" style="border-radius: 10px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.9992325938!2d26.09809957205988!3d44.45370269630567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f8ac3ea4e307%3A0x529ef55b99bbfb6a!2s%C8%98oseaua%20%C8%98tefan%20cel%20Mare%201-3%2C%20Bucure%C8%99ti%20011736!5e0!3m2!1sen!2sro!4v1642773019509!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>`;


copyRight.innerHTML = ` <div class="logoFooter">
<img id="logo" style="width:160px; height:160px" alt="aviz" title="aviz psihologic auto" src="Photos/LogoDorobantiPerla.png">
</div>
Copyright © 2022 
<br> <br>
<p style="font-weight: bold;font-size: 115%;"> Centrul De Evaluare Psihologica "Dorobanţi - Perla"  </p> 
<br>
BUCURESTI SECTOR 1 `;

dropdowncontent.innerHTML = `
  <a href="https://avizportarma.ro">AVIZ PSIHOLOGIA
  APĂRĂRII </a>
  <a href="https://psyhology.ro/pshihologia-tranporturilor.html"> AVIZ PSIHOLOGIA
  TRANSPORTURILOR </a>
  <a href="https://aviz-psihologic-auto.ro">AVIZ OBȚINERE PERMIS CONDUCERE</a>
  <a href="https://psyhology.ro/pshihologia-muncii-medicina-muncii.html#table">AVIZ Psihologia Muncii  </a>
  <a href="https://psyhology.ro/evaluare-clinica.html">PSIHOLOGIE
    CLINICA & PSIHIATRIE </a>;`;


/* Vanilla JS */

// var rightJS = {
//   init: function(){
    
//       rightJS.Tags = document.querySelectorAll('.rightJS');
//       for(var i = 0; i < rightJS.Tags.length; i++){
//         rightJS.Tags[i].style.overflow = 'hidden';
//       }
//       rightJS.Tags = document.querySelectorAll('.rightJS div');
//       for(var i = 0; i < rightJS.Tags.length; i++){
//         rightJS.Tags[i].style.position = 'relative';
//         rightJS.Tags[i].style.right = '-'+rightJS.Tags[i].parentElement.offsetWidth+'px';
//       }
//       rightJS.loop();
    
   
//   },
//   loop: function(){
//     for(var i = 0; i < rightJS.Tags.length; i++){
//       var x = parseFloat(rightJS.Tags[i].style.right);
//       x ++;
//       var W = rightJS.Tags[i].parentElement.offsetWidth;
//       var w = rightJS.Tags[i].offsetWidth;
//       if((x/100) * W  > w) x = -W;
//       if (rightJS.Tags[i].parentElement.parentElement.querySelector(':hover') !== rightJS.Tags[i].parentElement) rightJS.Tags[i].style.right = x + 'px';
//     } 
//     requestAnimationFrame(this.loop.bind(this));
//   }
// };
// window.addEventListener('load',rightJS.init);

// /* JQUERY */

// setTimeout(function(){
 
//   }, 3000)

// $(function(){
//   var rightJQ = {
//     init: function(){
//       $('.rightJQ').css({
//         overflow: 'hidden'
//       });
//       $('.rightJQ').on('mouseover',function(){
//         $('div', this).stop();
//       });
//       $('.rightJQ').on('mouseout',function(){
//         $('div', this).animate({
//           right: '100%'
//         }, 16000, 'linear' );
//       });
//       rightJQ.loop();
//     },
//     loop: function(){
//       $('.rightJQ div').css({
//         position: 'relative',
//         right: '-100%'
//       }).animate({
//         right: '100%'
//       }, 16000, 'linear', rightJQ.loop);
//     }
//   };
//   rightJQ.init();
// });



// seo bar


var $tickerWrapper = $(".tickerwrapper");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 10;

$list.find("li").each(function (i) {
			listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrapper.width() - listWidth;

$list.add($clonedList).css({
	"width" : listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({repeat: -1, paused: false});
var time = 40;

infinite
  .fromTo($list, time, {rotation:0.01,x:0}, {force3D:true, x: -listWidth, ease: Linear.easeNone}, 0)
  .fromTo($clonedList, time, {rotation:0.01, x:listWidth}, {force3D:true, x:0, ease: Linear.easeNone}, 0)
  .set($list, {force3D:true, rotation:0.01, x: listWidth})
  .to($clonedList, time, {force3D:true, rotation:0.01, x: -listWidth, ease: Linear.easeNone}, time)
  .to($list, time, {force3D:true, rotation:0.01, x: 0, ease: Linear.easeNone}, time)
  .progress(1).progress(0)
  .play();

//Pause/Play		
$tickerWrapper.on("mouseenter", function(){
	infinite.pause();
}).on("mouseleave", function(){
	infinite.play();
});

// seo bar

// title add bucuresti sector 1 dorobanti perla for seo

document.title+= ", Bucuresti Sector 1, Dorobanţi - Perla";

// title add bucuresti sector 1 dorobanti perla for seo
