import pollNews from "./api/api.ts";

// have to poll cuz there is no wss api for the news on bitget
setInterval(pollNews, 3000);