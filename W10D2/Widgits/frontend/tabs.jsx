import React from 'react';
class Tabs extends  React.Component {

  constructor(props) {
    super(props); // props are title and content. from root...?
    this.state = {
      tabIdx: 0,
    };
    this.updateIndex = this.updateIndex.bind(this);

  }

  updateIndex(idx) {
    this.setState( {tabIdx: idx} ); 
  }


  // original:
  render() {
    
    return(
      <div>
        <h1> TABS TABS TABS FOR DAYS</h1>
      <ul className="tabsContainer">
        <h2>Inside return's UL</h2>

          {/* Nothing below is rendered, but it still console logs */}
        {  // props is an object that points to tabContent
          // console.log(this.props.tabContent instanceof Array)
          // console.log(this.props.tabContent.map)
          // <h2>Inside return's ul's curly bois </h2>
          this.props.tabContent.map( (el, idx) => {
            <div>
              {/* <header onClick= {this.updateIndex(idx)} >  */}
              return <h1> {el.title} </h1>  <article> {el.content}  </article>
              {/* </header> */}

             
            </div>
            console.log(`el title: ${el.title} || el content: ${el.content} || idx: ${idx}`)
          }
          )
        }
      </ul>

      </div>
    )  // End of return
  } // end of render()


// Broken even if we try to return only the div.
  // render() {

  //   return(
  //     <div>
  //       {  // props is an object that points to tabContent
  //         // console.log(this.props.tabContent instanceof Array)
  //         // console.log(this.props.tabContent.map)
  //         this.props.tabContent.map( (el, idx) => {
  //           <div>
  //             {/* <header onClick= {this.updateIndex(idx)} >  */}
  //               <h1> { el.title} </h1>  
  //             {/* </header> */}
  //             <article> 
  //               {el.content} 
  //             </article>
  //           </div>
  //           console.log(`el title: ${el.title} || el content: ${el.content} || idx: ${idx}`)
  //         }
  //         )
  //       }
  //     </div>
  //   )
  // }



}

export default Tabs;
