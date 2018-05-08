import React, { Component } from 'react';

import { css } from 'aphrodite/no-important';
import styles from './ScrollToTopStyle'

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: 0,
      show: false
    };
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll() {
    if (window.scrollY > this.props.height) {
      this.setState({show: true})
    } else {
      this.setState({show: false})
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    let style = this.state.show ? {transform: 'translateY(0)', opacity: 1} : {transform: 'translateY(100%)', opacity: 0};
    return <button  onClick={() => this.scrollToTop()} style={style} className={css(styles.scroll)} >
      <span className={css(styles.icon)}>
        <i className='fas fa-chevron-up'/>
      </span>
    </button>
  }
}

export { ScrollToTop };