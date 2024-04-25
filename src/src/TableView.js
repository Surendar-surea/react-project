function TableView(props) {
    return (
        <div>
            <td>{props.val.id}</td>
            <td>{props.val.name}</td>
            <td>{props.val.age}</td>
            <td>{props.val.mailid}</td>
            <td>{props.val.phoneno}</td>
        </div>
    )
}

export default TableView;