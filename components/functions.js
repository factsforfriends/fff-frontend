//
// Shorten a URL to the domain part only
//
export const URLtoDomain = (url) => {
    var res;
    var match;
    
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        res = match[1]
        if (match = res.match(/^[^\.]+\.(.+\..+)$/)) {
            res = match[1]
        }
    }
    return res;
};

//
// Split string at split and return items joined by sep
//
export const splitAndReassemble = (str, split, sep) => {
    const items = [];
    str.split(split).map(item => {
        if (!items.includes(item.toLowerCase()) && item) {
          items.push(item.toLowerCase());}}
          );
    return items.join(sep)
};