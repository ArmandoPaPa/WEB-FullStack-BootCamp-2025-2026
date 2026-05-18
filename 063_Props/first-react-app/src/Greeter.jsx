// export default function Greeter(props) {
//     return <h1>Hi there, {props.person}!</h1>
// }

export default function Greeter({person="Everyone", from="EU"}) {
    return (
        <>
            <h1>Hi there, {person}!</h1>
            <h2>--- from {from}</h2>
        </>
    )
}