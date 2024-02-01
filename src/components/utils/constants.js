
// search for "youtube api key auth"
const GOOGLE_API_KEY = "AIzaSyAsXE36vYpyrkL67qk0J7-nm4BDDB2IB1k";
//AIzaSyC1JpdEKmXbPHgANWlFXNwV0i1eQLwO30Q
//AIzaSyBRGBpVKRiOpZupOCJclaA0tobzXcHRXj4
//AIzaSyABpUgNmOCo7dlBv1U_0vxoTCc0FuhdKFY
//AIzaSyAPXlVgpHlfXeHihxLC_UK5odwOVZc-3Ss

export const LIVE_CHAT_COUNT = 20;

// search for "youtube videos api"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key="+GOOGLE_API_KEY;

export const YT_SEARCH_SUGGEST_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_LIST_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=" + GOOGLE_API_KEY + "&q=";

export const YT_SEARCH_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+ GOOGLE_API_KEY +"&id=";

export const YT_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key="+GOOGLE_API_KEY+"&textFormat=plainText&part=snippet&maxResults=100&orderby=published&videoId=";

export const YT_VIDEO_BY_ID_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + GOOGLE_API_KEY + "&id="