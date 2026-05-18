function handleFromSubmit(e){
    e.preventDefault();
    alert("Form submitted");
}

export default function Form(){
    return (
        <form onSubmit={handleFromSubmit}>
            <button>Submit</button>
        </form>
    )
}