import {FaMapMarkerAlt} from "react-icons/fa";
import Header from "../../components/Header/Header";
import map from "../../resources/images/Map.png";
import image from "../../resources/images/Image1.png";
import MyButton from "../../UI/MyButton/MyButton";
import "./SingleJobPage.scss";

const SingleJobPage = () => {
    return (
        <div className="singlejob">
            <div className="singlejob__wrapper">
                <div className="singlejob__column">
                    <div className="singlejob__info">
                        <Header/>
                        <hr/>
                        <section className="singlejob__main">
                            <MyButton className="btn btn__apply">Apply now</MyButton>

                            <div className="singlejob__head">
                                <h3 className="singlejob__name">Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)</h3>
                                <div className="singlejob__salary">
                                    <p className="singlejob__amount">€ 54 000—60 000</p>
                                    <p>Brutto, per year</p>
                                </div>
                            </div>
                            <div className="singlejob__date">Posted 2 days ago</div>
                            <p className="singlejob__descr">At WellStar, we all share common goals. That’s what makes us so successful – and such an integral part of our communities. We want the same things, for our organization, for our patients, and for our colleagues. As the most integrated healthcare provider in Georgia, this means we pride ourselves on investing in the communities that we serve. We continue to provide innovative care models, focused on improving quality and access to healthcare.</p>
                            <h3 className="title title__fsz20">Compensation & Benefits:</h3>
                            <p className="singlejob__subtitle">Our physicians enjoy a wide range of benefits, including:</p>
                            <ul className="singlejob__compensation">
                                <li className="singlejob__compensation-item">Very competitive compensation package with bonuses</li>
                                <li className="singlejob__compensation-item">Medical, Dental, and Vision Insurance</li>
                                <li className="singlejob__compensation-item">Occurrence-based Malpractice Coverage</li>
                            </ul>

                            <MyButton className="btn btn__apply">Apply now</MyButton>
                        </section>

                        <div className="singlejob__block">
                            <h2 className="title title__mt85">Additional info</h2>
                            <hr/>

                            <h3 className="title title__fsz18">Employment type</h3>
                            <div className="singlejob__btns">
                                <button className="btn btn__employment">Full time</button>
                                <button className="btn btn__employment">Part time</button>
                                <button className="btn btn__employment">Temporary</button>
                            </div>

                            <h3 className="title title__fsz18">Benefits</h3>
                            <div className="singlejob__btns">
                                <button className="btn btn__benefits">Flexible shedule</button>
                                <button className="btn btn__benefits">Relocation assistance</button>
                            </div>
                        </div>

                        <div className="singlejob__block">
                            <h2 className="title title__mt85">Attached images</h2>
                            <hr/>

                            <div className="singlejob__images">
                                <img src={image} alt="" className="singlejob__img" />
                                <img src={image}alt="" className="singlejob__img" />
                                <img src={image} alt="" className="singlejob__img" />
                            </div>
                        </div>

                        <button className="btn btn__return">Return to job board</button>
                    </div>
                </div>

                <div className="singlejob__column">
                    <div className="singlejob__map">
                        <div className="singlejob__map-info">
                            <div className="singlejob__map-name">Department name. University Hospital Giessen.</div>
                            <div className="singlejob__map-address"><FaMapMarkerAlt/> AKH Wien, 1090 Wien, Währinger</div>
                            <a className="singlejob__map-phone" href="+43(01)4040012090">+43 (01) 40400-12090</a>
                            <div className="singlejob__map-mail">post_akh_diz@akhwien.at</div> 
                        </div>
                        <img src={map} alt="map" className="singlejob__map-details" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleJobPage;