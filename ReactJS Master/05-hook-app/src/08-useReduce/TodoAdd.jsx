
import { useForm } from '../hooks'

export const TodoAdd = ({onNewTodo}) => {

    const {description , onInputChange , onResetForm  } = useForm({
        description : ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1){
            return;
        }
        const newTodo={
            id: new Date().getTime(),
            description : description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm()
    }

    return (
        <form onSubmit={ onSubmit } >
            <input 
            type="text" 
            name="description" 
            placeholder="¿Que hay que hacer?" 
            className="form-control" 
            value={description}
            onChange={onInputChange}
            />
            <button type="submit"  className="btn btn-outline-primary mt-1"> Agregar </button>
        </form>
    )
}
