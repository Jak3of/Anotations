


export const TodoAdd = ({onNewTodo}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const description = e.target.description
        onNewTodo(description.value)
    }

    return (
        <form onSubmit={ onSubmit } >
            <input type="text" name="description" placeholder="¿Que hay que hacer?" className="form-control" />
            <button type="submit"  className="btn btn-outline-primary mt-1"> Agregar </button>
        </form>
    )
}
