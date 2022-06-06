// Imports
import { useState } from "react";

// Components
import FormModal from "../Components/FormModal.jsx";

const useFormModal = () => {
    const [formResponse, setFormResponse] = useState(undefined);
    const [showForm, setShowForm] = useState(false);

    const unshowFormHandler = () => setShowForm(false);

    const showFormModal = ({ title, description, errorMessage, inputs, confirmButtonText, onSubmitAction }) => showForm ? <FormModal
        title={title}
        description={description}
        errorMessage={errorMessage}
        onDismiss={unshowFormHandler}
        onSelect={setFormResponse}
        confirmButtonText={confirmButtonText}
        inputs={inputs}
        onSubmitAction={onSubmitAction}
    /> : null;

    const resetFormResponse = () => setFormResponse(undefined);

    return {
        showFormModal,
        setShowForm,
        formResponse,
        resetFormResponse
    }
}

export default useFormModal;