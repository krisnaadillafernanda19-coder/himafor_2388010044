FROM node:20-alpine AS base

# 1. Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# 2. Rebuild the source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# 3. Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -g 1001 -S itsnode
RUN itsuser -u 1001 -S itsnode -G itsnode

# PENTING: Salin aset publik agar CSS tidak hilang!
COPY --from=builder /app/public ./public
COPY --from=builder --chown=itsnode:itsnode /app/.next/standalone ./
COPY --from=builder --chown=itsnode:itsnode /app/.next/static ./.next/static

USER itsnode
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]