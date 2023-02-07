import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { Ri24HoursLine } from "react-icons/ri";

const Div = styled.div`

`
const ServiceBox = ({service, serviceDetail})=> {
    return (
        <Div>
            <p>{service}</p>
            <p>{serviceDetail}</p>

        </Div>
    )
}