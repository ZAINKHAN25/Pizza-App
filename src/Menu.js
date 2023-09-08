import './App.css';
import {useState} from 'react'

function Menu() {
    const [arrayofmenu, setarrayofmenu] = useState([{
        headings: "Focaccia",
        description: "a classic Italian flat bread rich in olive oil.",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSVlX6bR8IrCj2ZlLqz8sh4F21lO0_-P7vC9jmfE_LbdRtOn90RjyvIEQC-246p3ITNs&usqp=CAU",
        likes : 10
    }, {
        headings: "Pizza Margherita",
        description: "a simple pizza hailing from Naples",
        image : "https://i.pinimg.com/originals/6b/73/52/6b7352b5c46af2150f596725c4d21c24.jpg",
        likes : 6
    }, {
        headings: "Pizza Spinaci",
        description: "pinach tossed in garlic and olive oil is twinned with mild manouri cheese",
        image : "https://i.pinimg.com/1200x/6a/9f/90/6a9f9099a478913803320c57c6e1decf.jpg",
        likes : 10
    }, {
        headings: "Pizza Funghi",
        description: "a variety of Italian pizza that is traditionally topped with tomato sauce",
        image : "https://i.pinimg.com/736x/c2/64/31/c26431ed9791947f458984505aca8e85.jpg",
        likes : 14
    }, {
        headings: "Pizza Salamino",
        description: "the second most popular pizza in the world",
        image : "https://i.pinimg.com/736x/63/33/e6/6333e6e2557f7a509a53bf3bfece74f1.jpg",
        likes : 20
    }, {
        headings: "Pizza Prosciutto",
        description: "Thin slices of salty prosciutto cotto or cooked ham, creamy mozzarella cheese",
        image : "https://i.pinimg.com/1200x/8d/b1/f4/8db1f4a5e3d3bd89f408e0157b442967.jpg",
        likes : 30
    }]);

    //code which starts map to convert one array object into html
  return (
    <div className='menudiv'>
        {arrayofmenu.map((singlemenu)=> <SingleMenu dataofsinglemenu={singlemenu} />)}
    </div>
  );
}

// code of single menu data

function SingleMenu(props) {
    var {headings, description, image, likes} = props.dataofsinglemenu;

    return (
        <div className='singlemenudiv'>
            <div className='imagediv'>
                <img src={image} alt="" />
            </div>
            <div className='textcontentofdiv'>
                <div className='headingofdiv'>{headings}</div>
                <p className='descriptionofdiv'>{description}</p>
                <p className='likesofdiv'>{likes}</p>
            </div>
        </div>
    )
}
 

export default Menu;
