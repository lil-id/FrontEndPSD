import Image from "next/image";

const HeaderBottomTitle = () => {
    return (
      <div className="title-bottom">
        <div className="header-web">
            <Image
                className="header-web-image"
                src="/img-web.svg"
                width={500}
                height={500}
                alt="web logo"
            />
            <p className="header-web-link">www.psd.diginus.id</p>
        </div>
        <div className="header-ig">
            <Image
                width={500}
                height={500}
                className="header-ig-image"
                src="/img-ig.svg"
                alt="ig logo"
            />
            <p className="header-ig-link">psd.diginus.id</p>
        </div>
      </div>
    );
};

export default HeaderBottomTitle;