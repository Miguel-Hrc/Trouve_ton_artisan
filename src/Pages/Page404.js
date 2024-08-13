import Footer from '../Component/Footer';


const Page404 = () => {
  
    return (    
        <main>
            <div className="text-center">
                <iframe src="https://giphy.com/embed/FUKCPzVj0GGrCsdsmP" width="100%" height="auto" style={{ marginTop: "25vh" }} className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/colibridigital-colibrito-colibr-FUKCPzVj0GGrCsdsmP">via GIPHY</a></p>
                <p style={{ marginTop: "5vh" }}>Error 404 : page not found</p>
            </div>
            <div style={{ position: "relative" , zIndex: "-1" , marginTop: "30vh"  }}>
                <Footer />
            </div>
        </main>
    );
  };
  
export default Page404;