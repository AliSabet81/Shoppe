import OneDownload from "../../../components/oneDownload";

const Downloads = () => {
    return ( 
        <div>
            <div className="mb-5">
            <OneDownload number={879980998990} date={"October 8,2021"} status={"Delivered"} total={65} action={""} download={""} variant={"noDownload"}/>
            </div>
            <h1 className="mb-5">OR</h1>
            <div className="hidden sm:grid grid-cols-5 border-b border-black pb-4">
                <h3>ORDER NUMBER</h3>
                <h3>DATE</h3>
                <h3>STATUS</h3>
                <h3>TOTAL</h3>
                <h3>ACTIONS</h3>
            </div>
            <div>
                <OneDownload number={7643980998990} date={"October 8,2021"} status={"Delivered"} total={105} action={""} download={""} variant={"download"}/>
                <OneDownload number={943980998990} date={"October 8,2021"} status={"Processing"} total={100} action={""} download={""} variant={"download"}/>
                <OneDownload number={879980998990} date={"October 8,2021"} status={"Delivered"} total={65} action={""} download={""} variant={"download"}/>
            </div>
        </div>
     );
}
 
export default Downloads;