export default function ColorList({colors}) {
    // const elements = [<p>Hello!</p>, <h1>Bye!</h1>];
    // const lis = colors.map(color => <li>{color}</li>);
    return (
        <div>
            <p>Color List</p>
            <p>{colors}</p>
            {/*{elements}*/}
            {/*<ul>{lis}</ul>*/}
            <ul>{colors.map(color => <li style={{color: color}}>{color}</li>)}</ul>
        </div>
    )
}