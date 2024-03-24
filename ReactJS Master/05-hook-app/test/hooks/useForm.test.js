
import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
    const initialForm = {
        name: "Fernando",
        email: "fernando@google.com",
    };

    test("debe de regresar un formulario por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    });


    test('debe de cambiar el nombre del formulario', () => { 

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newValue = 'Juan';

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: newValue
                }
            })

        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

     })



    test('debe de cambiar el email del formulario', () => { 

        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;

        const newValue = 'juan@gmail.com';

        act(() => {
            onInputChange({
                target: {
                    name: 'email',
                    value: newValue
                }
            })

        })

        expect(result.current.email).toBe(newValue);
        expect(result.current.formState.email).toBe(newValue);

     })


     test('debe de resetear el formulario', () => { 

        const { result } = renderHook(() => useForm(initialForm));
        const { onResetForm } = result.current;

        act(() => {
            
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.email).toBe(initialForm.email);
        expect(result.current.formState).toEqual(initialForm);

     })


     test('debe de inicializar el formulario con un objeto vacio', () => { 

        const { result } = renderHook(() => useForm());
        expect(result.current.formState).toEqual({});

     })




});
