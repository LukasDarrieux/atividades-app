function Title(props) {
    return (
        <div className="d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1">
            <h1 className="m-0 p-0">{props.title}</h1>
            {props.children}
        </div>
    );
}

export default Title;