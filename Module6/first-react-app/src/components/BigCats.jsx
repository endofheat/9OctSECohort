import { useState } from "react"
import AddCatForm from "./AddCatForm"

const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Cheetah_portrait_Whipsnade_Zoo.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', imgUrl: 'https://daily.jstor.org/wp-content/uploads/2016/08/cougar_closeup_1050x700.jpg' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', imgUrl: 'https://www.zurich.com/-/media/project/zurich/dotcom/media/magazine/2021/images/teaser-social-how-endangered-jaguars-returned-to-brazils-ghost-forest.jpg?rev=ed634138b7d944b8a760d8e977d29a23' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', imgUrl: 'https://cdn.creatureandcoagency.com/uploads/2014/09/leopard-facts-10-1.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', imgUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/06/lion-1.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', imgUrl: 'https://thebigcatsanctuary.org/wp-content/uploads/2021/10/Screenshot-2021-10-29-at-11.03.38-1024x747.png' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', imgUrl: 'https://www.wildlifeexplained.com/wp-content/uploads/2022/01/tiger-panthera-tigris-closeup.jpg' },
    ]

function SingleCat({name, latinName, imgUrl}) {
    return (
        <li>
            <img src={imgUrl} width="200"></img>
            <h4>Name: {name}</h4>
            <h4>Latin Name: {latinName}</h4>
        </li>
    )
}

function BigCats(){
    const[catsList, setCatsList] = useState(cats)
    const catItems = catsList.map((cat) => (
    <SingleCat key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            img={cat.imgUrl}/>
))

    const handleSortByName = function() {
        let newList = [...catsList];
        newList.sort((catA, catB) => catA.name > catB.name ? 1 : -1);
        setCatsList(newList);
    }

    const handleReverseList = () => {
        let newList = [...catsList];
        newList.reverse();
        setCatsList(newList);
    }

    const handleAddCat = (newCat) => {
        newCat.id = catsList.length + 1;
        setCatsList([...catsList, newCat]);
    }

    return (
        <div className="BigCats componentBox">
        <ul>{catItems}</ul>
        <SortButton sortField="Name" onSort={handleSortByName}></SortButton>
        <button onClick={handleReverseList}>Reverse List</button>
        <AddCatForm onAddCat={handleAddCat} />
        </div>
)
}

function SortButton({sortField, onSort}) {
    return (
        <button onClick={onSort}>Sort By {sortField}</button>
    )
}

export default BigCats;