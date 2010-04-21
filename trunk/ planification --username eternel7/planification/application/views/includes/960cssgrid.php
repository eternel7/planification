<?php
/**
 * template utilisé pour renvoyer une balise div de class grid_[$size]
 * d'id [$prefixe]_[$chrono]
 * @global $chrono compteur incrémental sur la page pour différentier les identifiant des balises div
 * @param int $size taille de la balise div fixée via la class grid_[size] selon le modèle 960 grid (http://960.gs/)
 * @param string $prefixe prefixe de l'identifiant avant le compteur incrémental
 * @param int $numtab nombre de tabulation pour la mise en forme
 * @return string balise div html refermée
 */
if (!isset($size) || $size=="" || !is_int($size))
{
    $size=1;
}
if (!isset($prefixe) || $prefixe=="" || !is_string($prefixe))
{
    $prefixe = "top";
}
if (!isset($numtab) || $numtab=="" || !is_int($numtab))
{
    $numtab = 0;
}
if (!isset($content) || $content=="" || !is_string($content))
{
    $content="&nbsp;";
}
//chargement de la variable global chrono et incrémentation
global $chrono;
if (!isset($chrono) || $chrono=="" || !is_int($chrono))
{
    $chrono=0;
}
$chrono++;

//initialisation du texte renvoyé
$grid="";

//ajout des tabulations avant la balise div
for ($i = 1 ; $i <= $numtab ; $i++)
{
    $grid.="\t";
}

$grid.="<div id=\"".$prefixe."_".$chrono."\" class=\"grid grid_".$size." \">".$content."\n";

//ajout des tabulations avant clôture
for ($i = 1 ; $i <= $numtab ; $i++)
{
    $grid.="\t";
}
//clôture de la balise div avec saut à la ligne
$grid.="</div>\n";

echo $grid;