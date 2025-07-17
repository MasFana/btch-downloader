const { igdl, ttdl } = require('../dist/src/index.js');

(async () => {
    try {
        console.log('Testing...');
        let url = 'https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link'
        const result = await igdl(url);
        console.log('Response:', result);
        console.log(await ttdl('https://www.tiktok.com/@bigboysanti_/video/7520912002550730002?is_from_webapp=1&sender_device=pc'))
    } catch (error) {
        console.error(error.message);
    }
})();