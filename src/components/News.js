import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'

    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }



    constructor(props) {
        super(props);
        console.log("Hello i AM  a constructor")
        this.state = {
            atrticles: [],
            loading: false,
            page: 1
        }
        document.title = this.props.category
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            atrticles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }


    //componentdidmount render kee baad run hoogaa
    //constructor render see bhee pehlee run hoorraa hee
    //fetch api takes one url and it returns  a promise
    //fetch that returns a promise take it as await
    //async function can wait inside its body to resolve some promises
    async componentDidMount() {
        console.log("component did mount")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            atrticles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log("previous")

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     atrticles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }
    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     console.log("next")
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true })
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     console.log(parsedData);

        //     this.setState({
        //         page: this.state.page + 1,
        //         atrticles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews()

    }

    render() {
        console.log("render")
        return (
            <div className="container my-3 " >
                <h1 className="text-center" style={{ margin: '40px 0px' }}>News Monkey - Top Headlines </h1>
                {this.state.loading && <Spinner />}

                <div className="row" >
                    {!this.state.loading && this.state.atrticles.map((element) => {

                        return <div className="col md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News









//2nd commented code
// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types';

// export class News extends Component {
//     static defaultProps = {
//         country: 'in',
//         pageSize: 6,
//         category: 'general'

//     }
//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }



//     constructor() {
//         super();
//         console.log("Hello i AM  a constructor")
//         this.state = {
//             atrticles: [],
//             loading: false,
//             page: 1
//         }
//     }


//     //componentdidmount render kee baad run hoogaa
//     //constructor render see bhee pehlee run hoorraa hee
//     //fetch api takes one url and it returns  a promise
//     //fetch that returns a promise take it as await
//     //async function can wait inside its body to resolve some promises
//     async componentDidMount() {
//         console.log("component did mount")
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=1&pageSize=${this.props.pageSize}`
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({
//             atrticles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//     }

//     handlePrevClick = async () => {
//         console.log("previous")

//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true })
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);

//         this.setState({
//             page: this.state.page - 1,
//             atrticles: parsedData.articles,
//             loading: false
//         })
//     }
//     handleNextClick = async () => {
//         if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
//             console.log("next")
//             let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//             this.setState({ loading: true })
//             let data = await fetch(url);
//             let parsedData = await data.json()
//             console.log(parsedData);

//             this.setState({
//                 page: this.state.page + 1,
//                 atrticles: parsedData.articles,
//                 loading: false
//             })
//         }

//     }

//     render() {
//         console.log("render")
//         return (
//             <div className="container my-3 " >
//                 <h1 className="text-center" style={{ margin: '40px 0px' }}>News Monkey - Top Headlines </h1>
//                 {this.state.loading && <Spinner />}

//                 <div className="row" >
//                     {!this.state.loading && this.state.atrticles.map((element) => {

//                         return <div className="col md-4" key={element.url}>
//                             <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

//                         </div>
//                     })}

//                 </div>
//                 <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//                     <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default News

















//1st commented code
// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {
//     articles = [
//         {
//             "source": {
//                 "id": null,
//                 "name": "Android Central"
//             },
//             "author": "michael.hicks@futurenet.com (Michael L Hicks)",
//             "title": "First 10 things to do with your new Garmin watch",
//             "description": "Garmin watches can be pricey, so make sure that you're getting the most out of them. Our fitness editor uses Garmin watches daily and has the info you need.",
//             "url": "https://www.androidcentral.com/wearables/first-things-to-do-with-your-new-garmin-watch",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/MQ9KtdWxxd8iVv9bDL8add-1200-80.jpeg",
//             "publishedAt": "2023-07-16T15:00:48Z",
//             "content": "Garmin watches are like onions: you need to peel down several layers of settings to get to the good stuff (and then cry from the hard workouts).\r\nEvery time I switch from Garmin to another watch bran… [+16855 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "Allan Jenkins",
//             "title": "The Danish meadow bursts into colour",
//             "description": "With the sun high in the sky and the night’s bright with reds and yellows and blues to enjoyMidsummer at the. summerhouse: 29C and a hosepipe ban. Small planes scan the plots for too-green grass. Water use is monitored. Drooping trees perk up with occasional …",
//             "url": "https://www.theguardian.com/lifeandstyle/2023/jul/16/the-danish-meadow-bursts-into-colour",
//             "urlToImage": "https://i.guim.co.uk/img/media/72cd2d6197423d2ff6c7dd8ccecd49656a1b29c3/0_555_3024_1814/master/3024.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=2f24873156a38713cc4f6ca36bef5dab",
//             "publishedAt": "2023-07-16T05:01:04Z",
//             "content": "Midsummer at the. summerhouse: 29C and a hosepipe ban. Small planes scan the plots for too-green grass. Water use is monitored. Drooping trees perk up with occasional light rain. The two-month no-mow… [+1872 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "David Williams",
//             "title": "Old world v new world: who wins?",
//             "description": "New Zealand v Alsace and South Africa v the Loire, the same grape in different areas brings very different rewardsTe Whare Ra Toru, Marlborough, New Zealand 2022 (£20.35, lescaves.co.uk) The wine world has a bit of a thing for events in which the wines of a s…",
//             "url": "https://www.theguardian.com/food/2023/jul/16/old-world-v-new-world-who-wins",
//             "urlToImage": "https://i.guim.co.uk/img/media/39658f8040eaca6608e2edb4dfc8babb92c3269d/0_366_5520_3314/master/5520.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=db504ad6535124e1be1c1a4f2e810b49",
//             "publishedAt": "2023-07-16T05:01:04Z",
//             "content": "Te Whare Ra Toru, Marlborough, New Zealand 2022 (£20.35, lescaves.co.uk) The wine world has a bit of a thing for events in which the wines of a supposed upstart from the New World are tasted alongsid… [+3170 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "Jay Rayner",
//             "title": "‘It feels sinless’: Jay Rayner on why Britain’s ice-cream business is booming",
//             "description": "An uncomplicated, comforting pleasure that harks back to childhood – post-Covid, it’s no surprise that ice-cream parlours are coming in from the cold<ul><li>OFM’s pick of the licks – 10 places for great ice-cream</li></ul>One lunchtime, a few weeks into the f…",
//             "url": "https://www.theguardian.com/food/2023/jul/16/it-feels-sinless-jay-rayner-britain-ice-cream-business-booming",
//             "urlToImage": "https://i.guim.co.uk/img/media/16337a2b90e5aa93f4a13e0e62b07f6eef527004/0_579_8688_5213/master/8688.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=fcccc1c67d4e55b78cac68a221decb66",
//             "publishedAt": "2023-07-16T10:00:06Z",
//             "content": "One lunchtime, a few weeks into the first lockdown of 2020, a customer came into Caliendos Gelato in Londons Kentish Town, bubbling with excitement. I asked her how long shed been waiting, says Miche… [+9198 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "Jay Rayner",
//             "title": "Lark, Bury St Edmunds: ‘Clever, relaxed, and hugely enjoyable’ – restaurant review",
//             "description": "A small ambitious team, classic cooking techniques and a pie to sigh over – the Lark is ascendingLark, 6A Angel Hill, Bury St Edmunds IP33 1UZ (larkrestaurant.co.uk). Snacks £2.50-£7, plates £11-£28, desserts £10-£12, wines from £25 a bottleSome words are mor…",
//             "url": "https://www.theguardian.com/food/2023/jul/16/lark-bury-st-edmunds-clever-relaxed-and-hugely-enjoyable-restaurant-review",
//             "urlToImage": "https://i.guim.co.uk/img/media/6a990dada06c307c5d7a067a6e6ac6694fada9f1/0_228_8280_4969/master/8280.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=922b5a2aabb032c0a82bd89615dc200c",
//             "publishedAt": "2023-07-16T05:01:04Z",
//             "content": "Lark, 6A Angel Hill, Bury St Edmunds IP33 1UZ (larkrestaurant.co.uk). Snacks £2.50-£7, plates £11-£28, desserts £10-£12, wines from £25 a bottle\r\nSome words are more abused than others. Special is on… [+8041 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "Georgina Hayden, Julie Lin, Louisa Allan & Shuki Rosenboim, Fuchsia Dunlop, Joe Trivelli and Sarit Packer",
//             "title": "Watermelon with Mexican spices, Malaysian mangos, Sichuanese aubergines – six salads for a hot summer",
//             "description": "Fresh and tangy, bright and spicy … keep cool with easy dishes from brilliant cooks such as Georgina Hayden and Fuchsia DunlopGeorgina Hayden Continue reading...",
//             "url": "https://www.theguardian.com/food/2023/jul/16/watermelon-mexican-spices-malaysian-mangos-sichuanese-aubergines-six-salads-georgina-hayden-fuchsia-dunlop",
//             "urlToImage": "https://i.guim.co.uk/img/media/95ca87407cd1e3f762f75cf2dea12d9c0b2ba749/466_2173_6266_3759/master/6266.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=87d03328ba55cf88367b315fd925746a",
//             "publishedAt": "2023-07-16T13:00:00Z",
//             "content": "Watermelon, feta and tajin salad (pictured above)\r\nGeorgina Hayden\r\nThere is little better than sweet, cooling watermelon on a long, hot summers day. And pairing it with salty feta (or halloumi if yo… [+10833 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Guardian"
//             },
//             "author": "Rachel Cooke, Shahnaz Ahsan and Eva Wiseman",
//             "title": "‘It’s not just the food we missed’: three writers remember beloved restaurants that closed down",
//             "description": "From student haunts to a first ‘proper’ meal out, why we mourn the places where we ate that are no longer with usOn the surface of it, the problem was straightforward. Somehow, we’d all made it to the sixth form, an elevation we thought so magnificent – oh, t…",
//             "url": "https://www.theguardian.com/food/2023/jul/16/its-not-just-the-food-we-missed-three-writers-remember-beloved-restaurants-that-closed-down",
//             "urlToImage": "https://i.guim.co.uk/img/media/d7bf5426367f14369e2059feeb6d7c4e59732029/0_228_1535_921/master/1535.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=aed040a786bb0af04e434e1d2aa67629",
//             "publishedAt": "2023-07-16T14:00:02Z",
//             "content": "Hanrahans, Sheffield\r\nOn the surface of it, the problem was straightforward. Somehow, wed all made it to the sixth form, an elevation we thought so magnificent oh, the grandness of being allowed to d… [+11872 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Slashdot.org"
//             },
//             "author": "EditorDavid",
//             "title": "If VanMoof eBikes Locks You Out of Your Own Bike, a Rival Company's App Could Help",
//             "description": "VanMoof ebikes is currently \"exploring all possible routes out of its debt\" after rumors of a pending bankruptcy. But the blog 9to5Mac highlights another concern. \n\n\"If the company goes under, and the servers go offline, that could leave ebike owners unable t…",
//             "url": "https://news.slashdot.org/story/23/07/15/233244/if-vanmoof-ebikes-locks-you-out-of-your-own-bike-a-rival-companys-app-could-help",
//             "urlToImage": "https://a.fsdn.com/sd/topics/opensource_64.png",
//             "publishedAt": "2023-07-16T01:34:00Z",
//             "content": "VanMoof ebikes is currently \"exploring all possible routes out of its debt\" after rumors of a pending bankruptcy. But the blog 9to5Mac highlights another concern.\"If the company goes under, and the s… [+1431 chars]"
//         },
//         {
//             "source": {
//                 "id": "business-insider",
//                 "name": "Business Insider"
//             },
//             "author": "Filip De Mott",
//             "title": "Here are 5 questions investors should consider when jumping into the huge rally in the 'Magnificent 7' stocks this year",
//             "description": "Just seven mega-cap stocks accounted for 73% of gains in the S&P 500 this year. Bank of America offers some insight for investors looking to join in.",
//             "url": "https://markets.businessinsider.com/news/stocks/tech-rally-magnificent-7-mega-cap-stocks-ai-5-questions-2023-7",
//             "urlToImage": "https://i.insider.com/64b16cb69751e300192a2159?width=1200&format=jpeg",
//             "publishedAt": "2023-07-16T12:30:06Z",
//             "content": "Artificial intelligence and chartsYuichiro Chino/Getty Images\r\n<ul>\n<li>The \"Magnificent Seven\"mega-cap stocks accounted for 73% of gains in the S&P 500 in the first half. </li>\n<li>There are five ke… [+3827 chars]"
//         },
//         {
//             "source": {
//                 "id": "business-insider",
//                 "name": "Business Insider"
//             },
//             "author": "Chris Johnston",
//             "title": "There's going to be a lot less new TV for a while. And that's brilliant.",
//             "description": "There's one big upside for viewers after both actors and writers decided to walk out in their dispute with studios and streamers: breathing space.",
//             "url": "https://www.businessinsider.com/actors-and-writers-strikes-will-mean-less-tv-thats-brilliant-2023-7",
//             "urlToImage": "https://i.insider.com/64b2ed62f9a2590019477642?width=1200&format=jpeg",
//             "publishedAt": "2023-07-16T09:20:05Z",
//             "content": "The term \"peak TV\" was coined in 2015, when just 420 shows were released. Last year it was almost 600.Getty Images\r\n<ul>\n<li>Hollywood is facing its first strike by both writers and actors in more th… [+3261 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Hipertextual"
//             },
//             "author": "Aglaia Berlutti",
//             "title": "Todo lo que debes recordar de ‘Fundación’ antes de su segunda temporada",
//             "description": "En el último capítulo de su primera temporada, Fundación, disponible en Apple TV+, dejó claro que la galaxia habitada, estaba a punto de derrumbarse en caos. Por un lado, el emperador Cleon (Lee Page en su versión adulta), se rebeló contra la larga tradición …",
//             "url": "http://hipertextual.com/2023/07/todo-lo-que-debefundacion-lo-que-debes-saber-antes-de-ver-la-nueva-temporadas-recordar-de-la-serie-fundacion-de-appletv-antes-de-su-segunda-temporada",
//             "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/07/uAWB8qOs7L6zGTwxAbeT97AsJk6-scaled.jpg?fit=2560%2C1440&quality=50&strip=all&ssl=1",
//             "publishedAt": "2023-07-16T10:02:00Z",
//             "content": "En el último capítulo de su primera temporada, Fundación, disponible en Apple TV+, dejó claro que la galaxia habitada, estaba a punto de derrumbarse en caos. Por un lado, el emperador Cleon (Lee Page… [+6056 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Planetcom.co.uk"
//             },
//             "author": "Planet Computers",
//             "title": "PlanetPC XR ARM-based Desktop Linux Computers",
//             "description": "Comments",
//             "url": "https://store.planetcom.co.uk/collections/desktop-pcs",
//             "urlToImage": "https://store.planetcom.co.uk/cdn/shop/collections/Banner-PlanetPC-Desktops_600x.jpg?v=1677154756",
//             "publishedAt": "2023-07-16T01:32:14Z",
//             "content": "Join our mailing list to get the latest on products, discounts, events and more…\r\n© 2023 Planet Computers.\r\n Powered by Shopify\r\nAmerican Express\r\nApple Pay\r\nDiners Club\r\nDiscover\r\nGoogle Pay\r\nMaestr… [+29 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Xeiaso.net"
//             },
//             "author": null,
//             "title": "I don't know how I feel about email",
//             "description": "I don't know how I feel about email - Xe's Blog",
//             "url": "https://xeiaso.net/blog/idk-about-email",
//             "urlToImage": "https://cdn.xeiaso.net/file/christine-static/hero/uncertain-foxgirl-smol.png",
//             "publishedAt": "2023-07-16T11:57:34Z",
//             "content": "Image generated by Counterfeit -- a girl with yellow eyes, pink hair, fox ears, a white hoodie, and a short skirt walking through a park; her hair is very long and is wearing a very uncertain look.\r\n… [+5724 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "9to5Mac"
//             },
//             "author": "Benjamin Mayo",
//             "title": "Gurman: First M3 Apple Silicon Macs likely to launch in October",
//             "description": "Apple is preparing to launch its first M3 Apple Silicon Macs in October, according to Mark Gurman in his latest Power On newsletter for Bloomberg.\nFollowing the usually new iPhone launch event in September, where we are expecting the iPhone 15 and Apple Watch…",
//             "url": "https://9to5mac.com/2023/07/16/m3-apple-silicon-mac-october/",
//             "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/06/MacBook-Air-2022.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//             "publishedAt": "2023-07-16T12:28:47Z",
//             "content": "Apple is preparing to launch its first M3 Apple Silicon Macs in October, according to Mark Gurman in his latest Power On newsletter for Bloomberg.\r\nFollowing the usually new iPhone launch event in Se… [+1627 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "9to5Mac"
//             },
//             "author": "Michael Potuck",
//             "title": "iPhone Live Voicemail: How to use and turn off/on in iOS 17",
//             "description": "iPhone Live Voicemail is a new feature arriving with iOS 17 that will help with the growing problem of spam calls as well as deciding when you want/need to answer from callers you do know. Follow along for how to use and turn off/on iPhone Live Voicemail.\n mo…",
//             "url": "https://9to5mac.com/2023/07/15/iphone-live-voicemail-how-to-use-turn-off-on/",
//             "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/off-on-iphone-live-voicemail.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//             "publishedAt": "2023-07-16T00:05:00Z",
//             "content": "iPhone Live Voicemail is a new feature arriving with iOS 17 that will help with the growing problem of spam calls as well as deciding when you want/need to answer from callers you do know. Follow alo… [+1756 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "AppleInsider"
//             },
//             "author": "news@appleinsider.com (Chip Loder)",
//             "title": "How to install and use Game Porting Toolkit in Xcode",
//             "description": "Apple's Game Porting Toolkit launch at WWDC offered a way for developers to see how Windows games ran on Apple Silicon before porting it to macOS. Here's how to install and use the toolkit.Game Porting ToolkitAt WWDC '23, Apple released the Game Porting Toolk…",
//             "url": "https://appleinsider.com/inside/macos-sonoma/tips/how-to-install-and-use-game-porting-toolkit-in-xcode",
//             "urlToImage": "https://photos5.appleinsider.com/gallery/55283-112551-gameportingtoolkitheader-xl.jpg",
//             "publishedAt": "2023-07-16T16:13:20Z",
//             "content": "Game Porting Toolkit\r\nApple's Game Porting Toolkit launch at WWDC offered a way for developers to see how Windows games ran on Apple Silicon before porting it to macOS. Here's how to install and use … [+10985 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "AppleInsider"
//             },
//             "author": "news@appleinsider.com (Malcolm Owen)",
//             "title": "Apple has a unique working arrangement with the Vision Pro team",
//             "description": "Apple is handling the team working on the Apple Vision Pro very differently to the rest of its business, with a dedicated division working on it rather than relying on the work of multiple separate departments.Apple Vision ProApple's development of products o…",
//             "url": "https://appleinsider.com/articles/23/07/16/apple-has-a-unique-working-arrangement-with-the-vision-pro-team",
//             "urlToImage": "https://photos5.appleinsider.com/gallery/55409-112558-54880-111191-54808-110943-Apple-Vision-Pro-Battery-Connection-xl-xl-xl.jpg",
//             "publishedAt": "2023-07-16T14:14:01Z",
//             "content": "Apple Vision Pro\r\nApple is handling the team working on the Apple Vision Pro very differently to the rest of its business, with a dedicated division working on it rather than relying on the work of m… [+3300 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "AppleInsider"
//             },
//             "author": "news@appleinsider.com (Malcolm Owen)",
//             "title": "Rumor: Apple may introduce iPhone 15 in pink",
//             "description": "The iPhone 15 could be offered in more new colors than previously thought, with a leak claiming the lineup could include a pink option for 2023.iPhone 14 and iPhone 14 PlusAs the September launch of the iPhone 15 gets closer, rumors about the color choices of…",
//             "url": "https://appleinsider.com/articles/23/07/16/apple-may-introduce-pink-iphone-15-says-new-color-leak",
//             "urlToImage": "https://photos5.appleinsider.com/gallery/55407-112556-54970-111508-000-lead-iPhone-14-and-Plus-xl-xl.jpg",
//             "publishedAt": "2023-07-16T12:37:24Z",
//             "content": "iPhone 14 and iPhone 14 Plus\r\nThe iPhone 15 could be offered in more new colors than previously thought, with a leak claiming the lineup could include a pink option for 2023. \r\nAs the September launc… [+1673 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "AppleInsider"
//             },
//             "author": "news@appleinsider.com (Malcolm Owen)",
//             "title": "First Apple Silicon M3 Mac releases rumored for October launch",
//             "description": "Apple is still on track to bring out its first M3 models of Apple Silicon Macs before the end of 2023, a report claims, with an October launch for the models thought to be in the works.24-inch iMacApple often launches new Macs in the fall as part of a catalog…",
//             "url": "https://appleinsider.com/articles/23/07/16/first-apple-silicon-m3-releases-rumored-for-october-launch",
//             "urlToImage": "https://photos5.appleinsider.com/gallery/55408-112557-55285-112312-53318-106961-52966-105986-46872-91365-43380-84314-imac-24-inch-xl-xl-xl-xl-xl-xl.jpg",
//             "publishedAt": "2023-07-16T13:02:45Z",
//             "content": "24-inch iMac\r\nApple is still on track to bring out its first M3 models of Apple Silicon Macs before the end of 2023, a report claims, with an October launch for the models thought to be in the works.… [+1214 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "AppleInsider"
//             },
//             "author": "news@appleinsider.com (Amber Neely)",
//             "title": "Jamstik Studio Review: more than just a midi instrument",
//             "description": "Rock out with Jamstik Studio, a beginner-friendly electric guitar that doubles as a midi controller for all your favorite music creation programs.Jamstik StudioCreating music has never been more accessible. Thanks to the prevalence of digital audio workstatio…",
//             "url": "https://appleinsider.com/articles/23/07/16/jamstik-studio-review-more-than-just-a-midi-instrument",
//             "urlToImage": "https://photos5.appleinsider.com/gallery/55227-112340-js-header-xl.jpg",
//             "publishedAt": "2023-07-16T14:07:20Z",
//             "content": "Jamstik Studio\r\nRock out with Jamstik Studio, a beginner-friendly electric guitar that doubles as a midi controller for all your favorite music creation programs.\r\nCreating music has never been more … [+6764 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Yanko Design"
//             },
//             "author": "Aki Ukita",
//             "title": "6 Game-Changing Features That Makes xBloom the “Tesla of Coffee Machine”",
//             "description": "6 Game-Changing Features That Makes xBloom the “Tesla of Coffee Machine”Dubbed the “Tesla of Coffee Machines” by our Editor-in-Chief, the xBloom is the first-ever coffee machine that introduces an Autopilot feature to the art of...",
//             "url": "https://www.yankodesign.com/2023/07/15/6-game-changing-features-that-makes-xbloom-the-tesla-of-coffee-machine/",
//             "urlToImage": "https://www.yankodesign.com/images/design_news/2023/07/6_game-changing_features_that_makes_this_the_Tesla_of_coffee_machine_hero.jpg",
//             "publishedAt": "2023-07-16T01:45:44Z",
//             "content": "Dubbed the “Tesla of Coffee Machines” by our Editor-in-Chief, the xBloom is the first-ever coffee machine that introduces an Autopilot feature to the art of making coffee. A pristine machine that loo… [+6905 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Applesfera.com"
//             },
//             "author": "Fran Bouzas",
//             "title": "Así puedes recuperar tu dinero si has olvidado cancelar una suscripción de la App Store en tu iPhone",
//             "description": "A todos nos ha pasado alguna vez eso de activar una prueba gratis en alguna aplicación de nuestro iPhone, olvidarnos de cancelarla antes de que finalice el periodo gratuito y recibir una notificación de nuestro banco de que nos la han cobrado. Si no lo record…",
//             "url": "https://www.applesfera.com/tutoriales/asi-puedes-recuperar-tu-dinero-has-olvidado-cancelar-suscripcion-app-store-tu-iphone",
//             "urlToImage": "https://i.blogs.es/5a8a6b/james-yarema-g3q7mxxkp-m-unsplash/840_560.jpeg",
//             "publishedAt": "2023-07-16T15:01:28Z",
//             "content": "A todos nos ha pasado alguna vez eso de activar una prueba gratis en alguna aplicación de nuestro iPhone, olvidarnos de cancelarla antes de que finalice el periodo gratuito y recibir una notificación… [+3327 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "MakeUseOf"
//             },
//             "author": "Will Graf",
//             "title": "4 Reasons Why the 15-inch MacBook Air Is the Best Laptop Apple Sells",
//             "description": "The 15-inch MacBook Air is an excellent addition to Apple's lineup, as it strikes the perfect balance between size and portability.",
//             "url": "https://www.makeuseof.com/why-15-inch-macbook-air-best-laptop-apple-sells/",
//             "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/06/15-inch-m2-macbook-air-hero-image.jpg",
//             "publishedAt": "2023-07-16T15:30:21Z",
//             "content": "The MacBook Air is an incredibly popular laptop for users who want to perform basic tasks. However, it has only come in a 13-inch model since the 11-inch version was discontinued years ago.\r\nAt WWDC … [+3445 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Xataka Android"
//             },
//             "author": "Alejandro Alcolea",
//             "title": "Aviso de radares en Waze: cómo funcionan y así se activan",
//             "description": "Una de las mejores aplicaciones de navegación GPS es Waze. Es la preferida de muchos usuarios incluso por encima de Google Maps y Apple Maps, y aunque hay alternativas como Magic Earth, Waze sigue teniendo algo único: una gran base de usuarios que actúan como…",
//             "url": "https://www.xatakandroid.com/navegacion-y-mapas/aviso-radares-waze-asi-puedes-activarlos",
//             "urlToImage": "https://i.blogs.es/b28fe8/runtime-service-9/840_560.jpeg",
//             "publishedAt": "2023-07-16T16:01:27Z",
//             "content": "Una de las mejores aplicaciones de navegación GPS es Waze. Es la preferida de muchos usuarios incluso por encima de Google Maps y Apple Maps, y aunque hay alternativas como Magic Earth, Waze sigue te… [+3310 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "BGR"
//             },
//             "author": "José Adorno",
//             "title": "How to download offline maps in Apple Maps on iOS 17",
//             "description": "iOS 17 is full of new features, one of which Apple Maps users have been requesting for a very long time: the ability to download …\nThe post How to download offline maps in Apple Maps on iOS 17 appeared first on BGR.",
//             "url": "https://bgr.com/tech/how-to-download-offline-apple-maps-on-ios-17/",
//             "urlToImage": "https://bgr.com/wp-content/uploads/2023/02/apple-maps-bug-bgr.jpg?quality=82&strip=all",
//             "publishedAt": "2023-07-16T16:06:00Z",
//             "content": "iOS 17 is full of new features, one of which Apple Maps users have been requesting for a very long time: the ability to download and manage offline maps. That way, iPhone owners can navigate cities w… [+1897 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "BGR"
//             },
//             "author": "Chris Smith",
//             "title": "Apple’s password manager just got a big update in macOS Sonoma",
//             "description": "I believe that password manager apps like 1Password and Proton Pass are among the most important applications you can install on a new device. Password …\nThe post Apple’s password manager just got a big update in macOS Sonoma appeared first on BGR.",
//             "url": "https://bgr.com/tech/apples-password-manager-just-got-a-big-update-in-macos-sonoma/",
//             "urlToImage": "https://bgr.com/wp-content/uploads/2023/06/apple-wwdc-2023-ios-17-reality-160.jpg?quality=82&strip=all",
//             "publishedAt": "2023-07-16T13:02:00Z",
//             "content": "I believe that password manager apps like 1Password and Proton Pass are among the most important applications you can install on a new device. Password managers securely hold all your login credentia… [+3794 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Techmeme.com"
//             },
//             "author": null,
//             "title": "Russia bans officials and state employees from using Apple devices for \"work purposes\", after the FSB claimed Apple helped the NSA surveil Russian iPhone users (Anastasia Stognei/Financial Times)",
//             "description": "Anastasia Stognei / Financial Times:\nRussia bans officials and state employees from using Apple devices for “work purposes”, after the FSB claimed Apple helped the NSA surveil Russian iPhone users  —  FSB enforces crackdown on use by state officials after cla…",
//             "url": "https://www.techmeme.com/230716/p2",
//             "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8da7f9e0-dfc4-4463-9c92-ef671bb46ff0.jpg?source=next-opengraph&fit=scale-down&width=900",
//             "publishedAt": "2023-07-16T04:35:00Z",
//             "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 12:35 AM ET, July 16, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo vie… [+169 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Appinn.com"
//             },
//             "author": "青小蛙",
//             "title": "MultiTimer – 同时启动 12+ 个计时器，可远程网页调用[iOS/Android]",
//             "description": "MultiTimer 是一款能够同时启动 12+ 个计时器的 Android、iPhone、iPad、Apple Watch 应用，最有意思的是，它提供一个远程网页调用页面，能够同步显示你在移动设备里的计时器，感觉很酷，",
//             "url": "https://www.appinn.com/multi-timer/",
//             "urlToImage": "https://www.appinn.com/wp-content/uploads/2023/07/appinn-feature-images-2023-07-16t120725-716.jpgo_.jpg",
//             "publishedAt": "2023-07-16T04:50:22Z",
//             "content": "MultiTimer 12+ AndroidiPhoneiPadApple Watch @Appinn\r\nMultiTimer #\r\n MultiTimer \r\n MultiTimer 1 12 \r\n 100 …\r\n<ul><li></li><li></li><li></li><li> iCloud vip</li><li></li><li>15</li><li>Siri x-callback-… [+59 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Xatakamovil.com"
//             },
//             "author": "Eva Rodriguez",
//             "title": "Cinco cosas de Waze por las que lo prefiero a Google Maps cuando voy en coche",
//             "description": "La popularidad de Google y sus aplicaciones y que estas vengan instaladas por defecto en los móviles Android hacen que sus apps partan de una posición ventajosa frente a otras alternativas, pero hay vida más allá de las aplicaciones por defecto de Google y en…",
//             "url": "https://www.xatakamovil.com/aplicaciones/cinco-cosas-waze-que-prefiero-a-google-maps-cuando-voy-coche",
//             "urlToImage": "https://i.blogs.es/ec34ff/wa/840_560.jpeg",
//             "publishedAt": "2023-07-16T14:01:28Z",
//             "content": "La popularidad de Google y sus aplicaciones y que estas vengan instaladas por defecto en los móviles Android hacen que sus apps partan de una posición ventajosa frente a otras alternativas, pero hay … [+2818 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Techmeme.com"
//             },
//             "author": null,
//             "title": "Sources: Mike Rockwell's division is now called Vision Products Group, hinting at an organizational change at Apple; Apple may hold an October event for M3 Macs (Mark Gurman/Bloomberg)",
//             "description": "Mark Gurman / Bloomberg:\nSources: Mike Rockwell's division is now called Vision Products Group, hinting at an organizational change at Apple; Apple may hold an October event for M3 Macs  —  Apple's new Vision Products Group reflects a shift away from its fame…",
//             "url": "https://www.techmeme.com/230716/p7",
//             "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8BqELDy5D0E/v0/1200x800.jpg",
//             "publishedAt": "2023-07-16T14:45:02Z",
//             "content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 10:45 AM ET, July 16, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo vie… [+68 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Playpcesor.com"
//             },
//             "author": "Esor Huang",
//             "title": "Google 文件投票方塊 7 種工作應用案例，從贊成反對到簡單審核",
//             "description": "當我們想要在團隊中收集大家意見，投票討論決策時，小至訂個便當，大到決定工作方向，可能我們都習慣利用像是「 Google 表單 」這樣的工具進行問卷調查。不過，既然 Google 文件本身就可以進行多人協作， 有時候我們要討論的內容就在原本的 Google 文件上（例如會議記錄、...",
//             "url": "https://www.playpcesor.com/2023/07/google-7.html",
//             "urlToImage": "https://blogger.googleusercontent.com/img/a/AVvXsEiGZq4TTPbPGlxV0GZb_z1LYNGR9NWYju4b9FeZtI2ZvZS1Br9P-EIRKCqqWXhjRmYTvjhLOorXKOwkJN8eWPnrZYnkF6-IXRmsn3C7lAEKSQUCcQ58ixdypX_bhMuRZIZ4T-aNPMcVWeUPzcbinBBu0YvHWEIKbn5rqEe1THRvmIV0BVHWRSO59w=w1200-h630-p-k-no-nu",
//             "publishedAt": "2023-07-16T05:55:00Z",
//             "content": "當我們想要在團隊中收集大家意見，投票討論決策時，小至訂個便當，大到決定工作方向，可能我們都習慣利用像是「 Google 表單」這樣的工具進行問卷調查。不過，既然 Google 文件本身就可以進行多人協作，有時候我們要討論的內容就在原本的 Google 文件上（例如會議記錄、專案企劃文件），那有沒有更簡單的方式，在我們日常的文件流程中就能完成投票決定？\r\nGoogle 文件上近期新增的「投票方塊」… [+2361 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Caschys Blog"
//             },
//             "author": "André Westphal",
//             "title": "PC-Auslieferungsmengen sinken auch im zweiten Quartal 2023",
//             "description": "Laut den Analysten der International Data Corporation (IDC) habe sich die schwache Nachfrage im PC-Segment auch im zweiten Quartal 2023 fortgesetzt. Vergleicht man das zweite Quartal 2023 mit dem zweiten Quartal 2022, dann sind die Auslieferungsmengen nach vo…",
//             "url": "https://stadt-bremerhaven.de/pc-auslieferungsmengen-sinken-auch-im-zweiten-quartal-2023/",
//             "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/03/playgames-pc_.jpg",
//             "publishedAt": "2023-07-16T07:30:52Z",
//             "content": "Laut den Analysten der International Data Corporation (IDC) habe sich die schwache Nachfrage im PC-Segment auch im zweiten Quartal 2023 fortgesetzt. Vergleicht man das zweite Quartal 2023 mit dem zwe… [+2794 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Caschys Blog"
//             },
//             "author": "Felix Frank",
//             "title": "Aqara Door and Window P2: Thread-Sensor mit Matter-Unterstützung ausprobiert",
//             "description": "Der chinesische Hersteller für Smart-Home-Komponenten Aqara ist beliebt für seine günstigen Sensoren und Aktoren. Per Update hat Aqara inzwischen auch einige Hubs Matter-kompatibel gemacht. Bedeutet: Der Aqara-Hub kommuniziert über Zigbee mit Sensoren und rei…",
//             "url": "https://stadt-bremerhaven.de/aqara-door-and-window-p2-thread-sensor-mit-matter-unterstuetzung-ausprobiert/",
//             "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/SCR-20230705-pxyd.jpeg",
//             "publishedAt": "2023-07-16T13:30:53Z",
//             "content": "Der chinesische Hersteller für Smart-Home-Komponenten Aqara ist beliebt für seine günstigen Sensoren und Aktoren. Per Update hat Aqara inzwischen auch einige Hubs Matter-kompatibel gemacht. Bedeutet:… [+7893 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Caschys Blog"
//             },
//             "author": "André Westphal",
//             "title": "Yamaha True X: Soundbar, Subwoofer und Wireless-Lautsprecher vorgestellt",
//             "description": "Yamaha hat True X vorgestellt. Man spricht von einem „flexiblen Surround-System“ und bietet dabei in erster Linie Soundbar, Subwoofer und Wireless-Rear-Lautsprecher getrennt voneinander an, statt im Bundle. Allerdings steigert man dabei auch die Flexibilität.…",
//             "url": "https://stadt-bremerhaven.de/yamaha-true-x-soundbar-subwoofer-und-wireless-lautsprecher-vorgestellt/",
//             "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/yamaha_true_x.jpg",
//             "publishedAt": "2023-07-16T09:00:45Z",
//             "content": "Yamaha hat True X vorgestellt. Man spricht von einem „flexiblen Surround-System“ und bietet dabei in erster Linie Soundbar, Subwoofer und Wireless-Rear-Lautsprecher getrennt voneinander an, statt im … [+3063 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Frandroid"
//             },
//             "author": "Yazid Amer",
//             "title": "Notre sélection des meilleures multiprises connectées pour votre maison",
//             "description": "Une multiprise connectée ne permet pas uniquement d’alimenter plusieurs appareils en utilisant une seule prise murale. Elle apporte un peu d’intelligence à vos objets électriques non connectés, tout en vous aidant à réaliser des économies d’énergie.",
//             "url": "https://www.frandroid.com/guide-dachat/1711769_les-meilleures-multiprises-connectees-pour-rendre-vos-objets-connectes-notre-selection",
//             "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/06/les-meilleures-multiprises-connectees.jpg",
//             "publishedAt": "2023-07-16T09:02:35Z",
//             "content": "Une multiprise connectée ne permet pas uniquement dalimenter plusieurs appareils en utilisant une seule prise murale. Elle apporte un peu dintelligence à vos objets électriques non connectés, tout en… [+13706 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "GSMArena.com"
//             },
//             "author": "Peter",
//             "title": "Weekly poll: Nothing Phone (2) open sales are about to begin, are you getting one?",
//             "description": "After successfully entering the phone market, it’s time for Nothing to grow – and the Nothing Phone (2) did just that, going from the 6.55” of the original to 6.7”. Since open sales of the second generation model begin next week we wanted to take a vote on wh…",
//             "url": "https://www.gsmarena.com/weekly_poll_nothing_phone_2_open_sales_are_about_to_begin_are_you_getting_one-news-59194.php",
//             "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/07/weekly-poll-nothing-phone-2/-952x498w6/gsmarena_000.jpg",
//             "publishedAt": "2023-07-16T04:06:01Z",
//             "content": "After successfully entering the phone market, its time for Nothing to grow and the Nothing Phone (2) did just that, going from the 6.55 of the original to 6.7. Since open sales of the second generati… [+2286 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "GSMArena.com"
//             },
//             "author": "Peter",
//             "title": "Weekly deals: the best smartphone deals from Germany, the UK, the US and India",
//             "description": "Nothing Phone (2) open sales begin next week (this time including the North American market), so we looked at it and some alternatives. We found plenty of value-for-money mid-rangers and some cool entry-level phones too.\n\n\n Germany\n The UK\n USA\n India\n\n\n Germ…",
//             "url": "https://www.gsmarena.com/weekly_deals_the_best_smartphone_deals_from_germany_the_uk_the_us_and_india-news-59213.php",
//             "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/07/weekly-deals-14/-952x498w6/gsmarena_000.jpg",
//             "publishedAt": "2023-07-16T08:09:01Z",
//             "content": "Nothing Phone (2) open sales begin next week (this time including the North American market), so we looked at it and some alternatives. We found plenty of value-for-money mid-rangers and some cool en… [+11429 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "01net.com"
//             },
//             "author": "Mickael Bazoge",
//             "title": "De nouveaux Mac encore plus puissants dès le mois d’octobre ?",
//             "description": "Le début de l'année a été bien chargé au niveau des Mac, mais Apple ne devrait pas relâcher son effort pour autant. De nouveaux Mac équipés d'une puce M3 pourraient ainsi être dévoilés dès le mois d'octobre.",
//             "url": "https://www.01net.com/actualites/de-nouveaux-mac-encore-plus-puissants-des-le-mois-doctobre.html",
//             "urlToImage": "https://www.01net.com/app/uploads/2023/07/3460-mea.webp",
//             "publishedAt": "2023-07-16T15:48:12Z",
//             "content": "Le début de l’année a été bien chargé au niveau des Mac, mais Apple ne devrait pas relâcher son effort pour autant. De nouveaux Mac équipés d’une puce M3 pourraient ainsi être dévoilés dès le mois d’… [+1987 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "01net.com"
//             },
//             "author": "Bons Plans 01net",
//             "title": "Avec la Bbox fit, le prix de la fibre optique est presque réduit à néant",
//             "description": "La fibre optique est en général assez chère, mais c'était sans compter sur cette nouvelle offre hors du commun.",
//             "url": "https://www.01net.com/bons-plans/avec-la-bbox-fit-le-prix-de-la-fibre-optique-est-presque-reduit-a-neant.html",
//             "urlToImage": "https://www.01net.com/app/uploads/2023/06/fit-box-bouygues.jpg",
//             "publishedAt": "2023-07-16T13:07:52Z",
//             "content": "La fibre optique est en général assez chère, mais c’était sans compter sur cette nouvelle offre hors du commun.La Bbox fit est à seulement 17,99 euros par mois en ce moment,  au lieu du prix de renou… [+3643 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "PCWorld"
//             },
//             "author": "DealPost Team",
//             "title": "Carry fewer cables with this mobile keyring — now 37% off",
//             "description": "These days, our everyday carry is more complicated than ever. We’ve got multiple devices with different accessory needs to the point where we end up with so much bulk and tangled cables. It can be a real nuisance. That’s where WonderCube Pro comes in.\r\n\n\n\n\nTh…",
//             "url": "https://www.pcworld.com/article/1995246/carry-fewer-cables-with-this-mobile-keyring-now-37-off.html",
//             "urlToImage": "https://www.pcworld.com/wp-content/uploads/2023/07/PCWorld-WonderCube-Pro-All-In-One-Mobile-Keyring.jpeg?quality=50&strip=all&w=1024",
//             "publishedAt": "2023-07-16T08:00:00Z",
//             "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nThese days, our ever… [+1176 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Jake Lerch)",
//             "title": "The S&P 500 Has Grown Top-Heavy. Here's Why That's a Problem.",
//             "description": "Apple and Microsoft are doing the heavy lifting within the S&P 500 -- which could leave some investors in a tricky spot.",
//             "url": "https://www.fool.com/investing/2023/07/16/sp-500-grown-top-heavy-heres-why-problem/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739160/sp500-spy-money-investing.jpg",
//             "publishedAt": "2023-07-16T10:00:00Z",
//             "content": "It's been all systems go for the S&amp;P 500 index this year. Indeed, with a year-to-date return of 17%, a rebound from last year's dreadful 18% decline is almost complete.\r\nHowever, there is one und… [+3410 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Parkev Tatevosian, CFA)",
//             "title": "1 Unstoppable Stock That Could Join Apple, Microsoft, Nvidia, Amazon, and Alphabet in the $1 Trillion Club",
//             "description": "The $1 trillion market capitalization milestone has been breached by relatively few companies.",
//             "url": "https://www.fool.com/investing/2023/07/16/1-unstoppable-stock-that-could-join-apple-microsof/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739979/1-trillion-market-cap.png",
//             "publishedAt": "2023-07-16T10:00:00Z",
//             "content": "Parkev Tatevosian, CFA has no position in any of the stocks mentioned. The Motley Fool has positions in and recommends Tesla. The Motley Fool has a disclosure policy.\r\nSuzanne Frey, an executive at A… [+390 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Adria Cimino)",
//             "title": "Warren Buffett Doesn't Diversify Investments Across Stocks. Should You?",
//             "description": "More than 90% of Buffett's holdings are concentrated in a few sectors.",
//             "url": "https://www.fool.com/investing/2023/07/16/buffett-doesnt-diversify-investments-should-you/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739820/warren-buffett-4-tmf-may-2014.jpg",
//             "publishedAt": "2023-07-16T09:30:00Z",
//             "content": "Whether you started investing today or decades ago, you've probably heard a lot about the importance of diversification. That's the idea of spreading your investments across a variety of stocks and i… [+3709 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Danny Vena)",
//             "title": "Warren Buffett Reveals the Simple \"Trick\" to Successful Investing and 3 Steps to Get There",
//             "description": "The Oracle of Omaha says using these three steps will make an \"enormous difference.\"",
//             "url": "https://www.fool.com/retirement/2023/07/16/warren-buffett-reveals-the-simple-trick-to-success/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739659/buffett8-tmf.jpg",
//             "publishedAt": "2023-07-16T10:30:00Z",
//             "content": "Any list of the greatest investors of all time would undoubtedly find renowned Berkshire Hathaway(BRK.A -0.85%)(BRK.B -0.71%) CEO Warren Buffett near the top of that list. The so-called Oracle of Oma… [+4615 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Leo Sun)",
//             "title": "Better Buy: DocuSign vs. Dropbox",
//             "description": "Which of these disruptive digital platforms has a brighter future?",
//             "url": "https://www.fool.com/investing/2023/07/16/better-buy-docusign-vs-dropbox/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739599/person-signs-for-package.jpg",
//             "publishedAt": "2023-07-16T12:47:00Z",
//             "content": "DocuSign(DOCU -2.24%) and Dropbox(DBX -1.76%) both simplified how companies conduct business with their digital platforms. DocuSign, which controls about 70% of the global e-signature market, elimina… [+4555 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Motley Fool"
//             },
//             "author": "newsfeedback@fool.com (Danny Vena)",
//             "title": "A Bull Market Is Coming: 1 Incredible Growth Stock to Buy Hand Over Fist Before It Soars 131%, According to Wall Street",
//             "description": "This stock is a household name ravaged by the challenging economy. It could rebound big-time if analysts are right.",
//             "url": "https://www.fool.com/investing/2023/07/16/bull-market-coming-incredible-growth-stock-buy/",
//             "urlToImage": "https://g.foolcdn.com/editorial/images/739328/a-person-sitting-at-an-outdoor-cafe-paying-online-using-a-credit-card.jpg",
//             "publishedAt": "2023-07-16T11:10:00Z",
//             "content": "Last year was a tough one for investors, with the stock market suffering its worst performance in more than a decade. At long last, however, it appears the economy -- and by extension, the stock mark… [+5830 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Deadline"
//             },
//             "author": "Dade Hayes",
//             "title": "SAG-AFTRA And WGA Fears About AI Are Warranted After 15 Years Of Streaming Chaos, Says ‘Oppenheimer’ Director Christopher Nolan: Companies “Don’t Want To Take Responsibility For Whatever That Algorithm Does”",
//             "description": "Christopher Nolan sees the insistence by striking SAG-AFTRA and WGA members that studios and streamers limit the use of artificial intelligence stems directly from the explosion of streaming over the past decade-plus. Referring to the current “labor dispute” …",
//             "url": "https://deadline.com/2023/07/sag-aftra-wga-ai-fears-warranted-streaming-oppenheimer-christopher-nolan-1235439122/",
//             "urlToImage": "https://deadline.com/wp-content/uploads/2023/07/Christopher-Nolan-2.jpg?w=1024",
//             "publishedAt": "2023-07-16T01:06:46Z",
//             "content": "Christopher Nolan sees the insistence by striking SAG-AFTRA and WGA members that studios and streamers limit the use of artificial intelligence stems directly from the explosion of streaming over the… [+2888 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Creative Bloq"
//             },
//             "author": "Daniel Piper",
//             "title": "Everyone's saying the same thing about Apple's latest Mac software",
//             "description": "Got an iPhone? macOS Sonoma might look familiar.",
//             "url": "https://www.creativebloq.com/news/macos-sonoma-iphone",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/MTVaX2UujoyyxsBNNyQLeN-1200-80.jpg",
//             "publishedAt": "2023-07-16T06:43:51Z",
//             "content": "While Apple's blockbuster software updates for the iPhone, Apple Watch and Mac likely won't arrive until September (along with the iPhone 15), users are now able to give them a try thanks to the newl… [+1953 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Creative Bloq"
//             },
//             "author": "Paul Hatton",
//             "title": "DaVinci Resolve for iPad review: no mere gimmick for video editors",
//             "description": "DaVinci Resolve has managed to replicate its incredible desktop editor for use on an iPad.",
//             "url": "https://www.creativebloq.com/reviews/davinci-resolve-for-ipad",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/uVfWkAupisMHq5k6h6Pufb-1200-80.jpg",
//             "publishedAt": "2023-07-16T06:00:26Z",
//             "content": "One of the most pro apps for the iPad, released to date, is DaVinci Resolve. In the Non-Linear Editor (NLE) market it even beat Final Cut Pro in the race to the App store. This is something I’m reall… [+5271 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "La Vanguardia"
//             },
//             "author": "Fran Besora",
//             "title": "Cómo escribir el símbolo de Apple () en tu iPhone, iPad y Mac",
//             "description": "Te vamos a enseñar cómo escribir el símbolo de Apple en tu iPhone, iPad o Mac. Aunque el logo de Apple no ha sido siempre una manzana mordida, lo cierto es que desde que lo es, se ha convertido en una seña de identidad de la marca. El logo de Apple es tan val…",
//             "url": "https://www.lavanguardia.com/andro4all/apple/como-escribir-el-simbolo-de-apple--en-tu-iphone-ipad-y-mac",
//             "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/07/logo-apple-portada.jpg?width=1200",
//             "publishedAt": "2023-07-16T08:03:59Z",
//             "content": "Aprende a escribir el logotipo de Apple () en el iPhone, iPad y el Mac\r\nTe vamos a enseñar cómo escribir el símbolo de Apple en tu iPhone, iPad o Mac. Aunque el logo de Apple no ha sido siempre una m… [+2287 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "La Vanguardia"
//             },
//             "author": "Fran Besora",
//             "title": "Cómo saber si unos AirPods son falsos",
//             "description": "Te vamos a explicar cómo saber si unos AirPods son falsos. Los auriculares de Apple llevan en el mercado desde 2016 y su tremendo éxito ha provocado que proliferen copias que pretenden imitarlos. Aunque hay algunas muy bien conseguidas, te vamos a contar los …",
//             "url": "https://www.lavanguardia.com/andro4all/apple/como-saber-si-unos-airpods-son-falsos",
//             "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/07/airpods.jpg?width=1200",
//             "publishedAt": "2023-07-16T12:03:11Z",
//             "content": "Saber si unos AirPods son falsos es muy fácil\r\nTe vamos a explicar cómo saber si unos AirPods son falsos. Los auriculares de Apple llevan en el mercado desde 2016 y su tremendo éxito ha provocado que… [+5305 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "La Vanguardia"
//             },
//             "author": "Beatriz Alcántara",
//             "title": "BMW lanza sus primeras gafas inteligentes para motos: cuestan 690 euros y llegarán a finales de año",
//             "description": "BMW celebra su aniversario durante este 2023, por lo que su calendario está cargado de lanzamientos de lo más interesantes. Entre ellos se encuentran las BMW Connected Ride Smartglasses, las primeras gafas inteligentes de la firma. Aunque a simple vista parez…",
//             "url": "https://www.lavanguardia.com/andro4all/tecnologia/bmw-lanza-sus-primeras-gafas-inteligentes-para-motos-cuestan-690-euros-y-llegaran-a-finales-de-ano",
//             "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/07/bmw-connected-ride-smartglasses.jpg?width=1200",
//             "publishedAt": "2023-07-16T08:31:07Z",
//             "content": "Las gafas inteligentes de BMW tienen un diseño similar al de las clásicas gafas de sol.\r\nBMW celebra su aniversario durante este 2023, por lo que su calendario está cargado de lanzamientos de lo más … [+3546 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "La Vanguardia"
//             },
//             "author": "Fran Besora",
//             "title": "La pantalla de bloqueo del iPhone se superpotencia con estas novedades de iOS 17",
//             "description": "iOS 17 ha llegado con un montón de cambios que hemos podido estar probando durante este casi mes y medio con las betas del nuevo sistema operativo que veremos en septiembre. Tiene novedades muy interesantes en Safari o el Spotlight, pero también en la pantall…",
//             "url": "https://www.lavanguardia.com/andro4all/apple/la-pantalla-de-bloqueo-del-iphone-se-superpotencia-con-estas-novedades-de-ios-17",
//             "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/07/pantalla-bloqueo.1689082389.62.jpg?width=1200",
//             "publishedAt": "2023-07-16T10:02:55Z",
//             "content": "iOS 17 revoluciona la pantalla de bloqueo del iPhone.\r\niOS 17 ha llegado con un montón de cambios que hemos podido estar probando durante este casi mes y medio con las betas del nuevo sistema operati… [+3767 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "La Vanguardia"
//             },
//             "author": "David Freire",
//             "title": "Esta alternativa a Spotify es gratis, sin anuncios y te permite ver los vídeos de las canciones en tu móvil",
//             "description": "Es innegable que Spotify es la aplicación de streaming de música más popular desde hace algún tiempo, por mucho que le pese a Amazon Music, Apple Music, YouTube Music o Tidal, pero lo cierto es que para poder disfrutar de todas las funciones que ofrece tienes…",
//             "url": "https://www.lavanguardia.com/andro4all/aplicaciones-gratis/esta-alternativa-a-spotify-es-gratis-sin-anuncios-y-te-permite-ver-los-videos-de-las-canciones-en-tu-movil",
//             "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2023/07/nonoki-portada.jpg?width=1200",
//             "publishedAt": "2023-07-16T06:02:31Z",
//             "content": "Nonoki es una de las mejores alternativas gratuitas a Spotify que he probado en Android\r\nEs innegable que Spotify es la aplicación de streaming de música más popular desde hace algún tiempo, por much… [+3447 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Clubic"
//             },
//             "author": "/auteur/407247-merouan-goumiri.html",
//             "title": "Le gestionnaire de mots de passe de macOS Sonoma désormais compatible avec Google Chrome",
//             "description": "Voilà une excellente nouvelle qui vient de tomber pour les utilisateurs de Google Chrome sur macOS.",
//             "url": "https://www.clubic.com/pro/entreprises/apple/actualite-478021-le-gestionnaire-de-mots-de-passe-de-macos-sonoma-desormais-compatible-avec-google-chrome.html",
//             "urlToImage": "https://pic.clubic.com/v1/images/1964364/raw",
//             "publishedAt": "2023-07-16T10:00:00Z",
//             "content": "Voilà une excellente nouvelle qui vient de tomber pour les utilisateurs de Google Chrome sur macOS.\r\nLe gestionnaire de mots de passe d'Apple bientôt élargi ?\r\nAu cas où vous l'ignoriez, macOS dispos… [+2122 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Tomshw.it"
//             },
//             "author": "Andrea Maiellano",
//             "title": "Winamp torna su Android",
//             "description": "A gran sorpresa Winamp ritorna sugli schermi di Andorid, a dieci anni dalla sua ultima comparsa, con ambizioni a dir poco elevate.",
//             "url": "https://www.tomshw.it/smartphone/winamp-torna-su-android/",
//             "urlToImage": "https://www.tomshw.it/images/images/2023/07/foto-generiche-284312.jpg",
//             "publishedAt": "2023-07-16T07:00:31Z",
//             "content": "News Winamp torna su Android\r\nTom's Hardware vive grazie al suo pubblico. Quando compri qualcosa dai nostri link, potremmo guadagnare una commissione. Scopri di più\r\nNews Winamp torna su Android\r\nGli… [+3664 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "The Indian Express"
//             },
//             "author": "Lifestyle Desk",
//             "title": "Sunday Long Reads: How tomato became staple in Indian kitchens, why keeping Yamuna clean will be challenging, book reviews, and more",
//             "description": "Here are the interesting reads of the week!",
//             "url": "https://indianexpress.com/article/lifestyle/life-style/sunday-long-reads-tomato-history-venice-biennale-book-reviews-yamuna-river-8830217/",
//             "urlToImage": "https://images.indianexpress.com/2023/07/tomato-eye-cover-1.jpg",
//             "publishedAt": "2023-07-16T03:40:27Z",
//             "content": "Travelling with the tomato: How the ‘poison apple’ became a staple in Indian kitchensIn the early years of the 19th century, Nusa-i Nimat n, a Persian translation of an English cooking manual carried… [+6206 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Googlewatchblog.de"
//             },
//             "author": "Jens",
//             "title": "Google Maps: Wo war ich wie oft? Diese App visualisiert euren Google Maps-Standortverlauf als Heatmap",
//             "description": "Das ist wirklich spannend: Ein Tool zeigt euch anhand einer Heatmap-Darstellung, wie häufig ihr einzelne Orte laut Google Maps Standortverlauf besucht.Google Maps: Wo war ich wie oft? Diese App visualisiert euren Google Maps-Standortverlauf als Heatmap",
//             "url": "https://www.googlewatchblog.de/?p=203475",
//             "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/location-history-visualizer-heatmap.jpg",
//             "publishedAt": "2023-07-16T05:00:31Z",
//             "content": "Viele Android-Smartphones senden in kurzen Abständen ihren Standort an die Google-Server, wo dieser unter anderem für die -Nutzer senden ständig bewusst oder unbewusst ihren Standort an die Google-Se… [+4017 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Nextpit.de"
//             },
//             "author": "Camila Rinaldi",
//             "title": "Mit iOS 17 habt Ihr die Kontrolle, nicht andersherum | Meinung",
//             "description": "Ich nutze iOS 17 jetzt seit zwei Wochen. Da Apple diese Woche die öffentliche Beta veröffentlicht hat, lest Ihr hier mein erstes Zwischenfazit.",
//             "url": "https://www.nextpit.de/apple-ios-17-erster-test",
//             "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/nextpit_Apple_iOS_17.jpg",
//             "publishedAt": "2023-07-16T13:00:00Z",
//             "content": "© nextpit\r\nIch habe die letzten zwei Wochen damit verbracht, iOS 17 zu erkunden. Passend zum Launch der Public Beta lest Ihr hier mein erstes Zwischenfazit zu der Marschrichtung, die Apple mit der ne… [+11123 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "DIE WELT"
//             },
//             "author": "WELT",
//             "title": "Pinkes Containerschiff „One Innovation“ zieht zahlreiche Schaulustige an",
//             "description": "Die „One Innovation“ ist eines der größten Containerschiffe der Welt – und es ist komplett pink lackiert. Am Samstag wurde der neue Dauergast des Hamburger Hafens von zahlreichen Schaulustigen am Elbstrand von Övelgönne empfangen.",
//             "url": "https://www.welt.de/vermischtes/article246413510/Hamburg-Pinkes-Containerschiff-One-Innovation-zieht-zahlreiche-Schaulustige-an.html",
//             "urlToImage": "https://img.welt.de/img/bildergalerien/mobile246413378/7621355137-ci16x9-w1200/Containerschiff-One-Innovation-erstmals-in-Hamburg.jpg",
//             "publishedAt": "2023-07-16T10:40:22Z",
//             "content": "Die One Innovation, eines der größten Containerschiffe der Welt, ist am Samstag erstmals den Hamburger Hafen angelaufen. Mit einer Länge von 400 Metern und einer Breite von 61,40 Metern hat das pinke… [+887 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "DIE WELT"
//             },
//             "author": "WELT",
//             "title": "Iran verkündet Rückkehr der Moralpolizei",
//             "description": "Nach den massiven Protesten im Herbst 2022 gegen die politische und religiöse Führung des Iran war die berüchtigte Moralpolizei, die das Einhalten der Kopftuchpflicht kontrolliert, von den Straßen der Metropolen verschwunden. Nun kehren die Sittenwächter zurü…",
//             "url": "https://www.welt.de/politik/ausland/article246413264/Iran-verkuendet-Rueckkehr-der-Moralpolizei-zur-Kontrolle-der-Kopftuchpflicht.html",
//             "urlToImage": "https://img.welt.de/img/politik/ausland/mobile246413380/6911353187-ci16x9-w1200/Iran-verkuendet-Rueckkehr-der-beruechtigten-Moralpolizei.jpg",
//             "publishedAt": "2023-07-16T10:39:58Z",
//             "content": "Irans Behörden haben die Rückkehr der berüchtigten Sittenwächter zur Vollstreckung der Kopftuchpflicht angekündigt. Ab Sonntag sollen im ganzen Land Einheiten der zuständigen Moralpolizei mit Patroui… [+1173 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "DIE WELT"
//             },
//             "author": "WELT",
//             "title": "Ostdeutsche arbeiten mehr Stunden als Westdeutsche",
//             "description": "Laut einer Empirica-Regio-Auswertung arbeiteten Ostdeutsche im Jahr 2020 52 Stunden mehr als Erwerbstätige in Westteil des Landes. Das hat offenbar vor allem einen Grund.",
//             "url": "https://www.welt.de/politik/deutschland/article246412910/Ostdeutsche-arbeiten-mehr-Stunden-als-Westdeutsche.html",
//             "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile246413162/5261354007-ci16x9-w1200/Knapp-ein-Fuenftel-der-Deutschen-nennt-sich-Workaholic.jpg",
//             "publishedAt": "2023-07-16T09:46:42Z",
//             "content": "Erwerbstätige in Ostdeutschland arbeiten nach einer Untersuchung im Jahr 52 Stunden mehr als Erwerbstätige in Westdeutschland also pro Woche genau eine Stunde länger. So hätten Beschäftigte in Ostdeu… [+1982 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "DIE WELT"
//             },
//             "author": "WELT",
//             "title": "Ukraine und Polen melden Ankunft von Wagner-Söldnern in Belarus",
//             "description": "Bereits am Freitag hatte die Regierung in Minsk erklärt, dass Söldner der Gruppe Wagner im Land angekommen seien. Nun melden auch unabhängige Stellen die Ankunft von „mehreren hundert“ Kämpfern in Belarus. Mehr im Liveticker.",
//             "url": "https://www.welt.de/politik/ausland/article246411448/Ukraine-News-Ukraine-und-Polen-melden-Ankunft-von-Wagner-Soeldnern-in-Belarus.html",
//             "urlToImage": "https://img.welt.de/img/politik/ausland/mobile246411452/9291354177-ci16x9-w1200/Wagner-Kaempfer-in-Belarus.jpg",
//             "publishedAt": "2023-07-16T04:36:26Z",
//             "content": "Kämpfer der Wagner-Gruppe sind nach Angaben ukrainischer und polnischer Behörden in Belarus eingetroffen. Wagner ist in Belarus, erklärte Andrij Demchenko, ein Sprecher der ukrainischen Grenzbehörde,… [+3898 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "DIE WELT"
//             },
//             "author": "Nike Heinen",
//             "title": "Und der Haifisch, der hat Zähne",
//             "description": "Ein Mensch kann nur einmal im Leben die Zähne wechseln, manche Wirbeltiere sind dazu mehrfach in der Lage. Und weil echte Beißer so viel schöner sind als künstlicher Ersatz, wird erforscht, wie die „Dritten“ künftig einfach nachwachsen",
//             "url": "https://www.welt.de/wissenschaft/article246399196/Zahnersatz-Was-die-Medizin-von-Haien-und-Krokodilen-lernen-kann.html",
//             "urlToImage": "https://img.welt.de/img/wissenschaft/mobile246399190/6971351217-ci16x9-w1200/Close-up-of-dolphin-swimming-in-sea-United-States-USA.jpg",
//             "publishedAt": "2023-07-16T09:25:41Z",
//             "content": "ALT ZEILE: Natürlicher Zahnersatz nach dem Vorbild von Hai und Alligator\r\nALT: Die Tricks der Natur: Zähne wechseln wie ein Hai\r\nWürde der Ruhm im Netz vor allem anderen zählen, dann hätte Cheng-Ming… [+8697 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Numerama"
//             },
//             "author": "Auguste Sciulara",
//             "title": "Ionity : tout savoir sur le réseau de recharge rapide",
//             "description": "Les bornes Ionity sont une avancée majeure dans l'infrastructure de recharge rapide sur le territoire européen. Ce réseau de super chargeurs s’impose même comme le leader de la recharge pour les voitures électriques en Europe. Ses stations sont ouvertes à tou…",
//             "url": "https://www.numerama.com/vroom/1445288-ionity-tout-savoir-sur-le-reseau-de-recharge-rapide.html",
//             "urlToImage": "https://www.numerama.com/wp-content/uploads/2023/04/sans-titre-8-1.jpg",
//             "publishedAt": "2023-07-16T15:10:00Z",
//             "content": "Les bornes Ionity sont une avancée majeure dans linfrastructure de recharge rapide sur le territoire européen. Ce réseau de super chargeurs simpose même comme le leader de la recharge pour les voitur… [+7902 chars]"
//         },
//         {
//             "source": {
//                 "id": "la-repubblica",
//                 "name": "La Repubblica"
//             },
//             "author": "repubblicawww@repubblica.it (Redazione Repubblica.it)",
//             "title": "Trimestrali ed economia cinese: prova del nove per i mercati",
//             "description": null,
//             "url": "https://www.repubblica.it/economia/2023/07/16/news/trimestrali_ed_economia_cinese_prova_del_nove_per_i_mercati-407920814/",
//             "urlToImage": "https://www.repstatic.it/content/nazionale/img/2023/07/16/081636962-e8f6152a-4e32-4640-8ae1-fd423f46c3a2.jpg",
//             "publishedAt": "2023-07-16T06:16:39Z",
//             "content": "MILANO  La buona lena dei mercati nelle ultime sedute, spinta dal calo superiore alle attese dellinflazione americana, è a una serie di test definitivi tra qui e la fine del mese. Prima importanti da… [+4282 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Trendencias.com"
//             },
//             "author": "Elena Sánchez-Beato",
//             "title": "Los mejores auriculares inalámbricos bluetooth: ¿Cuál comprar? Consejos y recomendaciones",
//             "description": "Aunque los auriculares de cable nos han acompañado durante años, cada vez son más las personas que se suman a la comodidad que ofrecen los auriculares inalámbricos. Y es que desenredarlos supone una pérdida de tiempo (y a veces también de paciencia) que no oc…",
//             "url": "https://www.trendencias.com/shopping/mejores-auriculares-inalambricos-bluetooth-cual-comprar-consejos-recomendaciones",
//             "urlToImage": "https://i.blogs.es/6936f8/346347451_753639926342004_1177334790451550761_n/840_560.jpeg",
//             "publishedAt": "2023-07-16T08:01:28Z",
//             "content": "Aunque los auriculares de cable nos han acompañado durante años, cada vez son más las personas que se suman a la comodidad que ofrecen los auriculares inalámbricos. Y es que desenredarlos supone una … [+12544 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Ascii.jp"
//             },
//             "author": "ASCII",
//             "title": "【レビュー】ファーウェイの最上位モデル「HUAWEI WATCH Ultimate」はダイビングでガチで使えた",
//             "description": "ファーウェイのスマートウォッチの最上位に位置付けられる「HUAWEI WATCH Ultimate」は、ダイブコンピューターの機能を備えていることが大きな特徴だ。海でダイビングして使用感をレポートする。",
//             "url": "https://weekly.ascii.jp/elem/000/004/145/4145459/",
//             "urlToImage": "https://ascii.jp/img/2023/07/14/3571249/l/445ed4f25df7aedd.png",
//             "publishedAt": "2023-07-16T01:00:00Z",
//             "content": "HUAWEI WATCH Ultimate13508048.5×48.5×13mm76\r\nHUAWEI WATCH UltimateiOSAndroid24\r\n1.5466×466AMOLED\r\nApple Watch UltraHUAWEI WATCH Ultimate\r\nHUAWEI WATCH Ultimate\r\nHUAWEI WATCH UltimateEN13319100130"
//         },
//         {
//             "source": {
//                 "id": "techradar",
//                 "name": "TechRadar"
//             },
//             "author": "David Nield",
//             "title": "Apple's latest patent suggests a rollable iPhone could be on the way",
//             "description": "Apple has filed a patent for \"electronic devices with rollable displays\", and we're looking forward to what's next.",
//             "url": "https://www.techradar.com/phones/iphone/apples-latest-patent-suggests-a-rollable-iphone-could-be-on-the-way",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/KNaihCEafHypGGQA972kQk-1200-80.jpg",
//             "publishedAt": "2023-07-16T11:30:25Z",
//             "content": "Apple engineers are looking into the feasibility of an iPhone with a rollable screen as well as a foldable iPhone, according to a newly published patent. The display technology could also find uses o… [+2105 chars]"
//         },
//         {
//             "source": {
//                 "id": "techradar",
//                 "name": "TechRadar"
//             },
//             "author": "David Nield",
//             "title": "The iPhone 15 might mark a shift to a new battery technology for Apple",
//             "description": "A switch to stacked battery technology could bring a variety of benefits for the next generation of Apple phones.",
//             "url": "https://www.techradar.com/phones/iphone/the-iphone-15-might-mark-a-shift-to-a-new-battery-technology-for-apple",
//             "urlToImage": "https://cdn.mos.cms.futurecdn.net/yU9wjcQXxXRSbCkUpeXKQX-1200-80.jpg",
//             "publishedAt": "2023-07-16T15:30:48Z",
//             "content": "We've heard plenty of rumors about the iPhone 15, and the latest to catch our attention concerns a new type of battery technology that Apple may be introducing with the flagship handsets that are due… [+1773 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Forbes"
//             },
//             "author": "Gordon Kelly, Senior Contributor, \n Gordon Kelly, Senior Contributor\n https://www.forbes.com/sites/gordonkelly/",
//             "title": "New Apple Exclusive Reveals iPhone 15 Design Surprise",
//             "description": "Apple's new iPhones are tipped to come in a surprising range of new colors...",
//             "url": "https://www.forbes.com/sites/gordonkelly/2023/07/16/apple-iphone-15-pro-max-design-colors-finishes-new-iphone-release/",
//             "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/0x0.jpg?format=jpg&crop=1123,632,x262,y0,safe&width=1200",
//             "publishedAt": "2023-07-16T14:07:00Z",
//             "content": "iPhone 15 Pro Max renders based on multiple leaks\r\n@HansTSaiz \r\nApples biggest iPhone 15 design changes have already leaked, but the company still had one surprise up its sleeve. Until now...\r\nReliab… [+2420 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Forbes"
//             },
//             "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
//             "title": "NuPhy’s Field 75 Is A Gaming Keyboard For Macs And PCs",
//             "description": "If you like gaming and want a mechanical keyboard with a high polling rate, then the NuPhy Field 75 could be the choice for you, especially if you are an Apple Mac user.",
//             "url": "https://www.forbes.com/sites/marksparrow/2023/07/16/nuphys-field-75-is-a-gaming-keyboard-for-macs-and-pcs/",
//             "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64a9771f43ada5204991cf23/0x0.jpg?format=jpg&width=1200",
//             "publishedAt": "2023-07-16T10:00:00Z",
//             "content": "The new NuPhy Field 75 is a gaming keyboard designed with Mac and PC users in mind. \r\nNuPhy\r\nAre you an Apple Mac user who likes to play games but is tired of only ever seeing gaming keyboards for PC… [+7325 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Forbes"
//             },
//             "author": "Brad Japhe, Senior Contributor, \n Brad Japhe, Senior Contributor\n https://www.forbes.com/sites/bradjaphe/",
//             "title": "World’s Best Hotel Bars: The Oberoi, Marrakech",
//             "description": "Enjoy a North African twist on a classic cocktail, while admiring views of the snowcapped Atlas Mountains.",
//             "url": "https://www.forbes.com/sites/bradjaphe/2023/07/16/worlds-best-hotel-bars-the-oberoi-marrakech/",
//             "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64b38feb0dc0ec608de9bcff/0x0.jpg?format=jpg&crop=1457,819,x234,y0,safe&width=1200",
//             "publishedAt": "2023-07-16T08:59:05Z",
//             "content": "Birds-eye view of the grand canal at Oberoi Marrakech\r\nOberoi Marrakech \r\nFrom an architectural standpoint, The Oberoi, Marrakech is among the most impressive luxury hotels on the planet. It is built… [+4001 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Forbes"
//             },
//             "author": "Florence Tsai, Contributor, \n Florence Tsai, Contributor\n https://www.forbes.com/sites/florencetsai/",
//             "title": "If Looks Could Kill",
//             "description": "Explore the captivating artistry of Karim Tabar, a visionary filmmaker and photographer who has impressed global brands and prestigious publications with his unique perspective and creative vision.",
//             "url": "https://www.forbes.com/sites/florencetsai/2023/07/16/if-looks-could-kill/",
//             "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64b398100a9786901e534a09/0x0.png?format=png&width=1200",
//             "publishedAt": "2023-07-16T07:21:47Z",
//             "content": "Those from Asia whove been working in the fashion and art industry for long enough will be familiar with the name Karim Tabar, whos made his mark on the international fashion community as a sought-af… [+5105 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Antyweb.pl"
//             },
//             "author": "Jakub Szczęsny",
//             "title": "Europejscy producenci telefonów: dlaczego ponieśli porażkę?",
//             "description": "Przez wiele lat europejscy producenci telefonów komórkowych byli wiodącymi graczami na rynku. Marki takie jak Nokia, Ericsson czy Siemens zdobyły reputację jako producenci wysokiej jakości i innowacyjnych urządzeń. Jednak w biegu dziejów, europejscy producenc…",
//             "url": "https://antyweb.pl/dlaczego-europejscy-producenci-upadli",
//             "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/07/hie3okr22d/thai-nguyen-ILSU9JydjXI-unsplash.jpg",
//             "publishedAt": "2023-07-16T13:00:05Z",
//             "content": "Marki, które wczeniej kojarzylimy z mocn pozycj na rynku przegray z takimi graczami, jak Samsung, Huawei i Xiaomi, czy Apple. Dlaczego tak si stao i kto (lub co) za to odpowiada? Powodów jest caa mas… [+4899 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Antyweb.pl"
//             },
//             "author": "Kamil Świtalski",
//             "title": "Smartfony nienawidzą lata równie mocno, co zimy. Uważajcie",
//             "description": "Większość użytkowników smartfonów zdążyła się już nauczyć, że zima nie jest najlepszą porą dla baterii. Kiedy na dworze robi się niebezpiecznie zimno, widok czarnego ekranu - choć bateria pokazywała jeszcze kilkanaście (w ekstremalnych przypadkach: nawet kilk…",
//             "url": "https://antyweb.pl/iphone-w-czasie-upalu",
//             "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2022/10/cdhkxqewhy/iphone-14_11.jpg",
//             "publishedAt": "2023-07-16T07:35:40Z",
//             "content": "A co w przypadku lata? Có zwyko si mówi, e cieplejszy klimat raczej sprzyja bateriom w naszych telefonach. I faktycznie - do pewnego momentu tak jest. Ale jak to bywa: co za duo, to niezdrowo.\r\nPrzyz… [+3659 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Olhardigital.com.br"
//             },
//             "author": "Kelvin Leão Nunes da Costa",
//             "title": "Missão Impossível: veja onde assistir à franquia online",
//             "description": "Prepare-se para a missão: saiba onde assistir a cada filme da icônica franquia 'Missão: Impossível' nas plataformas online\nO post Missão Impossível: veja onde assistir à franquia online apareceu primeiro em Olhar Digital.",
//             "url": "https://olhardigital.com.br/2023/07/15/cinema-e-streaming/missao-impossivel-veja-onde-assistir-a-franquia-online/",
//             "urlToImage": "https://proxy.olhardigital.com.br/wp-content/uploads/2023/07/missao-impossivel-acerto-de-contas-tom-cruise.jpg",
//             "publishedAt": "2023-07-16T01:00:00Z",
//             "content": "âMissÃ£o: ImpossÃ­velâ Ã© uma sÃ©rie de filmes de aÃ§Ã£o e espionagem baseada na sÃ©rie de televisÃ£o de mesmo nome, exibida de 1966 a 1973.Â A trama central dos filmes gira em torno do agente se… [+6418 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Olhardigital.com.br"
//             },
//             "author": "Lucas Gabriel Machado Henriques",
//             "title": "Como ver os lugares que fui no iPhone? Como ativar e ver recurso",
//             "description": "O Olhar Digital traz dicas de como ativar e usar o recurso de localização do iPhone em diversas situações do seu dia a dia\nO post Como ver os lugares que fui no iPhone? Como ativar e ver recurso apareceu primeiro em Olhar Digital.",
//             "url": "https://olhardigital.com.br/?p=551870",
//             "urlToImage": "https://img.olhardigital.com.br/wp-content/uploads/2023/07/iPhone.png",
//             "publishedAt": "2023-07-16T12:00:00Z",
//             "content": "Saber onde visitou pode ser uma curiosidade fÃ¡cil de ser resolvida por usuÃ¡rios de iPhone, jÃ¡ que o sistema da Apple tem nativamente essa ferramenta dentro do seu aparelho. O recurso tem como funÃ… [+2475 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Olhardigital.com.br"
//             },
//             "author": "Kelvin Leão Nunes da Costa",
//             "title": "10 Filmes injustiçados que precisam ser redescobertos",
//             "description": "Descubra pérolas ocultas: destacamos filmes que não tiveram o reconhecimento que deveriam, mas que merecem a sua atenção\nO post 10 Filmes injustiçados que precisam ser redescobertos apareceu primeiro em Olhar Digital.",
//             "url": "https://olhardigital.com.br/2023/07/16/cinema-e-streaming/10-filmes-injusticados-que-precisam-ser-redescobertos/",
//             "urlToImage": "https://proxy.olhardigital.com.br/wp-content/uploads/2023/07/showgirls-1200-1200-675-675-crop-000000.jpg",
//             "publishedAt": "2023-07-16T08:30:00Z",
//             "content": "Ao longo da histÃ³ria do cinema, inÃºmeros filmes foram lanÃ§ados e, por diversas razÃµes, nÃ£o receberam o reconhecimento merecido.Â Essas obras-primas esquecidas aguardam ansiosamente para serem re… [+7207 chars]"
//         },
//         {
//             "source": {
//                 "id": "google-news",
//                 "name": "Google News"
//             },
//             "author": null,
//             "title": "iOS 17 Hands-On: StandBy Mode and Stickers Live Up to the Hype - CNET",
//             "description": "<ol><li>iOS 17 Hands-On: StandBy Mode and Stickers Live Up to the Hype  CNET\r\n</li><li>5 Reasons We Dislike iOS 17's StandBy Feature  MUO - MakeUseOf\r\n</li><li>iOS 17 StandBy mode — everything you need to know to turn your iPhone into a smart screen  Tom's Gu…",
//             "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmNuZXQuY29tL3RlY2gvc2VydmljZXMtYW5kLXNvZnR3YXJlL2lvcy0xNy1oYW5kcy1vbi1zdGFuZGJ5LW1vZGUtYW5kLXN0aWNrZXJzLWxpdmUtdXAtdG8tdGhlLWh5cGUv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
//             "urlToImage": null,
//             "publishedAt": "2023-07-16T12:00:00Z",
//             "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Biztoc.com"
//             },
//             "author": "youtube.com",
//             "title": "Bringing In $9 Million Selling Texas-Style BBQ In Mexico City",
//             "description": "Dan Defossey, originally from Long Island, New York, moved to Mexico over a decade ago as an employee for Apple. It wasn't ... #dandefossey #longisland #mexico #apple",
//             "url": "https://biztoc.com/x/5e07e1d1b3759f4b",
//             "urlToImage": "https://c.biztoc.com/p/5e07e1d1b3759f4b/s.webp",
//             "publishedAt": "2023-07-16T07:10:08Z",
//             "content": "Dan Defossey, originally from Long Island, New York, moved to Mexico over a decade ago as an employee for Apple. It wasn't ...\r\n#dandefossey#longisland#mexico#apple\r\nThis story appeared on youtube.co… [+3 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Biztoc.com"
//             },
//             "author": "theglobeandmail.com",
//             "title": "Threads collects so much sensitive information it’s a ‘hacker’s dream,’ experts say",
//             "description": "It knows when you’ve been online shopping, the last time you worked out and whether you’ve been lurking on your ex’s profile. Meta’s META-Q new social media platform Threads is gobbling up massive amounts of sensitive data on its 100 million users and countin…",
//             "url": "https://biztoc.com/x/dd508591a9b5939e",
//             "urlToImage": "https://c.biztoc.com/p/dd508591a9b5939e/s.webp",
//             "publishedAt": "2023-07-16T15:24:05Z",
//             "content": "It knows when youve been online shopping, the last time you worked out and whether youve been lurking on your exs profile.Metas META-Q new social media platform Threads is gobbling up massive amounts… [+319 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "3dnews.ru"
//             },
//             "author": null,
//             "title": "Электрический пикап Humvee на агрегатах Tesla можно заказать за $100 000",
//             "description": "Корпорация General Motors хоть и вернула на конвейер марку Hummer за счёт перевода тяжёлых внедорожников на электротягу, до сих пор выпускает их в очень скромных количествах. Канадская компания NAEV предлагает любителям внедорожников армейские пикапы Humvee, …",
//             "url": "https://3dnews.ru/1090053/elektricheskiy-pikap-humvee-na-agregatah-tesla-mogno-zakazat-za-100-000",
//             "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/07/16/1090053/humvee_01.jpg",
//             "publishedAt": "2023-07-16T04:59:00Z",
//             "content": "General Motors Hummer , . NAEV Humvee, Tesla — $100 000.\r\n: Electrek, NAEV\r\nElectrek, North American Electric Vehicle , Humvee , «» . «» Tesla Model S, 600 .. 19,2 .\r\n240 , $20 000 480 , . , Apple iP… [+18 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "3dnews.ru"
//             },
//             "author": null,
//             "title": "Samsung перейдёт на штабелирование электродов в аккумуляторах для смартфонов, чтобы увеличить их ёмкость",
//             "description": "Компания Samsung SDI, дочернее предприятие Samsung Electronics, производящая аккумуляторы, нашла партнёров для внедрения новой технологии массового производства штабелированных многослойных аккумуляторов (stacked battery). Эта технология позволяет увеличить э…",
//             "url": "https://3dnews.ru/1090062/samsung-vnedrit-tehnologiyu-shtabelirovaniya-akkumulyatorov-dlya-uvelicheniya-ih-energeticheskoy-yomkosti-bolee-chem-na-10-",
//             "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/07/16/1090062/samsung-vnedrit-tekhnologiyu-shtabelirovaniya-akkumulyatorov-main.jpg",
//             "publishedAt": "2023-07-16T11:09:00Z",
//             "content": "Samsung SDI, Samsung Electronics, , (stacked battery). 10 % , .\r\n: StockSnap / Pixabay\r\n, Samsung , . , , Samsung .\r\nSamsung SDI . , 10 %. , Samsung SDI , , , .\r\nSamsung «» () , , , . : Sparrowsnews.… [+109 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Geekpark.net"
//             },
//             "author": null,
//             "title": "字节 RPG 游戏《晶核》全平台公测；特斯拉「皮卡」下线；FTC 败诉，微软「收购暴雪」仅一步之遥",
//             "description": "美国 FTC 上诉失败，微软收购动视暴雪离终点线更近一步\n北京时间 7 月 15 日晚间消息，美国一家上诉法院周五驳回了联邦贸易委员会（FTC）关于暂停微软对动视暴雪收购交易的请求，给这宗游戏业最大收购交易在美国的推进扫除了障碍。第九巡回上诉法院的裁决意味着，现在能阻止微软在 7 月 18 日截止日期前完成收购交易的只有英国监管机构了。英国反垄断上诉法院计划于 7 月 17 日举行听证会。\n\n微软总裁 Brad Smith 表示，「在这场全球监管审查马拉松中，我们离终点线又近了一步」。动视暴雪暂未回复置评请求。微…",
//             "url": "https://www.geekpark.net/news/321903",
//             "urlToImage": "https://imgslim.geekpark.net/uploads/image/file/00/86/0086bef14bb4bd12818d7b6c9fd5ea50.jpeg",
//             "publishedAt": "2023-07-16T01:20:54Z",
//             "content": "FTC \r\n 7 15 FTC 7 18 7 17 \r\nBrad Smith 7 18 30 \r\nFTC 8 29 \r\nxAI \r\n7 12 xAI 7 15 xAI \r\nCNBC 14 90 \r\n OpenAI xAI AGI OpenAI \r\n RPG PC \r\n7 15 RPGPC \r\n RPG IT \r\n12.5-13.9 \r\n 7 15 2023 12.5-13.9 \r\n92163 2… [+635 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Telegraph.co.uk"
//             },
//             "author": "James Titcomb",
//             "title": "The pleasure and the perils of loving an AI girlfriend",
//             "description": "Millions of (mostly) men are carrying out relationships with a chatbot partner – but it’s not all love and happiness",
//             "url": "https://www.telegraph.co.uk/business/2023/07/16/ai-girlfriend-replika-caryn-apps-relationship-health/",
//             "urlToImage": "https://www.telegraph.co.uk/content/dam/business/2023/07/14/TELEMMGLPICT000342664181_16893594648680_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpeg?impolicy=logo-overlay",
//             "publishedAt": "2023-07-16T05:00:00Z",
//             "content": "Turkle says that even the primitive chatbots of more than a decade ago appealed to those who had struggled with relationships.\r\nIts been consistent in the research from when the AI was simple, to now… [+7275 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Tinhte.vn"
//             },
//             "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
//             "title": "Những khác biệt chính để Apple có thể tăng giá iPhone 15 Pro trong năm nay?",
//             "description": "Còn khoảng 2 tháng nữa mới ra mắt tuy nhiên những tin đồn về dòng iPhone 15 đã xuất hiện rất nhiều, đủ để dựng lên một bức tranh toàn cảnh về những gì sẽ được mang đến sắp tới. Chi tiết những báo cáo về dòng iPhone mới anh em có thể xem ở các link…",
//             "url": "https://tinhte.vn/thread/nhung-khac-biet-chinh-de-apple-co-the-tang-gia-iphone-15-pro-trong-nam-nay.3690534/",
//             "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/07/6491348_cover-iPhone-15-Pro-tinhte.jpg",
//             "publishedAt": "2023-07-16T03:06:58Z",
//             "content": "iPhone thng s có 2 camera gm 1 camera chính + 1 camera góc siêu rng còn các mu Pro thì có thêm 1 camera tele - hin ti là cm bin 12MP vi kh nng zoom 3x trên iPhone 14 Pro. iu c bit là theo các tin n t… [+375 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Tinhte.vn"
//             },
//             "author": "no-reply@tinhte.vn (Pnghuy), Pnghuy",
//             "title": "Lại nói về thanh điều hướng trên Android: Samsung đang làm tốt nhất, Google vẫn loay hoay",
//             "description": "Android 14 đã lên đến những bản beta cuối cùng nhưng có một vấn đề mình thấy đã tồn tại từ rất nhiều năm qua mà Google vẫn chưa giải quyết được một cách triệt để: làm biến mất thanh điều hướng cử chỉ. Mình nghĩ rằng…",
//             "url": "https://tinhte.vn/thread/lai-noi-ve-thanh-dieu-huong-tren-android-samsung-dang-lam-tot-nhat-google-van-loay-hoay.3692376/",
//             "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/07/6496951_van-de-Android-hien-tai-tinhte-01.jpg",
//             "publishedAt": "2023-07-16T14:52:33Z",
//             "content": "One UI hin ti ang là giao din (UI) làm ngon nht v mt này (UX), n c thanh iu hng khó chu ca Android, li còn vut cnh di chuyn app c. Không nhiu hãng làm c iu này, ngoài One UI hình nh ch có ColorOS ca … [+600 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "3dnews.ru"
//             },
//             "author": null,
//             "title": "Первые компьютеры Apple Mac на основе процессоров M3 появятся в октябре",
//             "description": "Лето перевалило за экватор, неумолимо приближается осень, и ближайшими очевидными новинками Apple принято считать смартфоны семейства iPhone 15, но известный колумнист Марк Гурман (Mark Gurman) со страниц Bloomberg заявил, что в октябре компания представит св…",
//             "url": "https://3dnews.ru/1090064/pervie-kompyuteri-apple-mac-na-osnove-protsessorov-m3-poyavyatsya-v-oktyabre",
//             "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/07/16/1090064/apple_01.jpg",
//             "publishedAt": "2023-07-16T14:33:00Z",
//             "content": ", , Apple iPhone 15, (Mark Gurman) Bloomberg , M3. Apple.\r\n: Apple\r\n, M3 MacBook Air MacBook Air — 13- , Apple iMac. M3 , 3- .\r\n Apple 15- MacBook Air Mac Pro M2 Ultra, Mac Studio M2 Ultra M2 Max, M3… [+79 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Sspai.com"
//             },
//             "author": "少数派编辑部",
//             "title": "macOS Sonoma 推出公开测试版，这些新特性值得一试",
//             "description": "本文为你整理了 macOS Sonoma 值得关注的一些新功能、如何升级系统以及升级前需要了解的一些注意事项，希望对你有所帮助。查看全文",
//             "url": "https://sspai.com/post/81185",
//             "urlToImage": "https://cdn.sspai.com/7/16/2023/article/3f831803-82a5-0e0f-468e-af1454af51f0.png",
//             "publishedAt": "2023-07-16T07:00:05Z",
//             "content": "Apple macOS Sonoma Public Beta macOS Sonoma Apple iOS/iPadOS iOS/iPadOS \r\n macOS Sonoma macOS Sonoma  Apple Apple Beta \r\nApple \r\n | Mac macOS 14 Beta 1\r\n Mac \r\n macOS 13 intel Mac iMac Mac Pro 2019 i… [+784 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Computerra.ru"
//             },
//             "author": "Компьютерра",
//             "title": "Какие бывают кабели для современной техники",
//             "description": "Хоть современные «умные» технологии во многом полагаются на беспроводные интерфейсы, для их подключения все равно еще нужны провода: USB, HDMI, DisplayPort и Thunderbolt. В статье разбираемся в их разнообразии.  USB USB — популярный интерфейс для передачи дан…",
//             "url": "https://www.computerra.ru/288336/kakie-byvayut-kabeli-dlya-sovremennoj-tehniki/",
//             "urlToImage": "https://www.computerra.ru/wp-content/uploads/2023/07/Screenshot_8-1.png",
//             "publishedAt": "2023-07-16T13:55:07Z",
//             "content": "«» , : USB, HDMI, DisplayPort Thunderbolt. . \r\nUSB\r\nUSB . : , , , .\r\nUSB- . 1.0, 1.1 2.0 . : , . - , . USB On-The-Go .\r\n USB- 2,5 . , , . USB 1.0 1.1 12 /, USB 2.0 480 /. , - 8/10 . 1.0 1.1 8 / (1,2 … [+2197 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Courrier International"
//             },
//             "author": null,
//             "title": "La Russie interdit à des fonctionnaires l’usage des iPhone, accusés de servir l’espionnage américain",
//             "description": "D’après le FSB, les smartphones d’Apple seraient infectés par des logiciels de surveillance américains. Des milliers d’employés publics se voient défendre de les utiliser dans un cadre professionnel.",
//             "url": "https://www.courrierinternational.com/article/tensions-la-russie-interdit-a-des-fonctionnaires-l-usage-des-iphone-accuses-de-servir-l-espionnage-americain",
//             "urlToImage": "https://focus.courrierinternational.com/2023/07/11/0/0/4500/3001/1200/630/60/0/f15dae1_2023-07-11t052011z-754747431-rc20iw9di1x9-rtrmadp-3-apple-china-wechat.JPG",
//             "publishedAt": "2023-07-16T09:55:55Z",
//             "content": "Des milliers de fonctionnaires russes vont devoir cesser tout usage professionnel de leur iPhone, rapporte le Financial Times. Ce sera le cas à partir de lundi 17 juillet au ministère du Commerce, ta… [+1323 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Tinhte.vn"
//             },
//             "author": "no-reply@tinhte.vn (P.W), P.W",
//             "title": "FT hé lộ doanh số kính Apple Vision Pro: Năm nay 130 - 150 nghìn chiếc, 2024 dưới 400 nghìn chiếc",
//             "description": "Apple có vẻ đang rất cẩn trọng trong việc đặt hàng cặp kính “spatial computing” họ mới giới thiệu tại WWDC 2023, Apple Vision Pro.\n \nTờ Financial Times dẫn nguồn giấu tên trong chuỗi cung ứng của Apple.",
//             "url": "https://tinhte.vn/thread/ft-he-lo-doanh-so-kinh-apple-vision-pro-nam-nay-130-150-nghin-chiec-2024-duoi-400-nghin-chiec.3688007/",
//             "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/07/6483867_Cover-Apple.jpeg",
//             "publishedAt": "2023-07-16T09:08:05Z",
//             "content": "Apple có v ang rt cn trng trong vic t hàng cp kính spatial computing h mi gii thiu ti WWDC 2023, Apple Vision Pro.T Financial Times dn ngun giu tên trong chui cung ng ca Apple. Hai n v gia công linh … [+608 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Tinhte.vn"
//             },
//             "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
//             "title": "Q2/2023: doanh số PC tiếp tục giảm nhưng doanh số máy Mac tăng trưởng hơn 50%",
//             "description": "Theo dữ liệu từ công ty nghiên cứu Canalys thì trong quý 2 vừa qua, nhu cầu cho chiếc MacBook Air 15 inch mới đã giúp doanh số bán máy Mac của Apple tăng trưởng đến 51% trong khi doanh số PC thì giảm 12%.",
//             "url": "https://tinhte.vn/thread/q2-2023-doanh-so-pc-tiep-tuc-giam-nhung-doanh-so-may-mac-tang-truong-hon-50.3692207/",
//             "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/07/6496530_cover-Apple-MacBook-Air-15-tinhte.jpg",
//             "publishedAt": "2023-07-16T00:33:21Z",
//             "content": "Tip theo thì nhng ngi mua Mac có th không quá nhy cm v giá. Máy Mac không r vì Apple không quan tâm n phân khúc tm trung giá thp, tuy nhiên nu ngi dùng ã có nhu cu cho 1 chic máy tính tr giá hn nghìn… [+296 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Cult of Mac"
//             },
//             "author": "Cult of Mac Deals",
//             "title": "Block ads and data trackers forever with this top-rated service",
//             "description": "Get a discount on a lifetime subscription to the AdGuard Family Plan for just $29.99. It's good for up to nine devices.\n(via Cult of Mac - Tech and culture through an Apple lens)",
//             "url": "https://www.cultofmac.com/823712/adguard-family-plan-lifetime-subscription-2/",
//             "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2023/07/COM-AdGuard-Family-Plan-Lifetime-Subscription.jpeg",
//             "publishedAt": "2023-07-16T13:30:50Z",
//             "content": "Hackers and malicious viruses are very much a concern when youre on the web, but the biggest threats to your productivity and your privacy come from everyday internet hazards. Were talking about the … [+1643 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Daily Beast"
//             },
//             "author": "The Daily Beast",
//             "title": "Nick Fuentes Admits His Dream Wife Is 16 Years Old",
//             "description": "Photo Illustration by Erin O’Flynn/The Daily Beast/Getty Images\r\nListen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.Nick Fuentes knows the ideal age he’d like his future wife to be and, disgustingly, it's sixteen.O…",
//             "url": "https://www.thedailybeast.com/nick-fuentes-admits-his-dream-wife-is-16-years-old",
//             "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1689444512/230715-tna-bonus-nick-fuentes-hero_z9exrx",
//             "publishedAt": "2023-07-16T02:00:00Z",
//             "content": "Listen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.\r\nNick Fuentes knows the ideal age hed like his future wife to be and, disgustingly, it's sixteen.\r\nOn … [+1875 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Daily Beast"
//             },
//             "author": "Isabella Ramirez",
//             "title": "Missing Woman’s ‘Big Heart’ Put Her in Harm’s Way, Family Fears",
//             "description": "Hoover Police Department\r\nAs search efforts continue for the 25-year-old woman who vanished two days ago after calling 911 from a highway in Hoover, Alabama, her family is worried her “big heart” played a part in her disappearance.“She’s our baby girl. She’s …",
//             "url": "https://www.thedailybeast.com/missing-womans-big-heart-put-her-in-harms-way-family-fears",
//             "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1689465169/Collage_Maker-15-Jul-2023-07-52-PM-8422_n7kb53",
//             "publishedAt": "2023-07-16T00:15:34Z",
//             "content": "As search efforts continue for the 25-year-old woman who vanished two days ago after calling 911 from a highway in Hoover, Alabama, her family is worried her big heart played a part in her disappeara… [+3105 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Daily Beast"
//             },
//             "author": "Caroline Madden",
//             "title": "In Her PC Games, Barbie Taught ’90s Kids They Could Do It All",
//             "description": "Photo Illustration by Elizabeth Brockway / Kelly Caminero / The Daily Beast / Getty\r\nIt’s Barbie Week at The Daily Beast’s Obsessed, celebrating the doll’s pop-culture history, our favorite Barbie memories, and a certain major movie. Read all of our coverage …",
//             "url": "https://www.thedailybeast.com/obsessed/barbie-games-that-made-our-childhoods-fashion-designer-pet-rescue-and-more",
//             "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1689440335/230715-Madden-Barbie-Week-PCs-tease_gyvgwm",
//             "publishedAt": "2023-07-16T01:46:50Z",
//             "content": "Greta Gerwig's Barbie, out later this month, marks the doll's first live-action incarnation in her 64-year history, but it's far from the first media interpretation of the timeless toy. There are ani… [+9420 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Gazzetta.it"
//             },
//             "author": "Redazione",
//             "title": "Victoria Beckham si riunisce con le Spice Girls per i 30 anni? Ecco la verità...",
//             "description": "La Spice Girls reunion per i 30 anni della girl band avrà come protagonista anche Victoria Beckham? Ecco che cosa si sa finora.",
//             "url": "https://www.gazzetta.it/spettacolo/16-07-2023/spice-girls-reunion-per-i-30-anni-con-victoria-beckham-ecco-la-verita.shtml",
//             "urlToImage": "https://dimages2.gazzettaobjects.it/files/og_thumbnail/uploads/2023/07/16/64b3bd650391c.jpeg",
//             "publishedAt": "2023-07-16T10:14:57Z",
//             "content": "Redazione\r\n16 luglio\r\n- Londra\r\nIl prossimo anno le Spice Girls compiono 30 anni dal loro esordio nel 1994. Victoria Beckham festeggerà i 50 anni. Una combinazione che sembrava perfetta per la reunio… [+2682 chars]"
//         },
//         {
//             "source": {
//                 "id": null,
//                 "name": "Zive.cz"
//             },
//             "author": "Jan Pánek",
//             "title": "Vstupenka do nového prostoru. Test headsetu pro virtuální realitu HTC Vive Pro 2",
//             "description": "Virtuální a rozšířená realita je opět v kurzu, HTC Vive Pro 2 je skvělou vstupenkou za zábavou překračující hranice prostoru.",
//             "url": "https://www.zive.cz/clanky/vstupenka-do-noveho-prostoru-test-headsetu-pro-virtualni-realitu-htc-vive-pro-2/sc-3-a-222855/default.aspx",
//             "urlToImage": "https://www.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=256185427",
//             "publishedAt": "2023-07-16T06:45:00Z",
//             "content": "Plusy\r\n<ul><li>Jemný obraz</li><li>Pesné snímání polohy</li><li>Minimální latence</li></ul>\r\nMinusy\r\n<ul><li>Chybí sledování zraku</li><li>Krkolomnjí software</li><li>Absence vibrací headsetu</li></u… [+1607 chars]"
//         }
//     ]

//     constructor() {
//         super();
//         console.log("Hello i AM  a constructor")
//         this.state = {
//             atrticles: this.articles,
//             loading: false
//         }
//     }
//     //componentdidmount render kee baad run hoogaa
//     //constructor render see bhee pehlee run hoorraa hee
//     //fetch api takes one url and it returns  a promise
//     //fetch that returns a promise take it as await
//     //async function can wait inside its body to resolve some promises
//     async componentDidMount() {
//         console.log("component did mount")
//         let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bbf0011ce039447098c477b19e42e6b2"
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({ atrticles: parsedData.articles })
//     }

//     render() {
//         console.log("render")
//         return (
//             <div className="container my-3">
//                 <h1>News Monkey - Top Headlines </h1>
//                 <div className="row" >
//                     {this.state.atrticles.map((element) => {

//                         return <div className="col md-4" key={element.url}>
//                             <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />

//                         </div>
//                     })}

//                 </div>
//             </div>
//         )
//     }
// }

// export default News
