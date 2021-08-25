import Dropdown from "react-bootstrap/Dropdown";

const styles = {
    dropdown: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
    },
    toggle: {
        background: "white",
        borderStyle: "none",
        color: "black",
        fontSize: "20px",
    },
};

const JobDropDown = () => {
    return (
        <Dropdown style={styles.dropdown}>
            <Dropdown.Toggle variant="success" style={styles.toggle}>
                Kuala Lumpur
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">Selangor</Dropdown.Item>
                <Dropdown.Item href="#">Malacca</Dropdown.Item>
                <Dropdown.Item href="#">Penang</Dropdown.Item>
                <Dropdown.Item href="#">Johor</Dropdown.Item>
                <Dropdown.Item href="#">Perak</Dropdown.Item>
                <Dropdown.Item href="#">Pahang</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default JobDropDown;
