import React, { useContext } from 'react';
import './LocationModal.css';
import { DataContext } from '../../components/DataProvider/DataProvider.jsx';
import { translations } from '../../Utility/translations';
import { Link } from 'react-router-dom';

function LocationModal({ show, onClose }) {
    const [{ language }] = useContext(DataContext);
    const t = translations[language?.code] || translations.EN;

    if (!show) return null;

    const countries = [
        "United States", "Spain", "Saudi Arabia", "Canada", "Mexico", "United Kingdom",
        "Germany", "France", "Italy", "Japan", "India", "Australia", "Brazil"
    ];

    return (
        <div className="location_modal_overlay" onClick={onClose}>
            <div className="location_modal_container" onClick={(e) => e.stopPropagation()}>
                <div className="location_modal_header">
                    <h3>{t.choose_location}</h3>
                    <button className="close_btn" onClick={onClose}>×</button>
                </div>

                <div className="location_modal_content">
                    <p className="description_text">
                        {t.delivery_options_text}
                    </p>

                    <Link to="/auto" onClick={onClose}>
                        <button className="modal_signin_btn">
                            {t.signin_to_see_address}
                        </button>
                    </Link>

                    <div className="divider">
                        <span>or {t.enter_zip_code}</span>
                    </div>

                    <div className="zip_input_container">
                        <input type="text" maxLength="5" />
                        <button>{t.apply}</button>
                    </div>

                    <div className="divider">
                        <span>or {t.ship_outside_us}</span>
                    </div>

                    <select className="country_select">
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>

                    <div className="modal_footer">
                        <button className="done_btn" onClick={onClose}>{t.done}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationModal;
