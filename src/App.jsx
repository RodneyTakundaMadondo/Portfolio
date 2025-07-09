import { Header } from './Components/Header';
import { Intro } from './Components/Intro';
import { About } from './Components/About';
import { Work } from './Components/Work';
import { Built } from './Components/Built';
import { OtherBuilds } from './Components/OtherBuilds';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
export function App() {
    return (
        <>
            <div className='min-h-[100vh] '>
                <div className='grid grid-cols-1 grid-rows-1 gap-16'>
                    <Header />
                    <Intro />
                    <About />
                    <Work />
                    <Built />
                    <OtherBuilds />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    )
}