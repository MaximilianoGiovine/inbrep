# Multi-stage build for Next.js production

FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Build
COPY . .
RUN npm run build
RUN npm prune --production

# Production image
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "start"]
