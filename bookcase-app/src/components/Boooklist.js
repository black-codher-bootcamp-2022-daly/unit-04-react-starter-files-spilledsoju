import Book from './Book';

function Boooklist (props) {
    return (

        <main>
            <h2>Book List</h2>
            {props.children} 
        </main>
    )
}

export default Boooklist