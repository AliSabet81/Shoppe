import { Link } from "react-router-dom";
import { IDownload } from "../../types";



const OneDownload = (i:IDownload) => {
    switch (i.variant) {
        case "download": return ( 
            <div className="grid border-b py-5 sm:grid-cols-1 text-xs sm:text-base  grid-cols-2">
                <div className="grid grid-cols-1 gap-5 sm:hidden ">
                    <h3>ORDER NUMBER</h3>
                    <h3>DATE</h3>
                    <h3>STATUS</h3>
                    <h3>TOTAL</h3>
                    <h3>ACTIONS</h3>
                </div>
                <div className="grid grid-cols-1 justify-items-end sm:justify-items-start sm:grid-cols-5 sm:gap-0 gap-5 text-gray-400">
                    <h3>{i.number}</h3>
                    <h3>{i.date}</h3>
                    <h3>{i.status}</h3>
                    <h3>{i.total}</h3>
                    <div>
                        <Link className="text-amber-700" to={""}>View Order |</Link>
                        <Link className="text-amber-700" to={""}> Download</Link> 
                    </div>
                </div>
            </div>
         );
        case "noDownload": return (
            <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-10 py-2 sm:py-5 bg-gray-300 border-t border-black">
                <h3 className="text-xs sm:text-base">No Downloads has been made yet.</h3>
                <Link className="text-amber-700 !text-xs sm:!text-base" to={""}>BROWSE PRODUCT</Link>
            </div>
        )
    }
}
 
export default OneDownload;

