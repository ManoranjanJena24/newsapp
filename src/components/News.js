import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {


    render() {
        return (
            <div className="container my-3">
                <h1>News Monkey - Top Headlines </h1>
                <div className="row">
                    <div className="col md-4">
                        <NewsItem title="mytitle" description="mydesc" imageUrl="https://i.guim.co.uk/img/media/72cd2d6197423d2ff6c7dd8ccecd49656a1b29c3/0_555_3024_1814/master/3024.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=2f24873156a38713cc4f6ca36bef5dab" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>
                    <div className="col md-4">
                        <NewsItem title="mytitle" description="mydesc" />
                    </div>

                </div>

            </div>
        )
    }
}

export default News
