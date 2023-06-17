import { Link } from "react-router-dom";

interface IDownload{
    number?:number,
    date?:string,
    status?:string,
    total?:number,
    action?:string,
    download?:string,
    variant: "download" | "noDownload"
}

const OneDownload = (i:IDownload) => {
    switch (i.variant) {
        case "download": return ( 
            <div className="grid grid-cols-5 border-b py-5 text-gray-400">
                <h3>{i.number}</h3>
                <h3>{i.date}</h3>
                <h3>{i.status}</h3>
                <h3>{i.total}</h3>
                <div>
                    <Link className="text-amber-700" to={""}>View Order |</Link>
                    <Link className="text-amber-700" to={""}> Download</Link> 
                </div>
            </div>
         );
        case "noDownload": return (
            <div className="flex justify-between px-10 py-5 bg-gray-300 border-t border-black">
                <h3>No downloads available yet.</h3>
                <Link className="text-amber-700" to={""}>BROWSE PRODUCT</Link>
            </div>
        )
    }
}
 
export default OneDownload;