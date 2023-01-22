## Telegram Web App example

- `react`
- `vite`
- `SWC`
- `@twa.js/sdk-react`
- `ngrok` and `@mtproto/core` – for developing environment

## Usage
### Dev
`npm install`
`npm run dev`

### Prod
`npm build`

#### You need to create `.env` file in root directory:
```ignore
# if you want to access your env variable, you should prefix it with VITE_
VITE_DEV_PORT=5173
VITE_DEV_SUBDOMAIN=twa-example-something
```