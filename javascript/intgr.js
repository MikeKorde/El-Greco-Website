
function buildPor(){
    html=``;
    html=`
    <div class="meat">
        <div><h1>Μερίδες</h1></div>
        <div><h1>Τιμή</h1><br><br></div>
    </div>
    <div class="meat">
        <div><h2>Γυρος (Χοιρινός)</h2></div>
        <div><h2>8,00€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Souvlaki Chicken(3 pcs)</h2></div>
        <div><h2>7,50€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Souvlaki Pork (3 pcs)</h2></div>
        <div><h2>7,50€</h2><br></div>
    </div>
    <div class="meat-special">
        <div><h2>Κοντοσούβλι Χοιρινό</h2></div>
        <div><h2>8,50€</h2><br></div>
    </div>
    <div class="meat-special">
        <div><h2>Κοντοσούβλι Κοτόπουλο</h2></div>
        <div><h2>8,50€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Σουντζουκάκι Πολίτικο (10τμχ)</h2></div>
        <div><h2>7,00€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Λουκάνικο (2 τμχ)</h2></div>
        <div><h2>6,50€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Μπιφτέκι Γεμιστό (2 τμχ)</h2></div>
        <div><h2>7,00€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Κεφτεδάκι Χειροποίητο (4 τμχ)</h2></div>
        <div><h2>7,50€</h2><br><br></div>
    </div>
    <div class="meat">
        <div><h3>Υλικά: Κρέας της επιλογής σας, ντομάτα, κρεμμύδι, σαλάτα της επιλογής σας και πατάτες τηγανιτές</h3><br></div>
    </div>
    <div class="meat">
        <div><h4>Όλα τα κρέατα είναι κατεψυγμενα.</h3></div>
    </div>
    </div>`
    document.querySelector('#menu-items').innerHTML=html;
    
    }
    
    function buildSand(){
        html=`
        <div class="meat">
                <div><h1 id="sand"><span id="sand">Sandwich</h1></div>
                <div><h1 id="price"><span id="price">Price</h1><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Gyros (Pork)</h2></div>
                <div><h2>3,90€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Souvlaki Chicken</h2></div>
                <div><h2>3,50€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Souvlaki Pork</h2></div>
                <div><h2>3,40€</h2><br></div>
            </div>
            <div class="meat-special">
                <div><h2>Kontodouvli Pork</h2></div>
                <div><h2>4,00€</h2><br></div>
            </div>
            <div class="meat-special">
                <div><h2>Kontosouvli Chicken</h2></div>
                <div><h2>4,00€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Seash Kebab</h2></div>
                <div><h2>3,20€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Sausage</h2></div>
                <div><h2>2,90€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Meatball Handmade</h2></div>
                <div><h2>3,40€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Meatball Stuffed with Chesse</h2></div>
                <div><h2>3,20€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Pita with Potatoes</h2></div>
                <div><h2>2,80€</h2><br><br></div>
            </div>

            <div class="meat">
                <div><h3>Extra Salad</h3></div>
                <div><h3>0,30€</h3><br></div>
            </div>
            <div class="meat">
                <div><h3>Ingedients: Meat of your choice, Tomato, Onion, Ketchup, Mustard and French fries.</h3><br></div>
            </div>
            <div class="meat">
                <div><h4>All meat are frozen.</h3></div>
            </div>`;
        
        document.querySelector('#menu-items').innerHTML=html;
        
        }
    function buildEx(){
        html=``;
        html=`
        <div id="menu-items">
            <div class="meat">
                <div><h1>Σαλάτες</h1></div>
                <div><h1>Τιμή</h1><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Χωριάτικη</h2></div>
                <div><h2>5,00€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Αγγουροντομάτα</h2></div>
                <div><h2>3,00€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Τζατζίκι</h2></div>
                <div><h2>0,60€/2,80€<br></div>
            </div>
            <div class="meat">
                <div><h2>Τυροκαυτερή</h2></div>
                <div><h2>0,60€/2,80€<br></div>
            </div>
            <div class="meat">
                <div><h2>Σώς Μουστάρδας</h2></div>
                <div><h2>0,60€/2,80€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ρώσικη</h2></div>
                <div><h2>0,60€/2,80€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Πάπρικα</h2></div>
                <div><h2>0,60€/2,80€</h2><br><br></div>
            </div>
            <div class="meat">
                <div><h1>Συνοδευτικά</h1></div>
                <div><h1>Τιμή</h1><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Πατάτες Τηγανιτές (Μερίδα)</h2></div>
                <div><h2>2,80€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Φέτα</h2></div>
                <div><h2>2,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Καυτερή Πιπεριά</h2></div>
                <div><h2>1,00€</h2><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Πίτα</h2></div>
                <div><h2>0,40€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ψωμάκι</h2></div>
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
                <div><h1>Μη Αλκοολούχα Ποτά</h1></div>
                <div><h1>Price</h1><br></div>
            </div>
            <div class="meat">
                <div><h2>Αναψυκτικά (330ml)</h2></div>
                <div><h2>1,30€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Αναψυκτικά (500ml)</h2></div>
                <div><h2>1,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Κρύο Τσάι</h2></div>
                <div><h2>1,80€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Χυμός</h2></div>
                <div><h2>1,30€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Σόδα</h2></div>
                <div><h2>1,30€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Νερό (500ml)</h2></div>
                <div><h2>0,50€</h2><br><br></div>
            </div>
            <div class="meat">
                <div><h1>Αλκοολούχα Ποτά</h1></div>
                <div><h1>Τιμή</h1><br></div>
            </div>
            <div class="meat">
                <div><h2>Μπύρα Βαρέλι (500ml)</h2></div>
                <div><h2>3,00€</h2></div>
            </div> 
            <div class="meat">
                <div><h2>Μπύρα Βαρέλι (330ml)</h2></div>
                <div><h2>2,30€</h2></div>
            </div> 
            <div class="meat">
                <div><h2>Μπύρες (500ml)</h2></div>
                <div><h2>3,50€</h2></div>
            </div>        
            <div class="meat">
                <div><h2>Μπύρες (330ml)</h2></div>
                <div><h2>2.30€</h2></div>
            </div>   
            <div class="meat">
                <div><h2>Ρετσίνα (500ml)</h2></div>
                <div><h2>3,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ρετσίνα (Basiliki) (500ml)</h2></div>
                <div><h2>3,50€</h2></div>
            </div>     
            <div class="meat">
                <div><h2>Κρασί</h2></div>
                <div><h2>4,00€</h2><br><br></div>
            </div> 
            <div class="meat">
                    <div><h3> &#9888; Απαγορεύεται η πώληση αλκοολούχων ποτών σε άτομα κάτω των 18 ετών.</h3></div>
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