import "../../styles/utility.css";
import Logo from "../../assets/logo_chaos.png";
import HeroRectangleOne from "../../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../../assets/images/rectangleTwo.png";
import "../../styles/hero.css";
import "../../styles/header.css"
import Button from "../../components/Button.tsx"
import Menu from "../../assets/menu_icon.svg"
import Close from "../../assets/fechar-menu_icon.svg"
import { useState } from "react";
import SlideShow from "../../components/Slideshow.tsx";
import { useEffect } from "react";
import "../../styles/index.css"

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="ChaosStudio" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Shop</a></li>
                            <li><a href="#testimonials">Sales</a></li>
                            <li><a href="#pricing">Galeria</a></li>
                            <li><a href="#contact">About us</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" variant="secondary" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solution">Shop</a></li>
                                        <li><a href="#testimonials">Sales</a></li>
                                        <li><a href="#pricing">Galeria</a></li>
                                        <li><a href="#contact">About us</a></li>
                                        <li><a className="reverse-color" href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">Seja bem vindo! </p>
                    <h1>StreetWear de verdade.</h1>
                    <p>Camisetas, moletons e boné com caimento perfeito, design único e peças limitadas!</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Compre agora!" variant="secondary" />
                        </span>
                    </div>
                </div>
            </section>

            <section id="slideshow_div">
                <p className="slideshow_title">Últimas peças</p>

                <div>
                    <SlideShow />
                </div>
            </section>
        </>
    );
}