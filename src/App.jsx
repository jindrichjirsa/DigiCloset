import {ClosetList} from "./views/ClosetList.jsx";
import {About} from "./views/About.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Contact} from "./views/Contact.jsx";
import {ToastContainer} from "react-toastify";

export const App = () => {
    return (
        <BrowserRouter>
            <div className={"flex flex-col md:flex-row min-h-screen"}>
                <Sidebar/>
                <div className={"w-[calc(100vw-16rem)]"}>
                    <Routes>
                        <Route path="/" exact element={<ClosetList />}/>
                        <Route path="/outfity" element={<ClosetList />}/>
                        <Route path="/generator" element={<ClosetList />}/>
                        <Route path="/o-nas" element={<About />}/>
                        <Route path="/kontakt" element={<Contact />}/>
                        <Route path="/not-found" element={<ClosetList />}/>
                    </Routes>
                    <ToastContainer
                        newestOnTop={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}
