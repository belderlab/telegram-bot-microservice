# Telegram bot microservice

## Install
```
yarn install
```

## Architecture
`datasoruces` - for information source API, it can be REST, databases, gRPC and other interfaces...
`handlers` - telegram bot handlers
`middleware` - function which starting before and after handlers - wrappers around handlers

## Development
```sh
echo 'TELEGRAM_TOKEN=123:abc' > ./.env
yarn build && yarn start
```

Create database (you can do it via docker-compose up)