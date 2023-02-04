import React from 'react'
import ReactDOM from 'react-dom/client'

function List() {
    return (
        <React.Fragment>
            <h1>List</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <div>
            <List />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
