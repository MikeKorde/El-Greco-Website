
function buildPor(){
html=``;
html=`
<div class="meat">
    <div><h1>Portions</h1></div>
    <div><h1>Price</h1><br><br></div>
</div>
<div class="meat">
    <div><h2>Gyros (Pork)</h2></div>
    <div><h2>8,90€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Souvlaki Chicken(3 pcs)</h2></div>
    <div><h2>8,50€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Souvlaki Pork (3 pcs)</h2></div>
    <div><h2>8,30€</h2><br></div>
</div>
<div class="meat-special">
    <div><h2>Kontosouvli Pork</h2></div>
    <div><h2>9,50€</h2><br></div>
</div>
<div class="meat-special">
    <div><h2>Kontosouvli Chicken</h2></div>
    <div><h2>9,50€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Seash Kebab (10pcs)</h2></div>
    <div><h2>7,80€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Sausage (2 pcs)</h2></div>
    <div><h2>7,00€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Meatball stuffed with cheese (2 pcs)</h2></div>
    <div><h2>7,80€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Meatball Handmade (4 pcs)</h2></div>
    <div><h2>8,30€</h2><br><br></div>
</div>
<div class="meat">
    <div><h2>Pork belly (pancetta 7pcs)</h2></div>
    <div><h2>8,00€</h2><br><br></div>
</div>
<div class="meat">
    <div><h3>Ingredients: Meat of your choice, Tomato, Onion, Salad of your Choice and French Fries.</h3><br></div>
</div>
<div class="meat">
    <div><h4>All meat are frozen.</h3></div>
</div>
</div>`
document.querySelector('#menu-items').innerHTML=html;

}

function buildSand(){
    html=``;
    html=`<div class="meat">
    <div><h1>Sandwich</h1></div>
    <div><h1>Price</h1><br><br></div>
</div>
<div class="meat">
    <div><h2>Gyros (Pork)</h2></div>
    <div><h2>4,50€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Souvlaki Chicken</h2></div>
    <div><h2>4,20€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Souvlaki Pork</h2></div>
    <div><h2>4,20€</h2><br></div>
</div>
<div class="meat-special">
    <div><h2>Kontosouvli Pork</h2></div>
    <div><h2>4,60€</h2><br></div>
</div>
<div class="meat-special">
    <div><h2>Kontosouvli Chicken</h2></div>
    <div><h2>4,60€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Seash Kebab</h2></div>
    <div><h2>3,90€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Sausage</h2></div>
    <div><h2>3,80€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Meatball Handmade</h2></div>
    <div><h2>3,90€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Meatball Stuffed with Chesse</h2></div>
    <div><h2>3,90€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Pork belly (pancetta)</h2></div>
    <div><h2>4,00€</h2><br></div>
</div>
<div class="meat">
    <div><h2>Ask for Vegeterian option</h2><br><br></div>
</div>
<div class="meat">
    <div><h3>Extra Salad</h3></div>
    <div><h3>0,30€/0,40€</h3><br></div>
</div>
<div class="meat">
    <div><h3>Ingredients: Meat of your choice, Tomato, Onion, Ketchup, Mustard and French fries.</h3><br></div>
</div>
<div class="meat">
    <div><h4>All meat are frozen.</h3></div>
</div>
    `;
    
    document.querySelector('#menu-items').innerHTML=html;
    
    }
