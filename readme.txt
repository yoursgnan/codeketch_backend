package usages
-------------------
bcrypt: used to encrypt password
bcrypt.hash : used to encrypt
bcrypt.compare to compare password and password hash

jsonwebtoken: creates token for each user, token helps to identify the user, token stored in browser,
jwt.sign to create token
jwt.verify to verify
secret key(random string) need to pass along with jsondict({username and id}) to sign and verify methods

cors: (cross authentication) package used to allow request from another port
dotenv: load environment variables from .env file(.env wont be pushed in the MR)
express: used to handle requests and responses
sequelize: used to handle psql tables and databases

project structure
-----------------------
