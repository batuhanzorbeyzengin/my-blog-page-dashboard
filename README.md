This repository started as an attempt to create an admin panel for my personal blog website, but it has turned into a work environment for pushing my own limits.

Technologies used in the project:

- [Nextjs](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)

While creating the frontend with Nextjs, I was able to handle the backend processes with Prisma without writing a separate backend.

In this project, I used the MySQL side of Prisma. The config settings are set accordingly. But if you want, it supports databases such as SQLite, MSSQL, MongoDB, and PostgreSQL. You can run it after making the necessary config settings by looking at the website.

## Getting Started

First, you need to install all packages:

```bash
npm i
# or
yarn
```

After that, you need to create a .env file and add configuration information for prisma and login processes before starting the project.

```bash
# prisma
DATABASE_URL="mysql://[DB-USER-NAME]:[DB-USER PASS]@[DB-IP]/[DB-TABLE-NAME]"
# prisma example url
DATABASE_URL="mysql://root:root@localhost:8889/batuhan_dashboard"
# login
NODE_ENV=development
SECRET=
```

After completing these steps, you can start the project with:

```bash
npm run dev
# or
yarn dev
```
You can start it this way.
