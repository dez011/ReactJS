import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function Page(){
    return(
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
        )
}

ReactDOM.render(<Page />, document.getElementById("root"))

//38.05