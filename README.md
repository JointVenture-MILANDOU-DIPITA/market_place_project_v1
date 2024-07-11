# Généralités
Ce projet regroupe l'API et le client front d'une marketplace.

# Installation
## Outils
Installer npm
Installer node
Installer ngrok
## Build de l'API
### Installation ou mise à jour des packages
Dans le dossier market_place_project_v1
Vous placez vous dans le dossier api puis installer les dépendences nécessaires à l'API 
<code>
cd api; npm install
</code>

### Creer le fichier .env
 - créer un fichier .env à la racine du dossier API
 - Dans le fichier .env, créer les variables suivantes:
   PORT = 3000
   JWT_SECRET = pour définir une clé JWT
- En utilisant votre serveur definissez le user_mail et le mdp_mail
   user_mail = pour définir un serveur SMTP

   mdp_mail = pour définir la clé d'accès à votre serveur smtp
### Ajouter la base de données à Prisma
- Installer mysql-server
Si vous êtes sur Ubuntu/Linux
<code> sudo apt install mysql-server</code>

- Creer une base de données et un utilisateur
<code>sudo mysql -u root -p </code>

CODE SQL
<code>
CREATE DATABASE mon_projet;
CREATE USER 'mon_utilisateur'@'localhost' IDENTIFIED BY 'mon_mot_de_passe';
GRANT ALL PRIVILEGES ON mon_projet.* TO 'mon_utilisateur'@'localhost';
FLUSH PRIVILEGES;
EXIT;
</code>

- Configurer Prisma pour se connecter à la base de données MySQL
Metter à jour le fichier ".env"
DATABASE_URL="mysql://mon_utilisateur:mon_mot_de_passe@localhost:3306/mon_projet"
- Verifier que le prisma/schema.prisma est configuré pour utiliser MySQL
<code>
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
</code>

- Appliquer les migrations existantes
<code>
npx prisma migrate deploy
</code>

- Générer le Client Prisma
<code>npx prisma generate</code>

### Creer un compte Stripe
Pour utiliser les controleurs de paiement ainsi que les routes associées : 
Vous pouvez utliser les variables suivantes : 
- Creer un compte Stripe
- Ajouter votre end point privé endpointSecret (clé stripe lue par le webhook)
endpointSecret = 'whsec_655c86947dad01356835c55095895d4326b665837e5d8c545c22cac1bea7c851' 
- Ajouter votre clé privé STRIPE_SECRET_KEY
STRIPE_SECRET_KEY = sk_test_51PGXOLDQ2yD2McZ1rYtB5zPibJgTgsClxmcb5yOC8NheNeOV4lEzQtXaZjRzFGLQGmOzpk3zJFfqTCQrUc7TFMz300Xt3vmZFr 

## Lancer l'API
A partir du dossier api, lancer la commande <code>npm start</code>
Le serveur se lance sur le PORT défini dans le .env

## Construire le client
BACKEND_URL = http://localhost:3000/api/market_place/v1/bills/ (url utile pour la session de paiement)


