import { repositories } from 'src/migrate-db/repositories'
import { executeMigration } from 'src/migrate-db/commands/execute-migration'

export const migrateDb = () => {
  const migrationsImporter = require?.context('./migrations', true, /\.js$/)

  return migrationsImporter?.keys()
    .map(migrationsImporter)
    .reduce((acc, migration) => acc.then(executeMigration(migration)), Promise.resolve())
}

migrateDb.repositories = repositories
