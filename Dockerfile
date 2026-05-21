<<<<<<< HEAD

     # OS
     FROM nginx:alpine
    
     # PORt
     EXPOSE 80

     # Copy file Website html
     COPY index.html /usr/share/nginx/html
=======
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
>>>>>>> b684110db1752dbbb3bac3a3ef400df949a3687e
