<html>
<head> 
<title> Formulaire </title>
<meta charset"utf-8">
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script language="javascript" type="text/javascript">  
var steps = $("#SignupForm fieldset");

var count = steps.size();

steps.each(function(i) {
    $(this).wrap("<div id='step" + i + "'></div>");
    $(this).append("<p id='step" + i + "commands'></p>");

    if (i == 0) {
        createNextButton(i);        // to do
        selectStep(i);                  // to do
    }
    else if (i == count - 1) {
        $("#step" + i).hide();
        createPrevButton(i);       // to do
    }
    else {
        $("#step" + i).hide();
        createPrevButton(i);       // to do
        createNextButton(i);       // to do
}
}
</head>

<body>
<div id="contener">
<div id="bandeau">
</div>
<nav id="menu">
</nav>
Accueil > Créer dossier

<div id="formulaire">

<header>
<p>Bienvenue sur votre espace de création de dossiers.

Pensez à enregistrer vos informations avant de fermer votre dossier. Vous pouvez revenir sur votre dossier pour effectuer des modifications.

Quand vous publiez votre dossier, celui-ci est rendu public à la DRAC.</p>
</header>

<form method="post" action="ACOMPLETER.php">
<div class="date">
<label>Date de commission</label> : <input type="date" />
</div>
<div class="vous">

<fieldset>
<legend>Vos renseignements</legend>

Nom du Musée : XXX
Adresse : XXX
Directeur/Responsable : XXX
N°Téléphone : XXX
Email : XXX
<label>Personne morale qui sollicite l'avis de la commission </label>: <input type="text"/>

BOUTON MODIFIER
</fieldset>

<div class="barre">
1- Vos renseignements
2- Renseignements objets
3- Mode d'acquisition
4- Pièces justificatives
</div>

<input type="submit" value="Enregistrer" /> 
</form>
</div>
</div>
</body>
</html>