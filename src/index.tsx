import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')

const title = <h1 id="title">Hello React</h1>

const content = (
    <div>
        {title}
        {10 + 10}
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in
            est provident fugit ad nihil quo assumenda! Fuga quod debitis minus
            in officia aliquam aspernatur accusamus quibusdam. Magnam, totam ab.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
