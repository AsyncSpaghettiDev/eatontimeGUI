// Imports
import { useEffect, useState } from 'react';

// Components
import ConfirmModal from '../Components/ConfirmModal.jsx';

const useConfirmModal = () => {
    const [confirmResponse, setConfirmResponse] = useState(undefined);
    const [showConfirm, setShowConfirm] = useState(false);
    
    const unshowConfirmHandler = () => setShowConfirm(false);

    const showModal = (title, description) => showConfirm ? <ConfirmModal
        title={title}
        description={description}
        onDismiss={unshowConfirmHandler}
        onSelect={setConfirmResponse}
    /> : null;

    const resetResponse = () => setConfirmResponse(undefined);

    return {
        showModal,
        setShowConfirm,
        confirmResponse,
        resetResponse
    }
}

export default useConfirmModal;