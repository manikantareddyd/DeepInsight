﻿var genWeb = function (topicsList) {
    var poop = [];
    var count;
    for (count = 0; count < 4; count++) {
        poop.push(topicsList[count]);
    }
    var query = poop.join(" OR ");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.cognitive.microsoft.com/bing/v5.0/search?q="+encodeURI(query)+"&count=40&safesearch=moderate",
        "method": "GET",
        "headers": {
            "ocp-apim-subscription-key": "e0dba888cd24432792bb7473c05a3858",
            "cache-control": "no-cache",
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        //var dataObj = JSON.parse(response.data);
        genWebHtml(response);
    });

    //var data = '{ "_type": "SearchResponse", "webPages": { "webSearchUrl": "https://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=5MSJAROJysci3nL8131k8K_TaUVcrdb6sA9Gcl5XyVk&v=1&r=https%3a%2f%2fwww.bing.com%2fsearch%3fq%3dindia%2basia%2bculture&p=DevEx,5249.1", "totalEstimatedMatches": 39200000, "value": [ { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.0", "name": "<b>Culture of Asia</b> - Wikipedia, the free encyclopedia", "url": "https://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=4qnPo0gNjQIM8nX2MbhbUDu4SXNi8ii3baBjswThZvU&v=1&r=https%3a%2f%2fen.wikipedia.org%2fwiki%2fCulture_of_Asia&p=DevEx,5067.1", "about": [ { "name": "Culture of Asia" } ], "displayUrl": "https://en.wikipedia.org/wiki/<b>Culture_of_Asia</b>", "snippet": "The <b>Culture of Asia</b> is human civilization in <b>Asia</b>. It features different kinds of <b>cultural</b> heritage of many nationalities, societies, and ethnic groups in the region ...", "dateLastCrawled": "2016-05-21T10:08:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.1", "name": "<b>Culture of India</b> - <b>Wikipedia</b>, the free encyclopedia", "url": "https://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=0l86pfR8cDbkO80LpoKWkKfJhDjWF23eTogeSCTDJJk&v=1&r=https%3a%2f%2fen.wikipedia.org%2fwiki%2fCulture_of_India&p=DevEx,5087.1", "about": [ { "name": "Culture of India" } ], "displayUrl": "https://<b>en.wikipedia.org</b>/wiki/<b>Culture_of_India</b>", "snippet": "The <b>culture of India</b> is the way of living of the people of <b>India</b>. <b>India</b>&#39;s languages, religions, dance, music differs from others as for a different type of dance has ...", "dateLastCrawled": "2016-05-22T04:23:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.2", "name": "<b>Asian</b> <b>Indian Culture: Influences and Implications for</b> ...", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=G2VJXKHDlS250qB5lpYofuU7KjPNLF0HHOQogA9cHic&v=1&r=http%3a%2f%2fwww.molinahealthcare.com%2fproviders%2fnm%2fmedicaid%2fresource%2fPDF%2fhealth_nm_asianindianculture-influencesandimplicationsforhealthcare_materialandtest.pdf&p=DevEx,5098.1", "displayUrl": "<b>www.molinahealthcare.com</b>/providers/nm/medicaid/resource/PDF/health...", "snippet": "- 1 - <b>Asian Indian Culture: Influences and Implications for</b> Health Care The Molina Institute for <b>Cultural</b> Competency Sonia Gordon, MS, NP, Martha Bernadett, MD ...", "dateLastCrawled": "2016-05-25T21:25:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.3", "name": "Health and Health care of <b>Asian</b> <b>Indian American</b>", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=u1FG51uj_WgCuYft6mkuET-YodtP_INNCYgULMfHjfI&v=1&r=http%3a%2f%2fweb.stanford.edu%2fgroup%2fethnoger%2fasianindian.html&p=DevEx,5110.1", "displayUrl": "web.stanford.edu/group/ethnoger/<b>asianindian</b>.html", "snippet": "<b>ASIAN INDIAN AMERICAN</b> ELDERS. Kannayiram Alagiakrishnan, M.D. ... Women are more passive in the <b>Indian Culture</b> and men play a major role in health care decisions.", "dateLastCrawled": "2016-05-27T12:39:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.4", "name": "<b>Asian</b> <b>Culture</b> | Traditions | Holidays | China | Japan ...", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=k-kNddiffTF2zDsbx7MKGB_4ES0xI0g2F7SBSfxgIqg&v=1&r=http%3a%2f%2fwww.kidzworld.com%2farticle%2f5001-asian-culture-and-traditions&p=DevEx,5123.1", "displayUrl": "<b>www.kidzworld.com</b>/article/5001-<b>asian</b>-<b>culture</b>", "snippet": "<b>Asian Culture and Traditions</b>. ... Tea: Tea plays a major role in <b>Asian culture</b> - whether it&#39;s in China, <b>India</b> or Malaysia - tea ceremonies, in their various forms, ...", "dateLastCrawled": "2016-05-27T16:02:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.5", "name": "Language and <b>Culture</b> - Geriatrics", "url": "https://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=hzMD56wbtrasHuFqRsUpQlBZOY606K6HuVAxrZDBsls&v=1&r=https%3a%2f%2fgeriatrics.stanford.edu%2fethnomed%2fasian_indian%2fintroduction%2fculture.html&p=DevEx,5136.1", "displayUrl": "https://geriatrics.stanford.edu/ethnomed/<b>asian</b>_<b>indian</b>/introduction/...", "snippet": "The preferred term for Americans with roots in <b>India</b> is <b>Asian Indian</b>. Within the <b>Asian Indians</b> the Hindi term Desi (meaning “from our country”) is used to ...", "dateLastCrawled": "2016-05-18T05:15:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.6", "name": "<b>Culture</b> of <b>India</b> - history, people, clothing, traditions ...", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=ebzpMnMW0EmVvOxWMfaKqADSvxfUkwzWUjFRmFbOpBk&v=1&r=http%3a%2f%2fwww.everyculture.com%2fGe-It%2fIndia.html&p=DevEx,5150.1", "displayUrl": "<b>www.everyculture.com</b>/Ge-It/<b>India</b>.html", "snippet": "<b>Culture</b> of <b>India</b> - history, people, clothing, traditions, women, beliefs, food, customs, family Ge-It", "dateLastCrawled": "2016-05-28T22:14:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.7", "name": "<b>South Asian Art and Culture</b> | Essay | Heilbrunn Timeline ...", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=lkKNW8Ieb27w-FaRN3-sMuOPKIRRi-eKglk7QlGSfWY&v=1&r=http%3a%2f%2fwww.metmuseum.org%2fTOAH%2fhd%2fsasa%2fhd_sasa.htm&p=DevEx,5163.1", "displayUrl": "<b>www.metmuseum.org</b>/TOAH/hd/sasa/hd_sasa.htm", "snippet": "The <b>Indian</b> subcontinent forms an inverted triangle extending from the snow-bound Himalayan ranges of <b>Asia</b> toward the equator. Known also as South <b>Asia</b>, the area ...", "dateLastCrawled": "2016-05-27T17:51:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.8", "name": "<b>India</b> - Language, <b>Culture</b>, Customs and Etiquette", "url": "http://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=RNgmtKh0G2NpNEDnhpTn-LQh6j59oHa0T3huzjK9M94&v=1&r=http%3a%2f%2fwww.commisceo-global.com%2fcountry-guides%2findia-guide&p=DevEx,5174.1", "displayUrl": "www.commisceo-global.com/country-guides/<b>india</b>-guide", "snippet": "A guide to <b>Indian culture</b>, society, language, etiquette, manners, customs and protocol from an intercultural/cross-<b>cultural</b> business perspective.", "dateLastCrawled": "2016-05-27T19:06:00" }, { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.9", "name": "<b>Asia</b> - Wikipedia, the free encyclopedia", "url": "https://www.bing.com/cr?IG=1C0645DBCC54498494FF89B565597C8D&CID=3ED35075A2406A160FC7595DA3716BF7&rd=1&h=mq40JD3tptKn7Gi9J5LRduFaS4jEcXt4Ys-wlUC1NVQ&v=1&r=https%3a%2f%2fen.wikipedia.org%2fwiki%2fAsia&p=DevEx,5188.1", "about": [ { "name": "Asia" } ], "displayUrl": "https://en.wikipedia.org/wiki/<b>Asia</b>", "snippet": "<b>Asia</b>-Africa boundary. The current boundary between <b>Asia</b> and Africa is the Red Sea, the Gulf of Suez, and the Suez Canal. This makes Egypt a transcontinental country ...", "dateLastCrawled": "2016-05-27T06:34:00" } ] }, "rankingResponse": { "mainline": { "items": [ { "answerType": "WebPages", "resultIndex": 0, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.0" } }, { "answerType": "WebPages", "resultIndex": 1, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.1" } }, { "answerType": "WebPages", "resultIndex": 2, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.2" } }, { "answerType": "WebPages", "resultIndex": 3, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.3" } }, { "answerType": "WebPages", "resultIndex": 4, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.4" } }, { "answerType": "WebPages", "resultIndex": 5, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.5" } }, { "answerType": "WebPages", "resultIndex": 6, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.6" } }, { "answerType": "WebPages", "resultIndex": 7, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.7" } }, { "answerType": "WebPages", "resultIndex": 8, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.8" } }, { "answerType": "WebPages", "resultIndex": 9, "value": { "id": "https://bingapis.azure-api.net/api/v5/#WebPages.9" } } ] } } }';
    //var dataObj = JSON.parse(data);
    //genWebHtml(dataObj);
}


var genWebHtml = function (dataObj) {
    //console.log(dataObj);
    var name, count, url,snippet,displayUrl;
    var html = '<h1 class="josefin"><b>From the Web</b></h1><p>I found these pages on the internet. No need to thank me</p>';

    for (count = 0; count < dataObj.webPages.value.length ; count++) {
        name = dataObj.webPages.value[count].name;
        url = dataObj.webPages.value[count].url;
        snippet = dataObj.webPages.value[count].snippet;
        displayUrl = dataObj.webPages.value[count].displayUrl
        html = html +
                '<div class="well">'+
                    '<a href="'+url+'"><p>'+name+'</p></a>'+
                    '<p>'+snippet+'</p>'+
                '</div>'
    }
    $('#web').html(html);
}