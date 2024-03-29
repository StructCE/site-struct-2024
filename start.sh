#!/bin/sh
prisma db push --skip-generate
# tsx prisma/seed.ts
node server.js
