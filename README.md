# [Nom de ton site ou projet]

Ce projet est un site web généré par [Blink AI](https://blink.ai) et hébergé via GitHub Pages.

## 🚀 Démo en direct

Tu peux voir le site en ligne ici : *[Ajoute ici l'URL de ton site GitHub Pages, ex: https://ton-pseudo.github.io/ton-repo]*

## 🛠️ Technologies utilisées

* *Génération IA :* Blink AI
* *Hébergement :* GitHub Pages
* *Frontend :* HTML, CSS, JavaScript (Modifie cette ligne si ton site utilise React, Vue ou Vite)

## ⚙️ Configuration GitHub Pages (Résolution d'écran blanc)

Si le site affiche un écran blanc avec un logo de chargement lors du déploiement sur GitHub Pages, cela est généralement dû à un problème de chemins d'accès vers les fichiers statiques (CSS/JS).

*Pour corriger cela :*
1. Assurez-vous que les chemins d'accès dans le fichier index.html sont *relatifs*. 
   * ❌ Faux : <script src="/main.js"></script>
   * ✅ Correct : <script src="./main.js"></script> (Ajoutez le .)
2. Dans les paramètres de votre répertoire GitHub (*Settings > Pages*), assurez-vous que la source de déploiement pointe vers la bonne branche (généralement main ou master) et le bon dossier racine.

## 💻 Développement en local

Pour faire tourner ce projet sur ta machine locale :

1. Clone ce répertoire :
   ```bash
   git clone [https://github.com/](https://github.com/)[ton-pseudo]/[nom-du-repo].git
