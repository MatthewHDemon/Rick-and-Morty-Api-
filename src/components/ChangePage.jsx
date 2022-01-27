

function ChangePage ({apiInfo , setApiCharacter}) {
    console.log(apiInfo)
const prevPage = ()  => {
    setApiCharacter(apiInfo.prev)
}
const nextPage = () => { 
    setApiCharacter(apiInfo.next)

 }

    return (
        <div className="buttons-container">
            <button className="button" onClick={prevPage}>Anterior</button>
            <button className="button" onClick={nextPage}>Siguiente</button>
        </div>

    )
}

export {ChangePage}

