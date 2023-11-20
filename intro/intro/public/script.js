const div = document.getElementById("root")

const page = (
    <div>
        <h1 className="header">My awesome website in React</h1>
        <h3>Reasons I love React:</h3>
        <ol className="list-group">
            <li className="list-group-item">It's composable</li>
            <li className="list-group-item">It's declarative</li>
            <li className="list-group-item">It's a hireable skill</li>
            <li className="list-group-item">It's actively maintained by skilled people</li>
        </ol>
    </div>
)

div.append(page)

ReactDOM.render(page, div)