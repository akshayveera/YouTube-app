
// search for "youtube api key auth"
const GOOGLE_API_KEY = "AIzaSyC1JpdEKmXbPHgANWlFXNwV0i1eQLwO30Q";
//AIzaSyBRGBpVKRiOpZupOCJclaA0tobzXcHRXj4
//AIzaSyABpUgNmOCo7dlBv1U_0vxoTCc0FuhdKFY

export const LIVE_CHAT_COUNT = 20;

// search for "youtube videos api"
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YT_SEARCH_SUGGEST_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YT_SEARCH_LIST_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key=" + GOOGLE_API_KEY + "&q=";

export const YT_SEARCH_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key="+ GOOGLE_API_KEY +"&id="