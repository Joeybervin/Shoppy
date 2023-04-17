import styled from "styled-components";

const StyleSelect = styled.div`

    display: flex ;
    flex-direction: column;
    align-items: center;
    margin : 10px ;

    > label {
        margin-bottom : 5px;
    }

    select {
        border-radius : 7px;
        padding : 6px 14px;
        min-width: 155px;
        text-align : center
    }

`

const Select = ({ name, label, optionsList, value, ...props }) => {
    return (
        <StyleSelect className={props.className}>

            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={props.onChange}>
                {props.empty ? <option value="">{props.firstOption ? props.firstOption : "--Choisissez...--"}</option> : null}
                {optionsList.map((option, index) => {
                    if (option === props.category) {
                        return <option key={index} value={option} selected >{option}</option>
                    }
                    else {
                        return (
                            <option key={index} value={option} >{option}</option>
                        )
                    }

                })}
            </select>

        </StyleSelect>
    )
};

export { Select }