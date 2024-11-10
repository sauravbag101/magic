import React from 'react'

const all_data = () => {
  return (
    <>
       <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12 text">
        <h1 className="text-4xl font-bold mb-4">
          Understanding the fundamentals of state in Javascript
        </h1>
        <p className="text-gray-600 text-sm">
          Designed by Saurav Bag
        </p>
      </header>

      <div className="space-y-12">
        <div className="introduction">
          <p className="text-lg mb-4 font-mono font-bold">
            Chapter 3 from the book; Vumbula React — Co-authored by John Kagga
          </p>
          <p className="text-gray-700 leading-relaxed font-mono font-extralight">
            In earlier chapters, we've dealt mostly with functional React components that do not require state
            management. This chapter's main focus is on state, its management and components that utilise it in
            React.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            What is State?
          </h2>
          <div className="space-y-4 font-mono">
            <p className="text-gray-700 leading-relaxed ">
              State is a JavaScript object that stores a component's dynamic data and determines the component's
              behaviour. Because state is dynamic, it enables a component to keep track of changing information in
              between renders and for it to be dynamic and interactive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              State is similar to props but unlike props, it is private to a component and is controlled solely by the
              said component. In the examples from previous chapters, the behaviour of components has primarily
              depended on the props that are passed down to them. In those cases, the components that receive the
              props have no control over them because props are read-only.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Adding State to a Class Component
          </h2>
          <pre className="bg-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
            {`class Greeting extends React.Component {
    render(){
      return <h1>I'm a component in need of some state! </h1>;
    }
}`}
          </pre>
          <p className="text-gray-700 leading-relaxed mb-4 font-mono">
            Adding state to the Greeting component above involves defining within the class component, a constructor
            function that assigns the initial state using this.state.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            {`class Greeting extends React.Component {
    constructor(props) {
     super(props);
       // Define your state object here
       this.state = {
         name: 'Jane Doe'
       }
     }
     render(){
       return <h1>Hello { this.state.name }</h1>;
     }
}`}
          </pre>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Investigating State using React Dev Tools
          </h2>
          <div className="space-y-4 font-mono">
            <p className="text-gray-700 leading-relaxed ">
              The devtools are available for download on both Mozilla Firefox Add-ons and the Chrome Web Store. Follow
              the appropriate link to install the devtools depending on which browser you have installed on your
              computer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Throughout the rest of this book, Chrome will be used as the browser of choice. In order to confirm
              successful installation of the devtools on Chrome, open the developer tools window using Cmd+Opt+I on a
              Mac or Ctrl+Alt+I on a windows PC. You should now see a React tab.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default all_data
