import Navbar from "../navigationBar/navigationBar.component";
import "./home.styles.scss";
import services from "../../services";
import Card from "../card/card.component";

function Home () {

    return (
        <div>
            <Navbar></Navbar>
            <img className="header_img" src="/images/guitar_home.jpg"></img>
            <div className="card_list_container">{services.map((service) => (
                <Card key={service.id} name={service.name} imgUrl={service.img}/>
            ))}
            </div>
        </div>
    )
}

export default Home;