function buildEx(){
    html=``;
    html=`
    <div id="menu-items">
        <div class="meat">
            <div><h1>Salads</h1></div>
            <div><h1>Price</h1><br><br></div>
        </div>
        <div class="meat">
            <div><h2>Greek Salad</h2></div>
            <div><h2>6,50€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Dakos</h2></div>
            <div><h2>6,80€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Tomato and Cocumber Salad</h2></div>
            <div><h2>4,00€</h2><br></div>
        </div>
        <div class="meat">
            <div></div>
            <div><h2>Dip/Portion</h2><br></div>
        </div>
        <div class="meat">
            <div><h2>Tzatziki</h2></div>
            <div><h2>0,60€/3,00€<br></div>
        </div>
        <div class="meat">
            <div><h2>Feta Cheese Sauce</h2></div>
            <div><h2>0,80€/3,20€<br></div>
        </div>
        <div class="meat">
            <div><h2>Mustard & Mayo</h2></div>
            <div><h2>0,80€/3,20€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Mayo & Vegetables</h2></div>
            <div><h2>0,80€/3,20€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Paprika</h2></div>
            <div><h2>0,80€/3,20€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Mayo & Ham</h2></div>
            <div><h2>0,80€/3,20€</h2><br><br></div>
        </div>
        <div class="meat">
            <div><h1>Extras</h1></div>
            <div><h1>Price</h1><br><br></div>
        </div>
        <div class="meat">
            <div><h2>Fried Potatoes (Portion)</h2></div>
            <div><h2>3,50€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Feta</h2></div>
            <div><h2>3,50€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Halloumi Cheese</h2></div>
            <div><h2>4,00€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Pepper (Spicy)</h2></div>
            <div><h2>1,50€</h2><br><br></div>
        </div>
        <div class="meat">
            <div><h2>Pita Pan</h2></div>
            <div><h2>0,50€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Bread</h2></div>
            <div><h2>0,60€</h2><br><br><br></div>
        </div>
        <div>
    </div>`;
        
        document.querySelector('#menu-items').innerHTML=html;
        
        }

function buildDr(){
    html=``;
    html=`
    <div id="menu-items">
        <div class="meat">
            <div><h1>Non Alcoholic Drinks</h1></div>
            <div><h1>Price</h1><br></div>
        </div>
        <div class="meat">
            <div><h2>Refreshments (330ml)</h2></div>
            <div><h2>1,70€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Refreshments (500ml)</h2></div>
            <div><h2>2,20€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Ice Tea</h2></div>
            <div><h2>2,20€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Juice</h2></div>
            <div><h2>1,30€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Juice Motion</h2></div>
            <div><h2>2,00€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Sparkling Water</h2></div>
            <div><h2>1,70€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Water (500ml)</h2></div>
            <div><h2>0,50€</h2><br><br></div>
        </div>
        <div class="meat">
            <div><h1>Alcoholic Drinks</h1></div>
            <div><h1>Price</h1><br></div>
        </div>
        <div class="meat">
            <div><h2>Draft Beer (400ml)</h2></div>
            <div><h2>3,50€</h2></div>
        </div> 
        <div class="meat">
            <div><h2>Beer (500ml)</h2></div>
            <div><h2>3,50€</h2></div>
        </div>        
        <div class="meat">
            <div><h2>Beer (330ml)</h2></div>
            <div><h2>2.50€</h2></div>
        </div>   
        <div class="meat">
            <div><h2>Retsina (500ml)</h2></div>
            <div><h2>3,70€</h2></div>
        </div>
        <div class="meat">
            <div><h2>Retsina (Basiliki) (500ml)</h2></div>
            <div><h2>4,20€</h2></div>
        </div>     
        <div class="meat">
            <div><h2>Wine</h2></div>
            <div><h2>4,00€</h2><br><br></div>
        </div> 
        <div class="meat">
                <div><h3> &#9888; It is illegal to sell alcohol to anyone under the age of 18!.</h3></div>
            </div>
    </div>`;
    
    document.querySelector('#menu-items').innerHTML=html;
    
    }

    // Get the button:
let mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
var  flag=0;
$(document).ready(function(){
    $("#NavBut").click(function(){ 
      if(flag==0){
        $("#hdnav").slideDown("slow");
        console.log("Down");
        flag=1;
        
      }
      else{
        $("#hdnav").slideUp("slow");
        console.log("UP");
        flag=0;
      }
    });
  });
  
  $('.hide').click(function(){
    $("#hdnav").slideUp("slow");
    
    flag=0;
  })

  $( document ).ready(function() {
});


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElementsL = document.querySelectorAll('.hiddenL');
hiddenElementsL.forEach((el)=> observer.observe(el));

const hiddenElementsR = document.querySelectorAll('.hiddenR');
hiddenElementsR.forEach((el)=> observer.observe(el));

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));