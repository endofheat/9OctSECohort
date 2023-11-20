function BigCat({name, latinName}){
    return (
        <li>
            <h4>Name: {name}</h4>
            <h4>Latin Name: {latinName}</h4>
        </li>
    )

}

function BigCatsList() {
    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
    ]

const bigCatItems = cats.map((cat) => (
    <BigCat key={cat.id}
             name={cat.name}
             latinName={cat.latinName}/>
));

return (
    <ul>{bigCatItems}</ul>
)}

export default BigCatsList;