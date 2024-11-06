const rawNews = [
    {
        company: "Amazon",
        news: [
            {
                id: 1,
                title: "Amazon Earnings: Stock Climbs As E-Commerce Giant Beat Expectations",
                date: "Oct 31, 2024",
                description: "Shares of Amazon jumped more than 5% in after-hours trading Thursday after the e-commerce giant reported third-quarter earnings that beat Wall Street expectations."
            },
            {
                id: 2,
                title: "Amazon Web Services Plans To Go Water Positive by 2030: This Is How",
                date: "Nov 3, 2024",
                description: "Research indicates a large data center can gobble up anywhere between 1 million and 5 million gallons of water a day—enough to supply thousands of farms and households. Plus, some of these facilities are built in the US, Mexico, Brazil, and India, where climate change has intensified the already strained water resources."
            },
            {
                id: 3,
                title: "39 Early Amazon Black Friday Deals You Can Shop This Weekend",
                date: "Nov 1, 2024",
                description: "As we browsed Amazons selection of early Black Friday deals, we found Crest Whitestrips for 35% off, a Barbie play set for 40% off and Rings newest doorbell camera at a match for its lowest price ever. Find all of the standout offers separated by category for easy browsing below."
            },
            {
                id: 4,
                title: "Amazon Executive Doubles Down On RTO Policy: If You Dont Like It, Then Quit",
                date: "Oct 18, 2024",
                description: "Amazon, the worlds second largest private employer, is reaffirming its commitment to its recently announced return-to-office policy, which requires all employees work onsite five days a week."
            },
            {
                id: 5,
                title: "Why Amazons Return To Office Mandate Is A Warning For The Future Of Work",
                date: "Sep 30, 2024",
                description: "Amazon CEO Andy Jassy last week called all of the companys employees back to the office five days a week, part of an effort to preserve the companys culture and return to a pre-Covid reality."
            },
            {
                id: 6,
                title: "Amazon's a company investors can 'put money to work in': Analyst",
                date: "November 4, 2024",
                description: "Big tech companies, including Amazon (AMZN), Meta Platforms (META), and Alphabet (GOOG, GOOGL), posted solid third earnings this season. Despite the strong showings, capital expenditures (CapEx) on artificial intelligence (AI) are spooking some investors."
            },
            {
                id: 7,
                title: "Meta, Amazon Lead in AI Returns, D.A. Davidson Reports",
                date: "November 4, 2024",
                description: "Meta Platforms (META, Financials) and Amazon (AMZN, Financials) lead in AI investment returns among major tech firms, according to D.A. Davidson analysts Gil Luria and Alex Patt."
            },
            {
                id: 8,
                title: "Dow Jones Stock Amazon Breaks Out; Netflix Eyes New Buy Point",
                date: "November 4, 2024",
                description: "As the Dow Jones Industrial Average and S&P 500 threaten to add to last week's losses, Dow Jones leader Amazon, GoDaddy, MercadoLibre and Netflix stock are trading in or near buy zones."
            },
        ]
    },
    {
        company: "Apple",
        news: [
            {
                id: 1,
                title: "Apple Loop: Apples Far Out Event Round Up; New iPhones, Apple Watch, And AirPod Pro",
                date: "Sep 9, 2024",
                description: "This weeks Apple headlines; the big talking points from this weeks launch event"
            },
            {
                id: 2,
                title: "iPhone 17 Long-Awaited Design Upgrade Coming, New Leak Claims",
                date: "Nov 3, 2024",
                description: "The iPhone 17 series will be released next fall, but a new report suggests that it may see something fans have been requesting for years: ProMotion 120Hz displays on the entry-level iPhone."
            },
            {
                id: 3,
                title: "Apple to Offer Extra Indonesia Investment to Remove iPhone Ban",
                date: "November 5, 2024",
                description: "Apple Inc. has proposed investing almost $10 million to make additional goods in Indonesia, according to people familiar with the matter, as it seeks to have the countrys ban on sales of its latest iPhone removed."
            },
            {
                id: 4,
                title: "Apple users can soon upgrade to ChatGPT Plus within the Settings app",
                date: "November 5, 2024 ",
                description: "Apple products are getting an integration with OpenAI's ChatGPT in December when iOS 18.2 rolls out, which should supercharge Siri and a few other features with smarter AI. "
            },
            {
                id: 5,
                title: "Apple Explores Push Into Smart Glasses With Atlas User Study",
                date: "November 5, 2024",
                description: "Apple Inc. is exploring a push into smart glasses with an internal study of products currently on the market, setting the stage for the company to follow Meta Platforms Inc. into an increasingly popular category."
            },
            {
                id: 6,
                title: "Apple Stock Keeps Getting Dumped by Buffett. Why It Hasnt Mattered",
                date: "November 4, 2024",
                description: "The iPhone makers shares are up 35% since mid-April, even though Warren Buffetts Berkshire Hathaway has been trimming its stake"
            },
            {
                id: 7,
                title: "Labor board accuses Apple of suppressing employee discussions",
                date: "November 4, 2024",
                description: "Apple has been accused by the National Labor Relations Board of trying to prevent employees from discussing pay equity and pressuring an engineer who attempted to circulate an online survey about wages to quit."
            },
            {
                id: 8,
                title: "Loop Capital Adjusts Apple Price Target as iOS 18.1 Sees Rapid Adoption",
                date: "November 4, 2024",
                description: "Apple's most recent iOS 18.1 update for iPhones has been adopted twice as fast as compared to its predecessor iOS 17.1, underscoring robust demand in Apple Intelligence capabilities, Loop Capital said Monday. Starting last week, the new version, which aims to improve on-device intelligence, features better writing tools and an upgraded Siri."
            },
        ]
    },
    {
        company: "Nvidia",
        news: [
            {
                id: 1,
                title: "Nvidia set to replace Intel on Dow Jones Industrial Average",
                date: "November 4, 2024",
                description: "Nvidia stock is in focus ahead of the company's inclusion in the Dow Jones Industrial Average with it set to replace Intel in the index. The chipmaker will join the index on Friday along with Sherwin-Williams Company. Morning Brief Hosts Seana Smith and Brad Smith break down what investors need to know."
            },
            {
                id: 2,
                title: "Prediction: This Stock Will Outperform Nvidia in 2025",
                date: "Nov 5, 2024",
                description: "Nvidia has been a top-performing stock for the past two years, and all signs point toward it delivering once again in 2025. However, its growth is also likely to slow, and seeing the stock triple again is not likely in the cards. While I think Nvidia can (and likely will) deliver a market-beating performance, there's another big tech stock that could outperform it in 2025."
            },
            {
                id: 3,
                title: "Nvidia Falls Just Short of Retaking Market-Cap Crown",
                date: "Nov 4, 2024",
                description: "The big Nvidia stock rally has pushed the company's market value to within striking distance of Apple's to make it the largest U.S. company by market capitalization. The stock, the only member of the Magnificent Seven tech stocks that rose Monday, ended the day with a market value of about $3.337 trillion, roughly $19 billion short of Apple's $3.356 trillion"
            },
            {
                id: 4,
                title: "NVIDIA's New Silent Partner Could be the Next Superstar",
                date: "Nov 3, 2024",
                description: "Nvidia is turning its attention to a new phase of the AI boom. And the worlds leading AI company is leaning on three silent partners to pull it off"
            },
            {
                id: 5,
                title: "Nvidia Among 5 Top Stocks Near Buy Point, But Fails To Join Meta Here",
                date: "Sep 30, 2024",
                description: "As it gets set to join the Dow, Nvidia stock leads five stocks near buy points, including Cava, Shopify, Vertiv and MercadoLibre."
                
            },
            {
                id: 6,
                title: "Is Microsoft Transferring Shareholder Value to Nvidia? This Analyst Says So.",
                date: "November 4, 2024",
                description: "Microsoft will continue to spend big on its generative AI projects, and that will benefit Nvidia more than the Windows parent, according to a D.A. Davidson analyst. Microsoft —one of several Magnificent 7 companies that reported earnings last week—posted first-quarter earnings and revenue that beat Wall Street expectations on Wednesday."
            },
            {
                id: 7,
                title: "Nvidia Shifts From Super Micro, Aims to Ensure AI Supply Consistency",
                date: "November 4, 2024",
                description: "Nvidia is said to be routing orders originally placed with Super Micro Computer to other vendors in order to minimize interruptions in the AI server supply chain"
            },
            {
                id: 8,
                title: "Nvidia Again Overtakes Apple as World's Most Valuable Company, Bolstered by Inclusion in Dow Jones Industrial Average",
                date: "November 4, 2024",
                description: "Nvidia Again Overtakes Apple as World's Most Valuable Company, Bolstered by Inclusion in Dow Jones Industrial Average"
            },
        ]
    },
]  

export default rawNews;