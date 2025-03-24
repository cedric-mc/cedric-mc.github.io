import hourglass from './hourglass.png';
import scores from './scores.png';
import tailleDesBoules from './taille-des-boules.png';
import dynamique from './dynamique.png';
import terminaison from './terminaison.png';
import obstacles from './obstacles.png';

export function BatailleBoules() {
  return (
    <div>
      <p>
        Le but du jeu est simple, occupé le plus d'espace possible sur l'aire de jeu avec votre couleur.<br />
        Vous pourrez sélectionner des variantes pour pimenter votre jeu, 
        un couple de couleur pour décider de votre couleur en tant que joueur, 
        choisir un pseudo pour le joueur (un pseudo par défaut est disponible si vous n'entrez rien), 
        enfin entrer le nombre de tours (par défaut 5 minimum).
      </p>
      <h5 className="caption-title">Les Variantes du jeu Bataille des Boules</h5>
      <p>
        Vous pouvez jouer avec 6 variantes différentes : 
        <img src={hourglass} className="p-img" alt="sablier" /> le Sablier,
        <img src={scores} className="p-img" alt="scores" /> les Scores,
        <img src={tailleDesBoules} className="p-img" alt="taille-des-boules" /> la Taille de Boules,
        <img src={dynamique} className="p-img" alt="dynamique" /> la Version Dynamique, 
        <img src={terminaison} className="p-img" alt="terminaison" /> la Terminaison et 
        <img src={obstacles} className="p-img" alt="obstacles" /> les Obstacles.
      </p>
    </div>
  )
}