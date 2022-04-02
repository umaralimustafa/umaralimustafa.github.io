import discord
from discord.ext import commands

client = commands.Bot(command_prefix = "bca ")

@client.event
async def on_ready():
    print("Bot is ready")

@client.command()
async def test(ctx):
    await ctx.send("Test success")
    return

client.run("OTU5NTYxODY5Mzc3NTU2NTgx.YkdroQ.OJboJgLXeZNSljGenMPPA7aSMyA")