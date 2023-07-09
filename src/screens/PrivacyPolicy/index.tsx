const PrivacyPolicyScreen = () => {
    return ( 
        <div className="max-w-2xl mt-10 mb-24 sm:my-24 flex flex-col gap-5 sm:gap-10 mx-auto">
            <h1 className="text-xl sm:text-4xl sm:text-center font-medium">Privacy Policy</h1>
            <p className="text-xs sm:text-base">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <div>
                <h3 className="text-base sm:text-2xl mb-6">Security</h3>
                <p className="text-xs sm:text-base">Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.</p>
            </div>
            <div>
                <h3 className="text-base sm:text-2xl mb-6">Cookies</h3>
                <ul className="ml-3 text-xs sm:text-base">
                    <li>● consectetur adipiscing elit. Aliquam placerat</li>
                    <li>● consectetur adipiscing elit. Aliquam placerat</li>
                </ul>
            </div>
        </div>
     );
}
 
export default PrivacyPolicyScreen;