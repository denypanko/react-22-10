import React from 'react'
import ReactDOM from 'react-dom/client'
import { List } from './List'

type TitleProps = {
    name: string
    text: string
    age: number
}

const Title = ({ name, text, age }: TitleProps) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>Hi {text}</p>
            <div>Age {age}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title
                name="App"
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
                age={25}
            />
            <Title name="React" text="Lorem ipsum dolor sit, amet" age={22} />
            <Title name="TS" text="Lorem ipsum dolor" age={20} />
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
