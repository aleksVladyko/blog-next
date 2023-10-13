import Navigation from "./Navigation";
import { navItems } from "@/store/navItems";

const Header = () => {
    return (
        <header>
            <Navigation navLinks={navItems} />
        </header>
    );
};

export { Header };
