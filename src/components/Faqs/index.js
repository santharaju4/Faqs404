// Write your code here.
import {Component} from 'react'

import FqaItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="title">FAQs</h1>
          <ul className="faqs-list">
            {faqsList.map(eachItem => (
              <FqaItem key={eachItem.id} faqDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
