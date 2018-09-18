"use strict":

const IRC = require("irc-framework");
const config = require("./config.js");
const ip = require("ip");
const bot = new IRC.Client();

bot.connect({
	host: config.server,
	nick: config.botName,
	gecos: config.realName,
	username: config.hexip ? ip2Hex(ip.address()) : config.botName,
	password: config.password,
	auto_reconnect: true,
	auto_reconnect_wait: 4000,
	auto_reconnect_max_retries: 3,
	ping_interval: 30,
	ping_timeout: 120,
});

bot.on("registered", function() {
	console.log("Connected!");
	config.channels.forEach(function(e) {
		bot.join(e);
	});
});

function ip2Hex(address) {
	return address.split(".").map(function(octet) {
		let hex = parseInt(octet, 10).toString(16);

		if (hex.length === 1) {
			hex = "0" + hex;
		}

		return hex;
	}).join("");
};
