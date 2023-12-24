const Parent = ({ value }) => {
    return <div>{value}</div>;
};

export default function Container() {
    return (
        <div>
            <Parent value={100} />
        </div>
    );
}
