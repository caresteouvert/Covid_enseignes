# Covid Enseignes

Quelles sont les magasins ouverts ou fermés durant le confinement ?

L'objectif de ce dépôt est de renseigner les règles applicables aux enseignes en France concernant leur ouverture durant la période de confinement suite à l'épidément COVID-19. Ceci permettra la réalisation de cartes sur les commerces accessibles pendant le confinement.

Exemples :

* les boulangeries "Le Bon Pain" sont ouvertes de 9h à 18h30 dans toute la France
* les magasins de bricolage "L'outil pro" sont fermés partout en France

## Comment participer ?

### Signaler une information

Pour signaler une information concernant une chaîne de magasins, vous pouvez [créer un ticket](https://github.com/PanierAvide/Covid_enseignes/issues) sur ce dépot.

Le ticket devra avoir la forme suivante :

```
* __Magasins concernés__ : nom de l'enseigne
* __Règle d'ouverture__ : magasins fermés / magasins ouverts aux horaires habituels / magasins ouverts à des horaires spéciales (précisez : sur RDV, horaires d'ouvertures...)
* __Wikipédia/Wikidata__ : (optionel) lien URL vers l'enseigne sur Wikipédia (ou idéalement [Wikidata](https://www.wikidata.org/))
* __Horaires__ : (optionel) lien URL vers la page recensant les horaires actualisés
* __Source__ : l'adresse où vous avez constaté l'info
```

__Avant de créer un ticket__, vérifiez que les informations [n'ont pas déjà été remontées ici](https://github.com/PanierAvide/Covid_enseignes/issues?q=is%3Aissue).

### Intégrer les informations

Sur la base des tickets ouverts, et si vous êtes à l'aise avec GitHub et l'outil informatique, intégrez les informations reçues dans le fichier CSV `rules.csv`.

## Le résultat

L'objectif est de produire sur l'ensemble du territoire national une carte présentant les commerces ouverts, ainsi que les horaires associées. Plusieurs raisons à cela :
* Limiter au strict nécessaire les déplacements et donc éviter des détours vers des commerces fermés
* Répartir la charge sur plusieurs commerces au lieu d'un seul dans une zone et éviter les cohues/bousculades/pénuries
* Réaliser un suivi régulier de l'évolution de la situation pendant le confinement

L'ensemble des informations compilées sont réunies dans un fichier tableur, définissant les règles reçues pour être exploitées en lien avec OpenStreetMap et Wikidata.
