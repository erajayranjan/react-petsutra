import React from "react"
class BackToTop extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.scrollY === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.scrollY - this.props.scrollStepInPx);
  }
  
  scroll() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
   
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return <button href='#' title='Back to top' 
               id='scroll' className='w-full bg-blue-700 text-lg text-blue-50' 
               onClick={ (event) => { 
                              event.preventDefault();
                              this.scroll(); 
                        }}>
                <span className=''> Back To Top</span>
              </button>;
   }
}

export default BackToTop