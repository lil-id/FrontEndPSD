import Logo from "./Logo";
import HeaderTitle from "./HeaderTitle";
import HeaderBottomTitle from "./HeaderBottomTitle";

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <div className="title">
                <HeaderTitle />
                <HeaderBottomTitle />
            </div>
        </div>
    );
};

export default Header;
