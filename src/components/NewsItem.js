import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, author, date, source } = this.props
        return (
            <div className='my-3' >
                <div className="card" style={{ width: "18rem" }}>
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                        {source}</span>
                    <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/07/23/600x338/Yamuna-Crosses-Danger-Mark-5_1690086862870_1690086872337.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
