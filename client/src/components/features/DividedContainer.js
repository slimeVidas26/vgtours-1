import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from './assets/elements/Sidebar'
import Header from './assets/elements/header/Header'



// import '../../assets/less/base.css'
// import '../../assets/less/header.css'
// import '../../assets/less/theme.css'
//  import '../../assets/icon/style.css'
import '../../assets/library/highlight.css'





class DividedContainer extends Component {

   

    componentDidMount() {
        document.getElementsByTagName('body')[0].className = 'no-transition dashboard-sq';

        // const script = document.createElement("script");
        // script.async = true;
        // script.src = "https://some-scripturl.js";
        // this.div.appendChild(script);
    }
    
    // componentWillUnmount() {
    //     document.getElementsByTagName('body')[0].className = '';
    // }

    render(){

       
        return (
          <React.Fragment>
               
                {/* <!-- for background color & freeze on sidemenu visible --> */}
    
    {/* <!--DEFAULT HEADER--> */}
    
    <header className="header-section ths header-shadow equal-tablet-header-items equal-mobile-header-items header-sticky header-slide-up">
    <div className="header-content">
    
    <div className="ui container grid">
     <Header/>
    </div>
    
    </div>    
    </header>
    
    
    <div className="ui layout">
    
    {/* <!-- grid --> */}
    <div className="ui grid container">
       
        <div className="row">
           
          {/* sidebar component */}
          <Sidebar/>

           <div className="ui twelve wide tablet nine wide computer nine wide widescreen nine wide large screen column">
               <div className="ui grid">
                   <div className="row">
                     
                       <div className="ui twelve wide computer grey column">
                          <div className="ui grid">
                              <div className="row">
                               
                                <div className="ui twelve wide computer column">
                                    <div className="typo-section-sq top-default bottom-default">
                                        <h2>Divided Container</h2>
                                        
                                        <p className="definition-sq"><strong>Divided Container</strong> is a custom grid particular to the theme.</p>
                                        <hr className="padded-sq"/>
                                        
                                        <h3>General Info</h3>
                                        <br/>
                                        
                                        <p>The grid it is used in many cases to what form elements together with the corresponding label.</p>
                                        
                                        <p>Base structure is like this: </p>
                                        
                                        
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>

    <code className="html">
        &lt;div className=&quot;div-c&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;
    </code>
    </pre>
                                        <hr className="padded-sq"/>
                                        
                                        <h3>Columns</h3>
                                        <br/>
                                        
                                        <p>By default <strong>.div-c</strong> columns have 100% width.</p>
                                        <br/>
                                        
                                        <p>In order to have multiple columns on one line you can use these classes::</p>
    
                                        <ul>
                                            <li><strong>.inline-2</strong> - two columns in a row.</li>
                                            <li><strong>.inline-3</strong> - thre columns in a row.</li>
                                            <li><strong>.inline-4</strong> - four columns in a row.</li>
                                        </ul>
                                        
                                        <p>No matter the above options, on mobile the width will always be 100%.</p>
                                        <br/>
    <div className="div-c inline-2">
    <div className="divided-column">
    <label>Label 1</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 2</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>                     
                                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-2</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;</code></pre>
                                    <br/>
                                    <br/>
                                     
    <div className="div-c inline-3">
    <div className="divided-column">
    <label>Label 3</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 4</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 5</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>                     
                                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">inline-3</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>
                                      
                                      
                                      <hr className="padded-sq"/>
                                       
                                       
                                       <h3>One Label Option</h3>
                                       
                                       
                                       <p>There are cases when the elements grid needs just one label. You can use the <strong>.one-label</strong> class like this:</p>
    <div className="div-c inline-4 one-label">
    <label>Label 1</label>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <input type="text" placeholder="Input Here"/>
    </div>
    </div>  
                                  
                                   
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c <mark className="markcode">one-label</mark> inline-4&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;/div&gt;</code></pre>       
                                       <hr className="padded-sq"/>
                                       
                                       <h3>No Padding Option</h3>
                                       <br/>
                                              
                                       <p>To remove columns gutter you can use this class <strong>.no-padding</strong></p>
    <div className="div-c inline-2 no-padding">
    <div className="divided-column">
    <label>Label 1</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    <div className="divided-column">
    <label>Label 2</label>
    <input type="text" placeholder="Input Here"/>
    </div>
    </div> 
                                                
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-2 <mark className="markcode">no-padding</mark>&quot;&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;
    &lt;label&gt;Label 2&lt;/label&gt;
    &lt;input type=&quot;text&quot; placeholder=&quot;Input Here&quot;&gt;
    &lt;/div&gt;
    ...
    &lt;/div&gt;</code></pre>
    
                                    <hr className="padded-sq"/>
                                               
                                        <h3>Border Option</h3>
                                       <br/>
                                              
                                       <p>To apply a border on the whole <strong>.div-c</strong>, excluding the label, you can use <strong>.border-sq</strong> class along with <strong>.no-padding</strong> class.</p>
                                       
                                       
                                       
    <div className="div-c inline-3 one-label no-padding border-sq">
    <label>Label 1</label>
    <div className="divided-column">Element 01</div>
    <div className="divided-column">Element 02</div>
    <div className="divided-column">Element 03</div>
    </div>
        
    <pre><button className="clipboad-copy-sq button-sq link-sq">Copy</button>
    <code className="html">&lt;div className=&quot;div-c inline-3 one-label no-padding <mark className="markcode">border-sq</mark>&quot;&gt;
    &lt;label&gt;Label 1&lt;/label&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 01&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 02&lt;/div&gt;
    &lt;div className=&quot;divided-column&quot;&gt;Element 03&lt;/div&gt;
    &lt;/div&gt;</code></pre>                    
                                   
                                    <hr className="padded-sq"/>                        
                                    </div>
                                    
                                        
                                </div>
                                               
                                
                              </div>
                          </div>
                       </div>
                </div>
               </div>
           </div>
           
           
        </div>
    </div>
    
    
    </div>    
    
    {/* <!--end #page-wrapper--> */}
    
    </React.Fragment>
        )

    }

    }

    


export default DividedContainer
