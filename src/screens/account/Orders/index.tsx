import OneOrder from "../../../components/oneOrder";

const Orders = () => {
    return ( 
        <div>
            <div className="mb-5">
            <OneOrder number={879980998990} date={"October 8,2021"} status={"Delivered"} total={65} action={""} variant={"noOrder"}/>
            </div>
            <h1 className="mb-5">OR</h1>
            <div className="grid grid-cols-5 border-b border-black pb-4">
                <h3>ORDER NUMBER</h3>
                <h3>DATE</h3>
                <h3>STATUS</h3>
                <h3>TOTAL</h3>
                <h3>ACTIONS</h3>
            </div>
            <div>
                <OneOrder number={7643980998990} date={"October 8,2021"} status={"Delivered"} total={105} action={""} variant={"Order"}/>
                <OneOrder number={943980998990} date={"October 8,2021"} status={"Processing"} total={100} action={""} variant={"Order"}/>
                <OneOrder number={879980998990} date={"October 8,2021"} status={"Delivered"} total={65} action={""} variant={"Order"}/>
            </div>
        </div>
     );
}
 
export default Orders;