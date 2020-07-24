const fetch = require('node-fetch');

async function getBlock(option, option2) {
    let jsonBlocks;

    if (!option2) option2 = "json";
    try {

        var response = null;
        switch (option) {
            case "countries":
                response = await fetch('https://api.covid19api.com/countries');
                break;
            case "total":
                response = await fetch('https://api.covid19api.com/world/total');
                break;
            case "summary":
                response = await fetch('https://api.covid19api.com/summary');
                break;
            case "all":
                response = await fetch('https://api.covid19api.com/all');
                break;
                // case "countries":
                //     response = await fetch('https://api.covid19api.com/countries');
                //     break;
                // case "countries":
                //     response = await fetch('https://api.covid19api.com/countries');
                //     break;
            default:
                response = await fetch('https://api.covid19api.com/');
                // option2 = "json"
        }

        jsonBlocks = await response.text();

    } catch (e) {

        // handle error
        console.error(e)
    }
    if (option2 == "table")
        console.table(JSON.parse(jsonBlocks))
    else if (option2 == "json")
        console.log(JSON.parse(jsonBlocks));
}

getBlock(process.argv[2], process.argv[3])