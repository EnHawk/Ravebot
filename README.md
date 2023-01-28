<div align="center">
  <b>
    <img src="https://cdn.discordapp.com/attachments/880382867283247124/985888398533361674/sticker_1622513385543.png" width="50%" height="50%" />
    <br>
    <h1>
      <a href="https://github.com/EnHawk/Ravebot">Ravebot's Official Source Code Repository</a>
    </h1>
    <a href="https://dsc.gg/ravemondc">
      <img src="https://img.shields.io/discord/875566092850974780?color=5865f2&label=Chat&logo=discord&logoColor=white" />
    </a>
    <a href="https://www.youtube.com/@ravemongaming_reborn">
      <img src="https://img.shields.io/youtube/channel/subscribers/UC5UFIqxUv0L1Weg8bAPBlZg" />
    </a>
    <a href="https://twitter.com/RavemonGaming">
      <img src="https://img.shields.io/twitter/url?label=Twitter&style=social&url=https%3A%2F%2Ftwitter.com%2FRavemonGaming" />
    </a>
  </b>
</div>

# Releases
* [v1.0.0](https://github.com/EnHawk/Ravebot/releases/tag/v1.0.0)

# Guide
If you're going to install the source code for your workspace, here are some guides
* Make sure you have [Node.js](https://nodejs.org) installed.
* On config.json, rename the values based on the instruction.
```jsonc
{
    "TOKEN": "<BOT_TOKEN>",
    /* Replace <BOT_TOKEN> with the bot's token.
     * If you regenerated the bot's token, then you have to paste the new one here.
     */

    "GUILD_ID": "<(OPTIONAL)>",
    /* This is optional which means you don't actually have to change it.
     * Unless you want to register application (/) command in a specific guild.
     */

    "DB_URI": "<DATABASE_URI>"
    /* If you're using MongoDB, then replace this with your Cluster's URI.
     * It is recommended to use MongoDB but you can ignore this one if you prefer something else.
     */
}
```