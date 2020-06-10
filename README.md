# Deployment

create a file .env with the following contents and modify:
```bash
DATABASE_CLIENT=mongo
DATABASE_NAME=strapi
DATABASE_HOST=mongo
DATABASE_PORT=27017
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=CHANGEME
MONGO_INITDB_ROOT_USERNAME=strapi
MONGO_INITDB_ROOT_PASSWORD=CHANGEME
F3_TLS_MAIL=mail@example.org
F3_CMS_DOMAIN=cms.example.org
F3_FRONTEND_DOMAIN=frontend.example.org
NEXT_TELEMETRY_DISABLED=1
```

to start it
```bash
docker-compose up -d
```

to only start the frontend
```bash
npm i     # install all dependencies first
npm run dev
```
