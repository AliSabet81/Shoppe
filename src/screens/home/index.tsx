import ShopTheLatest from "../../components/shopTheLatest";
import HomeSlider from "../../components/slider";

const HomeScreen = () => {
    return ( 
        <div>
            <HomeSlider/>
            <div className="mt-16 mb-52"><ShopTheLatest/></div>
        </div>
     );
}
 
export default HomeScreen;