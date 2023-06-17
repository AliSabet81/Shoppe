const PrivacyPolicyScreen = () => {
    return ( 
        <div className="max-w-2xl my-24 flex flex-col gap-10 mx-auto">
            <h1 className="text-4xl text-center font-medium">Privacy Policy</h1>
            <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <div>
                <h3 className="text-2xl mb-6">Security</h3>
                <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.</p>
            </div>
            <div>
                <h3 className="text-2xl mb-6">Cookies</h3>
                <ul className="ml-3">
                    <li>● consectetur adipiscing elit. Aliquam placerat</li>
                    <li>● consectetur adipiscing elit. Aliquam placerat</li>
                </ul>
            </div>
        </div>
     );
}
 
export default PrivacyPolicyScreen;