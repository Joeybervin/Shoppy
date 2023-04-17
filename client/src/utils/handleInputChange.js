
import { whiteSpace } from "./whiteSpace";

export const handleInputChange = (event, whiteSpaceCheck , fieldsToCheck, setFormData, setErrorMessage) => {

    const { name, value } = event.target;

    if (whiteSpaceCheck) {

        const invalidWhitespace = whiteSpace(event.target.value) // Check if any white space was typed

        for (var i = 0; i < fieldsToCheck.length; i++) {
            if (name === fieldsToCheck[i] && invalidWhitespace) {
                setErrorMessage(`Un espace s'est infiltrer`)
            }
            if (name === fieldsToCheck[i] && !invalidWhitespace) {
                setErrorMessage("")
            }
    
        }
    }

    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));

};

