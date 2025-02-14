import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-web">
                <Image
                    width={500}
                    height={500}
                    className="footer-web-image"
                    src="/img-web.svg"
                    alt="footer image"
                />
                <p className="footer-web-link">www.psd.diginus.id</p>
            </div>
        </div>
    );
};

export default Footer;
