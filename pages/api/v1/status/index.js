import { Console } from "console";
import database from "infra/database.js";

async function status(request, response) {
  const databaseName = process.env.POSTGRES_DB;

  const resultadoConstConnections = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity where datname = $1;",
    values: [databaseName],
  });
  const resultadoMaxConnections = await database.query("SHOW max_connections;");

  const updatedAt = new Date().toISOString();
  const resultadoVersion = await database.query("SHOW server_version;");

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: resultadoVersion.rows[0].server_version,
        max_connections: parseInt(
          resultadoMaxConnections.rows[0].max_connections,
        ),
        used_connections: parseInt(resultadoConstConnections.rows[0].count),
      },
    },
  });
}
export default status;
