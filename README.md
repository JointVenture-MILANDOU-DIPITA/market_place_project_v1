Ce projet regroupe l'api et le client front d'une marketplace.

Pour travaillez sur l'API, veuillez  : 

1. Vous placez vous dans le dossier api puis Installer les dépendences nécessaires à l'API à l'aide de la commande npm install
2. créer un fichier .env à la racine du dossier api
   
4. Dans le fichier .env, créer les variables :

   
PORT = pour stocker le port |
JWT_SECRET = pour définir une clé JWT |
user_mail = pour définir un serveur SMTP |
mdp_mail = pour définir la clé d'accès à votre serveur smtp

Pour utiliser les controleurs de paiement ainsi que les routes associées : 

Vous pouvez utliser les variables suivantes : 


endpointSecret = 'whsec_655c86947dad01356835c55095895d4326b665837e5d8c545c22cac1bea7c851' (clé de sécurité stripe lue par le webhook) |

BACKEND_URL = http://localhost:3000/api/market_place/v1/bills/ (url utile pour la session de paiement) |

STRIPE_SECRET_KEY = sk_test_51PGXOLDQ2yD2McZ1rYtB5zPibJgTgsClxmcb5yOC8NheNeOV4lEzQtXaZjRzFGLQGmOzpk3zJFfqTCQrUc7TFMz300Xt3vmZFr (clé stripe)

