import Header from "@/pages/components/header";
import SideMenu from "@/pages/components/side-menu";
import Dashboard from "@/pages/dashboard/index";
import Login from "@/pages/login/index";

export default function Home() {
    return (
        <main className="main">
            <Header/>
            <SideMenu/>
            <Dashboard/>
            <Login/>
        </main>
    );
}