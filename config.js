

const config = {
  channel: '##rss',
  server: 'chat.freenode.net',
  botName: 'rss-feeder',
  realName: 'RSS2IRC bot - https://github.com/MaxLeiter/rss-irc-bot',
  password: 'password',
  ignore: [''], // array of nicknames
  feeds:
  [
    { url: 'https://fivethirtyeight.com/all/feed', refresh: 60000 },
    { url: 'http://feeds.washingtonpost.com/rss/politics', refresh: 60000 },
    { url: 'https://www.bbc.com/news/10628494', refresh: 60000 },
    { url: 'https://api.axios.com/feed/top', refresh: 60000 },
  ],
  hexip: false, // enable hexip? Probably false unless you know what you're doing.
};

module.exports = config;
