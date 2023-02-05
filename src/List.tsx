type Props = {}
export const List = (props: Props) => {
    let data = false
    return (
        <>
            <h1>List</h1>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'purple' : 'tomato',
                    padding: '15px',
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tenetur vel facilis ratione quisquam. Eos recusandae natus culpa
                dolorum nostrum quasi quidem harum blanditiis eveniet sint in
                molestias, pariatur exercitationem.
            </p>
        </>
    )
}
// export default List
