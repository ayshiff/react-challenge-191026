### HETIC - Challenge [![CircleCI](https://circleci.com/gh/ayshiff/hetic-challenge.svg?style=svg)](https://circleci.com/gh/ayshiff/hetic-challenge) [![Coverage Status](https://coveralls.io/repos/github/ayshiff/hetic-challenge/badge.svg?branch=master)](https://coveralls.io/github/ayshiff/hetic-challenge?branch=master)

Liste des membres du groupe:

- Alice Fabre
- Amaury Faveriel
- Clara de Langenhagen
- Corentin Croizat
- Cristophe Charlebois
- Rémi Doreau

Adresse du serveur:

51.158.111.46

## FrontEnd

ReactJS - Typescript - Redux - RxJS - Redux-Observable

### BackEnd

Symfony - API Platform - MySQL

### Fonctionnement du store

![Fonctionnement](https://snipcart.com/media/203947/how-redux-works.png)

## Features

### L'admin

- [ ] créer une promo ( quand on est administrateur ) ⇒ génère les colonnes
- cursus ( web, marketing, 3D)
- année diplomante (ex: P2020)
- liste intervants
- upload fichier Excel (minimum nom/prénom/mail )
- choix des compétences ( checkbox des compétences habituelles + ajouter une compétences → donner un nom )
- [ ] ⇒ génère un tableau avec colonnes nommées + 3 lignes vides
- [ ] création de compte/ suppression de compte ⇒ indique le statut ( élève ou intervenant )

### L'intervenant

- [ ] authentification/ deconnexion
- [ ] ajouter/ éditer note d'un élève (indicateur mauvaise lettre)
- [ ] recherche élève en particulier → barre de recherche
- [ ] Former groupes de projets équilibrés en terme de compétences
- choisir la/les promo.s
- nombre de personne minimum par groupe
- date début et fin
- lancer l'algo → affichage des groupes sous forme de cartes avec tags rôles
- prévoir implémentation groupes sur profil élève (+mailing) à telle date/heure
- donner une note au groupe

### L'élève

- [ ] visibilité sur les notes de la promo mais pas de modifs possibles
- [ ] accès direct à fiche perso
- nom prénom
- photo
- date de naissance
- adresse mail
- entrer lien linkedin pour afficher infos cursus
- liste des projets sur les 3 années + notes → lien vers carte groupe projet
- radar charts compétences
- tabs par année pour projets + compétences
