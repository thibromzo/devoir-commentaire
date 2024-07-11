document.getElementById("donner").addEventListener("submit", function(e){

    var prenom = document.getElementById("first-name")
    var nom = document.getElementById("last-name");
    var commentaire = document.getElementById("message");
    var erreur = document.getElementById("error-message");
  
   
    //Il faut que tous les champs soient remplis
    if (prenom.value == "" || nom.value == "" || commentaire.value == "") {
      e.preventDefault()
      erreur.style.display = "block";
    } 
    //si les champs sont remplis alors afficher les données remplis par l'utilisateur et effacer les champs remplis 
    else {
      e.preventDefault();
      erreur.style.display = "none" //effacer l'erreur 
  
      var liste = document.getElementById("comment-list");
  
      const divcopy = document.createElement ("divcopy");
  
  //afficher les données
        divcopy.innerHTML = 
          '<hr>' +
          '<div class="flex space-x-4 text-sm text-gray-500 ">' +
            '<div class= "flex-1 py-10  border-t border-gray-200" >' +
              '<h3 class="font-medium text-gray-900" style="word-wrap: break-word;">' + prenom.value + " " + nom.value + '</h3>' +
              '<div class="prose prose-sm mt-4 max-w-none text-gray-500">' +
                '<p>' + commentaire.value + '</p>' +
              '</div>' +
            '</div>' +
          '</div>';
      liste.appendChild(divcopy)
  
  //effacer les champs
      document.getElementById('donner').reset(); // Effacer tout le contenu HTML de l'élément
    }
  });