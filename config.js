"use strict";

const config = {
	channels: ["##rss"],
	server: "chat.freenode.net",
	botName: "rss-feeder",
	realName: "RSS2IRC bot - https://github.com/MaxLeiter/rss-irc-bot",
	password: "password",
	ignore: [""], // array of nicknames
	feeds:
	[
		{name: "FiveThirtyEight", url: "https://fivethirtyeight.com/all/feed"},
		{name: "Washington Post", url: "http://feeds.washingtonpost.com/rss/politics"},
		{name: "BBC World News", url: "https://www.bbc.com/news/10628494"},
	],
	hexip: false, // enable hexip? Probably false unless you know what you're doing.
};

module.exports = config;