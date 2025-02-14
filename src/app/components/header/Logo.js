import Image from "next/image";

const Logo = () => {
    return (
        <div className="logo">
            <Image
                className="logo-psd"
                width={500}
                height={500}
                src="/img-psd.png"
                alt="logo psd"
            />
            <Image
                className="logo-unm"
                width={500}
                height={500}
                src="https://firebasestorage.googleapis.com/v0/b/psd-display.appspot.com/o/img-unm.svg?alt=media&token=e881e559-bdb2-4aa5-8b32-61db6c037304"
                alt="logo unm"
            />
        </div>
    );
};

export default Logo;
