export default function ListPicker({values}){
    const randIdx = Math.floor(Math.random() * values.length);
    return (
        <div>
            <p>The list of values: {values}</p>
             <p>Random element picked: {values[randIdx]}</p>
        </div>
    )
}