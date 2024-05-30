
function buildPor(){
    html=``;
    html=`
    <div class="meat">
        <div><h1>Μερίδες</h1></div>
        <div><h1>Τιμή</h1><br><br></div>
    </div>
    <div class="meat">
        <div><h2>Γυρος (Χοιρινός)</h2></div>
        <div><h2>8,90€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Σουβλάκι Κοτόπουλο (3 τμχ)</h2></div>
        <div><h2>8,50€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Σουβλάκι Χοιρινό (3 τμχ)</h2></div>
        <div><h2>8,50€</h2><br></div>
    </div>
    <div class="meat-special">
        <div><h2>Κοντοσούβλι Χοιρινό</h2></div>
        <div><h2>9,50€</h2><br></div>
    </div>
    <div class="meat-special">
        <div><h2>Κοντοσούβλι Κοτόπουλο</h2></div>
        <div><h2>9,50€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Σουντζουκάκι Πολίτικο (10τμχ)</h2></div>
        <div><h2>7,80€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Λουκάνικο (2 τμχ)</h2></div>
        <div><h2>7,00€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Μπιφτέκι Γεμιστό (2 τμχ)</h2></div>
        <div><h2>7,80€</h2><br></div>
    </div>
    <div class="meat">
        <div><h2>Κεφτεδάκι Χειροποίητο (4 τμχ)</h2></div>
        <div><h2>8,30€</h2><br><br></div>
    </div>
    <div class="meat">
        <div><h2>Πανσέτα (7 τμχ)</h2></div>
        <div><h2>8,00€</h2><br><br></div>
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
                <div><h1 id="sand">Σάντουιτς</h1></div>
                <div><h1 id="price">Τιμή</h1><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Γύρος (Χοιρινός)</h2></div>
                <div><h2>4,50€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Σουβλάκι Κοτόπουλο</h2></div>
                <div><h2>4,20€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Σουβλάκι Χοιρινό</h2></div>
                <div><h2>4,20€</h2><br></div>
            </div>
            <div class="meat-special">
                <div><h2>Κοντοσούβλι Χοιρινό</h2></div>
                <div><h2>4,60€</h2><br></div>
            </div>
            <div class="meat-special">
                <div><h2>Κοντοσούβλι Κοτόπουλο</h2></div>
                <div><h2>4,60€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Σουντζουκάκι Πολίτικο</h2></div>
                <div><h2>3,90€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Λουκάνικο</h2></div>
                <div><h2>3,80€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Μπιφτέκι Χειροποίητο</h2></div>
                <div><h2>4,20€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Μπιφτέκι Γεμιστό</h2></div>
                <div><h2>3,90€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Πανσέτα</h2></div>
                <div><h2>4,00€</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Για χορτοφαγική επιλογή ρωτήστε το προσωπικό</h2><br><br></div>
            </div>

            <div class="meat">
                <div><h3>Έξτρα Σαλάτα </h3></div>
                <div><h3>0,30€/0,40€</h3><br></div>
            </div>
            <div class="meat">
                <div><h3>Υλικά: Κρέας της επιλογής σας, ντομάτα, κρεμμύδι, κέτσαπ, μουστάρδα και πατάτες τηγανιτές.</h3><br></div>
            </div>
            <div class="meat">
                <div><h4>Όλα τα κρέατα είναι κατεψυγμένα.</h3></div>
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
                <div><h2>6,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ντάκος</h2></div>
                <div><h2>6,80€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Αγγουροντομάτα</h2></div>
                <div><h2>4,00€</h2><br></div>
            </div>
            <div class="meat">
                <div></div>
                <div><h2>Σωσάκι/Μερίδα</h2><br></div>
            </div>
            <div class="meat">
                <div><h2>Τζατζίκι</h2></div>
                <div><h2>0,60€/3,00€<br></div>
            </div>
            <div class="meat">
                <div><h2>Τυροκαυτερή</h2></div>
                <div><h2>0,80€/3,20€<br></div>
            </div>
            <div class="meat">
                <div><h2>Σώς Μουστάρδας</h2></div>
                <div><h2>0,80€/3,20€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ρώσικη</h2></div>
                <div><h2>0,80€/3,20€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Πάπρικα</h2></div>
                <div><h2>0,80€/3,20€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ουγγαρέζα</h2></div>
                <div><h2>0,80€/3,20€</h2><br><br></div>
            </div>
            <div class="meat">
                <div><h1>Συνοδευτικά</h1></div>
                <div><h1>Τιμή</h1><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Πατάτες Τηγανιτές (Μερίδα)</h2></div>
                <div><h2>3,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Φέτα</h2></div>
                <div><h2>3,50€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Χαλούμι</h2></div>
                <div><h2>4,00€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Καυτερή Πιπεριά</h2></div>
                <div><h2>1,50€</h2><br><br></div>
            </div>
            <div class="meat">
                <div><h2>Πίτα</h2></div>
                <div><h2>0,50€</h2></div>
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
                <div><h1>Τιμή</h1><br></div>
            </div>
            <div class="meat">
                <div><h2>Αναψυκτικά (330ml)</h2></div>
                <div><h2>1,70€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Αναψυκτικά (500ml)</h2></div>
                <div><h2>2,20€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Κρύο Τσάι</h2></div>
                <div><h2>2,20€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Χυμός</h2></div>
                <div><h2>1,30€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Χυμός Motion</h2></div>
                <div><h2>2,00€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Σόδα</h2></div>
                <div><h2>1,70€</h2></div>
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
                <div><h2>Μπύρα Βαρέλι (400ml)</h2></div>
                <div><h2>3,50€</h2></div>
            </div> 
            <div class="meat">
                <div><h2>Μπύρες (500ml)</h2></div>
                <div><h2>3,50€</h2></div>
            </div>        
            <div class="meat">
                <div><h2>Μπύρες (330ml)</h2></div>
                <div><h2>2.50€</h2></div>
            </div>   
            <div class="meat">
                <div><h2>Ρετσίνα (500ml)</h2></div>
                <div><h2>3,70€</h2></div>
            </div>
            <div class="meat">
                <div><h2>Ρετσίνα (Basiliki) (500ml)</h2></div>
                <div><h2>4,20€</h2></div>
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