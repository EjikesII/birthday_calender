import Person from "./Person"

const List = ({family}) => {
    return (
        <section> 
            {family.map((person) => {
                return <Person key={person.id} {...person} />;
            })}
        </section>
    );
        
};
export default List;