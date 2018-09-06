        var monTableau = [];




        //@@@@@@@@@@@@@@@@@@@@@@ CONSTRUCTEUR DE MES OBJETS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       

        var Produit = function(x, y, z, p) {

            this.marque = x;
            this.modele = y;
            this.annee = z;
            this.prix = p;

        }

        //@@@@@@@@@@@@@@@@@@@@@@ CONSTRUCTEUR DE MES OBJETS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  


        
        
        

        //@@@@@@@@@@@@@@@@@@@@@@ PROTOTYPE DE MON CONSTRUCTEUR @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

        Produit.prototype.prod = function() {


//            console.log( "Marque : " + this.marque + "; " + " Modèle : " +this.modele + "; " + " Année :" + this.annee + "; "  + " Budget :" + this.prix);

        }

        //@@@@@@@@@@@@@@@@@@@@@@ PROTOTYPE DE MON CONSTRUCTEUR @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 




        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI RENVOIE LA LONGUEUR DE MON TABLEAU @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 


        var nmbr = function() {


            bouton.addEventListener("click", function() {

                if (monTableau.length == 1) {

                    console.log("Votre panier contient " + monTableau.length + " article");

                } else {

                    console.log("Votre panier contient " + monTableau.length + " articles");
                }



            })
        }


        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI RENVOIE LA LONGUEUR DE MON TABLEAU @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@








        


        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI RECUPERE LES VALEURS DU FORMULAIRES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


        var recupereValeur = function() {


            



            var marqueProd = document.getElementById("prod").value;
            var modeleProd = document.getElementById("modeleprod").value;
            var anneeProd = document.getElementById("anneeprod").value;
            var prixProd = document.getElementById("budget").value;




            var valeursProds = new Produit(marqueProd, modeleProd, anneeProd, prixProd);
//            monTableau.push(valeursProds);



//            console.log(monTableau);
            valeursProds.prod();
            console.log(valeursProds);
        }

        
           

   

        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI RECUPERE LES VALEURS DU FORMULAIRES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
            
            

             
        
        
        
        
        
        
        
        
        
        
        
        
        

        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI CREER DES DIVS ET AFFICHES LES ANNONCES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        
        var recherche = function(){
            
   
            
            
            var marqueProd = document.getElementById("prod").value;
            var modeleProd = document.getElementById("modeleprod").value;
            var anneeProd = document.getElementById("anneeprod").value;
            var prixProd = document.getElementById("budget").value;


            
            
            
     var genererDiv = document.createElement("div");
    genererDiv.style.width = "300px";
    genererDiv.style.height = "200px";
    genererDiv.style.overflow = "auto";
    genererDiv.style.margin = "10px";
    genererDiv.style.border = "2px solid black";
    genererDiv.innerHTML= " Marque : " + marqueProd + " <br> " + " Modèle : " + modeleProd + "<br>" + " Année : "  + anneeProd + "<br>" + "Budget  :" + prixProd + "<br>";
    var divAfficheAnnonce = document.getElementById("recherche").appendChild(genererDiv);
            
            
            


            var valeursProds = new Produit(marqueProd, modeleProd, anneeProd, prixProd);
             monTableau.push(valeursProds);
            
            
        var divResultat = document.getElementById("annonce");    
        }

           //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI CREER DES DIVS ET AFFICHES LES ANNONCES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               
        
        
        
        
        
        
      
        
        
        var sharingan = function(){
    

            
  var divShari = document.getElementsByClassName("boites");
  var divParent = document.getElementById("parentshari");
       
            
        
            
              
               
            divParent.addEventListener("mouseenter", function(){
    
    for (let i = 0; i < divShari.length; i++){
        
          divShari[i].classList.toggle("sharigan");
    
        
        
    }
    
    
})
                   
                   
                   
                   
                   
   
            divParent.addEventListener("mouseleave", function(){
    
    for (let i = 0; i < divShari.length; i++){
        
          divShari[i].classList.toggle("sharigan");
     
    }
    
    
})
        }
   
        
        
              
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        bouton.addEventListener("click", function() {


               recherche();
            recupereValeur();

        })

        //@@@@@@@@@@@@@@@@@@@@@@ FONCTION QUI RECUPERE LES VALEURS DU FORMULAIRES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



        var start = function(){

              
         
            sharingan();
             nmbr();

        }
        
        window.addEventListener("DOMContentLoaded", start);

        
        
        

        
        
        
    
        
        
        
        





  
