import classes from './List.module.css'

type Props = {}
export const List = (props: Props) => {
    let data = true
    const { content, test, articleDesc } = classes
    return (
        <>
            <h1>List</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p className={`${articleDesc} ${data ? content : test}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tenetur vel facilis ratione quisquam. Eos recusandae natus culpa
                dolorum nostrum quasi quidem harum blanditiis eveniet sint in
                molestias, pariatur exercitationem.
            </p>
        </>
    )
}
// export default List