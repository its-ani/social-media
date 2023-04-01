## Social Media Sample Project


## Database Setup

'''shell
$ mysql -u root
'''

'''mysql
create database cbsocialmediadb;
create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.* to cbsocialuser;

flush privileges;
'''


## Project Structure
'''tree
src 
├───controllers     # function to connect routes to db operations
├───db              # db connection and model definitions
├───public          # html/js/css files for static part of size
└───routes          # express middlewares
'''


