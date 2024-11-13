const data = [
    {
        "bbc": [
            "https://www.bbc.com",
            "https://www.bbc.com/news/articles/c5ypgjg2jrpo", // Spain's king and queen pelted with mud in flood-hit Valencia
            "https://www.bbc.com/news/articles/ckg0y2elyj4o", // First image from Peaky Blinders film released
            "https://www.bbc.com/future/article/20241030-the-island-ruled-by-alien-snakes-and-spiders", // The US island ruled by alien snakes and spiders
            "https://www.bbc.com/news/articles/c5ymg64ynm7o", // Schools close in Lahore as pollution hits record level
            "https://www.bbc.com/news/articles/cvg0p18lqqyo", // Wegovy's creator invested £6bn in this town. So why is it not booming?
            "https://www.bbc.com/news/articles/ce8dy5v1kpno", // 'Pack of cigs and a Bic lighter': Why are celebs glamorising smoking again?
            "https://www.bbc.com/culture/article/20241028-11-of-the-best-tv-shows-to-watch-this-november", // 11 of the best TV shows to watch this November
            "https://www.bbc.com/news/articles/cly2d4evq5po", // What Harris's years as a prosecutor reveal about who she is now
            "https://www.bbc.com/news/articles/cly2d4evq5po" // Gabriela is an undecided voter. Here's the very different content TikTok and X showed her
        ],
        "guardian": [
            "https://www.theguardian.com",
            "https://www.theguardian.com/us-news/2024/nov/03/grizzly-no-399-ashes-grand-teton-park",
            "https://www.theguardian.com/us-news/ng-interactive/2024/nov/03/if-trump-wins-the-election-these-11-issues-will-be-under-threat",
            "https://www.theguardian.com/us-news/2024/nov/03/simone-collins-pronatalist-pennsylvania-candidate",
            "https://www.theguardian.com/world/2024/nov/03/remote-worker-gaza-palestine-israel-war",
            "https://www.theguardian.com/environment/2024/nov/03/florida-law-hunting-fishing-traditional-methods",
            "https://www.theguardian.com/science/2024/nov/03/boeing-space-sale-reports",
            "https://www.theguardian.com/us-news/2024/nov/03/fur-and-loathing-do-americas-childless-cat-ladies-hold-the-key-to-the-us-election",
            "https://www.theguardian.com/us-news/2024/nov/03/reducing-political-polarization-democrats-republicans",
            "https://www.theguardian.com/music/2024/nov/04/chris-martin-falls-through-hole-in-melbourne-stage-weeks-after-olivia-rodrigos-mishap"
        ],
        "propub": [
            "https://www.propublica.org",
            "https://www.propublica.org/article/denver-colorado-migrants-unhoused",
            "https://www.propublica.org/article/del-rio-texas-immigration-local-politics",
            "https://www.propublica.org/article/tennessee-school-threat-law-kids-arrested",
            "https://www.propublica.org/article/facebook-instagram-meta-deceptive-political-ads-election",
            "https://www.propublica.org/article/joe-frank-martinez-sheriff-del-rio-documentary",
            "https://www.propublica.org/article/donald-trump-media-outsourced-jobs-mexico-truth-social",
            "https://www.propublica.org/article/donald-trump-agenda-working-class",
            "https://www.propublica.org/article/election-issues-2024-immigration-abortion-economy",
            "https://www.propublica.org/article/immigration-mexico-us-migrants-mass-kidnappings-cartels-border"
        ],
        "rfa": [
            "https://www.rfa.org/english",
            "https://www.rfa.org/english/pacific/2024/11/04/un-nuclear-impact-marshall-islands-french-polynesia/",
            "https://www.rfa.org/english/vietnam/2024/11/04/political-prisoner-pen-america-health/",
            "https://www.rfa.org/english/china/2024/11/03/china-explainer-united-front/",
            "https://www.rfa.org/english/china/2024/11/02/china-enshrines-cultural-revolution-leader-guangxi-massacre-cannibalism/",
            "https://www.rfa.org/english/myanmar/2024/11/04/myanmar-junta-karen-fallen-soldiers-civil-war/",
            "https://www.rfa.org/english/vietnam/2024/11/04/vietnam-truong-my-lan-death-appeal/",
            "https://www.rfa.org/english/myanmar/2024/11/04/myanmar-malaysia-refugees/",
            "https://www.rfa.org/english/southchinasea/2024/11/04/vietnam-china-fishermen-paracels/",
            "https://www.rfa.org/english/cartoons/"
        ],
        "voa": [
            "https://www.voanews.com",
            "https://www.voanews.com/a/israel-notifies-un-it-will-not-cooperate-with-unrwa-after-new-legislation/7850306.html",
            "https://www.voanews.com/a/spain-deploys-7-500-troops-to-flood-zone-where-anger-rises-at-slow-help/7850383.html",
            "https://www.voanews.com/a/malaysia-complains-to-vietnam-over-south-china-sea-reef-expansion-sources-say/7850369.html",
            "https://www.voanews.com/a/moldovans-to-choose-president-in-decisive-runoff-overshadowed-by-fraud-and-intimidation-claims/7849351.html",
            "https://www.voanews.com/a/indian-americans-show-shifting-political-loyalties-ahead-of-presidential-election/7849306.html",
            "https://www.voanews.com/a/will-people-leave-florida-after-devastating-hurricanes-history-suggests-not-/7848619.html",
            "https://www.voanews.com/a/puerto-rico-prepares-for-election-day-as-a-third-party-candidate-makes-history/7850265.html",
            "https://www.voanews.com/a/america-s-holiday-calendar-is-increasingly-diverse/7848603.html",
            "https://www.voanews.com/a/boeing-machinists-are-holding-a-contract-vote-that-could-end-their-7-week-strike-/7850309.html"
        ],
        "tor": [
            "https://www.torproject.org",
            "https://www.torproject.org/about/history",
            "https://www.torproject.org/about/people/",
            "https://www.torproject.org/about/supporters/",
            "https://www.torproject.org/about/reports/",
            "https://www.torproject.org/about/jobs/",
            "https://www.torproject.org/about/trademark/",
            "https://www.torproject.org/contact/",
            "https://www.torproject.org/static/findoc/2021-2022-TheTorProject-PublicDisclosureForm990.pdf?h=22c9d0d7",
            "https://www.torproject.org/static/findoc/2021-2022-The_Tor_Project-AuditedFinancialStatements.pdf?h=1fe92666"
        ],
        "cia": [
            "https://www.cia.gov",
            "https://www.cia.gov/about/",
            "https://www.cia.gov/about/director-of-cia/",
            "https://www.cia.gov/about/organization/",
            "https://www.cia.gov/about/mission-vision/",
            "https://www.cia.gov/partner-with-cia/",
            "https://www.cia.gov/tech/",
            "https://www.cia.gov/about/organization/privacy-and-civil-liberties/",
            "https://www.cia.gov/legacy/",
            "https://www.cia.gov/legacy/cia-history/"
        ],
        "reddit": [
            "https://www.reddit.com",
            "https://www.reddit.com/r/AskReddit/",
            "https://www.reddit.com/r/books/",
            "https://www.reddit.com/r/science/",
            "https://www.reddit.com/r/todayilearned/",
            "https://www.reddit.com/r/explainlikeimfive/",
            "https://www.reddit.com/r/dataisbeautiful/",
            "https://www.reddit.com/r/rutgers/",
            "https://www.reddit.com/posts/2024/global/",
            "https://www.reddit.com/r/kindle/comments/1b98tyv/should_i_get_a_kindle/"
        ]
    },
    {
        "bbc": [
            "https://www.bbcnewsd73hkzno2ini43t4gblxvycyac5aw4gnv7t2rccijh7745uqd.onion/",
            "https://www.bbcnewsd73hkzno2ini43t4gblxvycyac5aw4gnv7t2rccijh7745uqd.onion/news/articles/c5ypgjg2jrpo",
            "https://www.bbcnewsd73hkzno2ini43t4gblxvycyac5aw4gnv7t2rccijh7745uqd.onion/news/articles/ckg0y2elyj4o",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/future/article/20241030-the-island-ruled-by-alien-snakes-and-spiders",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/news/articles/c5ymg64ynm7o",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/news/articles/cvg0p18lqqyo",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/news/articles/ce8dy5v1kpno",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/culture/article/20241028-11-of-the-best-tv-shows-to-watch-this-november",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/news/articles/cly2d4evq5po",
            "https://www.bbcweb3hytmzhn5d532owbu6oqadra5z3ar726vq5kgwwn6aucdccrad.onion/news/articles/cy5lngzxxrvo"
        ],
        "guardian": [
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us-news/2024/nov/03/grizzly-no-399-ashes-grand-teton-park",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us-news/ng-interactive/2024/nov/03/if-trump-wins-the-election-these-11-issues-will-be-under-threat",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us-news/2024/nov/03/simone-collins-pronatalist-pennsylvania-candidate",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/world/2024/nov/03/remote-worker-gaza-palestine-israel-war",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/environment/2024/nov/03/florida-law-hunting-fishing-traditional-methods",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/science/2024/nov/03/boeing-space-sale-reports",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us-news/2024/nov/03/fur-and-loathing-do-americas-childless-cat-ladies-hold-the-key-to-the-us-election",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/us-news/2024/nov/03/reducing-political-polarization-democrats-republicans",
            "https://www.guardian2zotagl6tmjucg3lrhxdk4dw3lhbqnkvvkywawy3oqfoprid.onion/music/2024/nov/04/chris-martin-falls-through-hole-in-melbourne-stage-weeks-after-olivia-rodrigos-mishap"
        ],
        "propub": [
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/denver-colorado-migrants-unhoused",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/del-rio-texas-immigration-local-politics",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/tennessee-school-threat-law-kids-arrested",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/facebook-instagram-meta-deceptive-political-ads-election",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/joe-frank-martinez-sheriff-del-rio-documentary",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/donald-trump-media-outsourced-jobs-mexico-truth-social",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/donald-trump-agenda-working-class",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/election-issues-2024-immigration-abortion-economy",
            "http://p53lf57qovyuvwsc6xnrppyply3vtqm7l6pcobkmyqsiofyeznfu5uqd.onion/article/immigration-mexico-us-migrants-mass-kidnappings-cartels-border"
        ],
        "rfa": [
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/pacific/2024/11/04/un-nuclear-impact-marshall-islands-french-polynesia/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/vietnam/2024/11/04/political-prisoner-pen-america-health/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/china/2024/11/03/china-explainer-united-front/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/china/2024/11/02/china-enshrines-cultural-revolution-leader-guangxi-massacre-cannibalism/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/myanmar/2024/11/04/myanmar-junta-karen-fallen-soldiers-civil-war/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/vietnam/2024/11/04/vietnam-truong-my-lan-death-appeal/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/myanmar/2024/11/04/myanmar-malaysia-refugees/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/southchinasea/2024/11/04/vietnam-china-fishermen-paracels/",
            "https://www.rfaorg4ob4vj6n45djaaxkkxye4wiwimucbkvzvdsvwf3ebw2ale77yd.onion/english/cartoons/"
        ],
        "voa": [
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/israel-notifies-un-it-will-not-cooperate-with-unrwa-after-new-legislation/7850306.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/spain-deploys-7-500-troops-to-flood-zone-where-anger-rises-at-slow-help/7850383.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/malaysia-complains-to-vietnam-over-south-china-sea-reef-expansion-sources-say/7850369.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/moldovans-to-choose-president-in-decisive-runoff-overshadowed-by-fraud-and-intimidation-claims/7849351.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/indian-americans-show-shifting-political-loyalties-ahead-of-presidential-election/7849306.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/will-people-leave-florida-after-devastating-hurricanes-history-suggests-not-/7848619.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/puerto-rico-prepares-for-election-day-as-a-third-party-candidate-makes-history/7850265.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/america-s-holiday-calendar-is-increasingly-diverse/7848603.html",
            "https://www.voanews5aitmne6gs2btokcacixclgfl43cv27sirgbauyyjylwpdtqd.onion/a/boeing-machinists-are-holding-a-contract-vote-that-could-end-their-7-week-strike-/7850309.html"
        ],
        "tor": [
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/history/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/people/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/supporters/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/reports/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/jobs/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/about/trademark/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/contact/",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/static/findoc/2021-2022-TheTorProject-PublicDisclosureForm990.pdf?h=22c9d0d7",
            "http://2gzyxa5ihm7nsggfxnu52rck2vv4rvmdlkiu3zzui5du4xyclen53wid.onion/static/findoc/2021-2022-The_Tor_Project-AuditedFinancialStatements.pdf?h=1fe92666"
        ],
        "cia": [
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/about/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/about/director-of-cia/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/about/organization/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/about/mission-vision/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/partner-with-cia/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/tech/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/about/organization/privacy-and-civil-liberties/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/legacy/",
            "http://ciadotgov4sjwlzihbbgxnqg3xiyrg7so2r2o3lt5wz5ypk4sxyjstad.onion/legacy/cia-history/"
        ],
        "reddit": [
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/AskReddit/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/books/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/science/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/todayilearned/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/explainlikeimfive/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/dataisbeautiful/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/explainlikeimfive/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/posts/2024/global/",
            "https://www.reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion/r/kindle/comments/1b98tyv/should_i_get_a_kindle/"
        ]
    }
]

export { data };