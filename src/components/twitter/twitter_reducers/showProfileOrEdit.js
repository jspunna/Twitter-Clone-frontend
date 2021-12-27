
const showProfileOrEdit = (state = true, action) => {
    switch (action.type) {
        case 'show-edit':
            return (
                state = false
            );
            break;
        case 'show-profile':
            return (
                state = true
            );
            break;
        default:
            return state;
    }
};
export default showProfileOrEdit;