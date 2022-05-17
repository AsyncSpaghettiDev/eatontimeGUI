import { useLocation } from "react-router-dom";

const ConfirmBill = () => {
    const {state} = useLocation();

    return (
        <div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
            { state.tableID }
            <h2 id="dialogTitle">Your personal details were successfully updated</h2>
            <p id="dialogDesc">You can change your details at any time in the user account section.</p>
            <button> Close </button>
        </div>
    )
}

export default ConfirmBill;