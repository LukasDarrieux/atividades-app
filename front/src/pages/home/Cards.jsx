function Cards(props) {
    return (
        <div className="col-md mb-3">
            <div className={"card shadow text-center p-3 text-light bg-" + props.color } style={{ height: 200 }}>
                {   
                    props.titulo ?
                    <h3>{props.titulo}</h3>
                    :
                    <></>
                }
                
                <div className="d-flex justify-content-center align-items-center h-100">
                    <h3>{props.conteudo}</h3>
                </div>

            </div>
        </div>
    )
}

export default Cards;