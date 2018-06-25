Step1: git clone https://github.com/sonhip94/JWT_Angular4_Laravel

Step2: 
- cd api/
- composer install
- cp .env .env.example
- php artisan key:generate
- config database in .env file
- php artisan migrate
- php artisan db:seed --class=UsersTableSeeder
- php artisan serve (localhost:8000)

Step3:
- cd web/
- npm install
- ng server (localhost:4200)
