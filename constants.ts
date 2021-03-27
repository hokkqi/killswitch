import * as pkg from './package.json'
import dotenv from 'dotenv'
dotenv.config()

export default {
    "e621": "https://e621.net",
    "e926": "https://e926.net",
    yiffrest: "https://yiff.rest/V2",
    floofy: "https://api.floofy.dev",
    shibe: "https://shibe.online/api/",
    fox: "https://randomfox.ca/floof/",
    useragent: `Killswitch/v${pkg.version} (wrwlf.de/killswitch)`,
    // "r34": "https://rule34.xxx/index.php?page=dapi&s=post&q=index",
    port: process.env.PORT || 3000,
    log: process.env.LOG_PATH || 'killswitch.log',
    error: process.env.ERROR_LOG_PATH || 'killswitch.error.log',
    redirect: 'https://himbo.cat'

}