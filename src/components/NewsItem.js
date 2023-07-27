import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl } = this.props
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/07/23/600x338/Yamuna-Crosses-Danger-Mark-5_1690086862870_1690086872337.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
