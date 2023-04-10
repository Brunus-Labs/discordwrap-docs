FROM node:18 as base
RUN yarn global add pnpm
WORKDIR /app

COPY package* pnpm-lock.yaml tsconfig.json next.config.js ./
RUN pnpm i
COPY . .

CMD ["pnpm", "dev"]
