// Components
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
    return(
        <>
            <Header />

            <div className="home-page">
                <p className='text-2xl bg-backgroundColor text-textColor'>Hello Everyone !</p>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default Home;