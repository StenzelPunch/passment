## How to run dev?

**Docker required**

Create .env file in root directory (see .env example).


```
yarn install

yarn db:up

yarn dev
```

**.env example**

```
NODE_ENV=development

APP_PORT=8000
APP_HOSTNAME=localhost
APP_PROTOCOL=http

JWT_SECRET=secret
JWT_REFRESH_SECRET=secret_refresh

# milliseconds
JWT_TTL=600000 
JWT_REFRESH_TTL=2592000000

MAX_SESSIONS=5

MONGO_PORT=27017
MONGO_HOST=localhost
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=rootpassword
MONGO_INITDB_DATABASE=passment
MONGO_USERNAME=testuser
MONGO_PASSWORD=testpassword

```
