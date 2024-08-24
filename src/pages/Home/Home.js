import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FiSettings, FiBox, FiHeart, FiShare2 } from 'react-icons/fi';
import { BsPlusCircleFill } from "react-icons/bs";
import LogoIcon from '../../assets/icons/favicon.png';
import ProfileUrl from '../../assets/images/store-profile.png';
import BannerUrl from '../../assets/images/store-banner.png';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const stores = [
        {
            bannerUrl: BannerUrl,
            profileUrl: ProfileUrl,
            name: 'Tienda 1',
            category: 'Electrodomésticos'
        },
        {
            bannerUrl: BannerUrl,
            profileUrl: ProfileUrl,
            name: 'Tienda 2',
            category: 'Ropa'
        },
        {
            bannerUrl: BannerUrl,
            profileUrl: ProfileUrl,
            name: 'Tienda 2',
            category: 'Ropa'
        },
        {
            bannerUrl: BannerUrl,
            profileUrl: ProfileUrl,
            name: 'Tienda 2',
            category: 'Ropa'
        }
    ];

    return (
        <div>
            <div className="home-container">
                <header className="home-header">
                    <img src={LogoIcon} alt='Logo no disponible' className="home-logo" />
                    <h1 className="home-title">Atienda</h1>
                </header>
                <div className="home-actions">
                    <input type='search' placeholder="Search..." className="home-search-input" />
                    <button
                        className={`home-menu-button ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <BsPlusCircleFill className="home-menu-icon" />
                    </button>
                    {isMenuOpen && (
                        <div className="home-menu" ref={menuRef}>
                            <div className="home-menu-item">
                                <FiBox />
                                <span>Crear tienda</span>
                            </div>
                            <div className="home-menu-item">
                                <FiSettings />
                                <span>Ajustar tienda</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="home-featured-stores">
                <h1>Tiendas Destacadas</h1>
                <span>Ver Todo</span>
            </div>
            <div className="home-cards">
                {stores.map((store, index) => (
                    <div key={index} className="store-card">
                        <img src={store.bannerUrl} alt="Banner" className="store-banner" />
                        <img src={store.profileUrl} alt="Profile" className="store-profile" />
                        <div className="store-card-content">
                            <div className="store-info">
                                <span className="store-name">{store.name}</span>
                                <span className="store-category">{store.category}</span>
                            </div>
                            <div className="store-icons">
                                <FiHeart className="store-icon" />
                                <FiShare2 className="store-icon" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
