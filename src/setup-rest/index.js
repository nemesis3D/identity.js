import express from 'express'
import { routes } from 'src/setup-rest/routes'

const PORT = 5000

export const setupRest = () => {
  const server = express()

  routes.setup(server)

  server.listen(PORT, () => console.log(`Rest server is listening on 0.0.0.0:${PORT}...`))
}
