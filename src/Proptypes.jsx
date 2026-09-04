

function Chef({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}

Chef.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};