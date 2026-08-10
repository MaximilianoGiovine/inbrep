# Multi-stage build for Next.js production

FROM node:20-alpine AS builder
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
# Use `npm ci` when a lockfile is present (reproducible installs).
# If there's no lockfile (Portainer may build from repo without it),
# fall back to `npm install`. Also add `--legacy-peer-deps` to reduce
# peer dependency failures on some hosts.
RUN sh -c "if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent --legacy-peer-deps; fi"

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
