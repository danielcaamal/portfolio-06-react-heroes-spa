import { useState } from "react";


export const useForm = <T>(initialState:T) => {
    const initialFormState = {
        ...initialState,
        errors: [] as string[],
    }
    // TODO: Implement errors

    const [formState, setFormState] = useState<typeof initialFormState>(initialFormState);

    const onInputChange = ({ target }: any) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    }

    const onResetForm = () => {
        setFormState({ ...initialFormState, errors: [] });
    }

    return {
        formState,
        onInputChange,
        onResetForm,
    };
}