# Ravebot
Ravebot's official source code. Mainly for (Ravemon Gaming Official Discord Server)[https://discord.gg/d4MvgAAx7B].

# Releases
* (v1.0.0)[https://github.com/EnHawk/Ravebot/releases/tag/v1.0.0]

# Guide
If you're going to install the source code for your workspace, here are some guides
* Make sure you have [Node.js](https://nodejs.org) installed.
* On config.json, rename the values based on the instruction.
```json
{
    "TOKEN": "<BOT_TOKEN>",
    /* Replace <BOT_TOKEN> with the bot's token.
     * If you regenerated the bot's token, then you have to paste the new one here.
     */

    "GUILD_ID": "<(OPTIONAL)>",
    /* This is optional which means you don't actually change it.
     * Unless you want to register an application (/) command in a specific guild.
     */

    "DB_URI": "<DATABASE_URI>"
    /* If you're using MongoDB, then replace this with your Cluster's URI.
     * It is recommended to use MongoDB but you can ignore this one if you prefer something else.
     */
}
```