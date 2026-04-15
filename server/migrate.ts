import { migrate } from "drizzle-orm/node-postgres/migrator";
// Triggering clean redeploy after DB clear
import { db, pool } from "./db";

async function runMigration() {
    console.log("Running migrations...");
    try {
        await migrate(db, { migrationsFolder: "./migrations" });
        console.log("Migrations completed successfully");
    } catch (error: any) {
        if (error.message?.includes("already exists")) {
            console.warn("Table conflict detected. Force clearing database and retrying...");
            try {
                const client = await pool.connect();
                await client.query('DROP TABLE IF EXISTS registrations, users, __drizzle_migrations, drizzle_migrations CASCADE');
                client.release();

                // Retry migration
                await migrate(db, { migrationsFolder: "./migrations" });
                console.log("Migrations completed successfully after force clear");
            } catch (retryError) {
                console.error("Force clear and retry failed:", retryError);
                process.exit(1);
            }
        } else {
            console.error("Migration failed:", error);
            process.exit(1);
        }
    } finally {
        await pool.end();
    }
}

runMigration();
