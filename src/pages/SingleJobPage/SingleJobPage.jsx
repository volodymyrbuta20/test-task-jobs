import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobService from "../../API/JobService";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";
import MySpinner from "../../UI/MySpinner/MySpinner";
import MyButton from "../../UI/MyButton/MyButton";
import {FaMapMarkerAlt} from "react-icons/fa";
import map from "../../resources/images/Map.png";

import "./SingleJobPage.scss";

const SingleJobPage = () => {

    const [job, setJob] = useState({})

    const {jobId} = useParams();

    const [fetchJobs, isLoading, isError] = useFetch(async () => {
        const jobs = await JobService.getAllJobs()
        setJob(jobs.find(({id}) => id === jobId))
    })

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        
        <>
            {isLoading ? <MySpinner/> : <View job={job}/>}
        </>

    )
}

const View = ({job}) => {

    const {name, title, salary, description, email, phone, address, benefits = [], pictures = [], employment_type = []} = job;

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
                                <div className="singlejob__header">
                                    <h3 className="title">{name}</h3>
                                    <p className="singlejob__title">{title}</p>
                                </div>
                                <div className="singlejob__salary">
                                    <p className="singlejob__amount">€ {salary}</p>
                                    <p>Brutto, per year</p>
                                </div>
                            </div>
                            <div className="singlejob__date">Posted 2 days ago</div>
                            <p className="singlejob__descr">{description}</p>

                            <h3 className="title title__fsz20">Compensation & Benefits:</h3>
                            <p className="singlejob__subtitle">Our physicians enjoy a wide range of benefits, including:</p>
                            <ul className="singlejob__compensation">
                                {benefits.map((item, index) => (
                                    <li key={index} className="singlejob__compensation-item">{item}</li>
                                ))}
                            </ul>

                            <MyButton className="btn btn__apply">Apply now</MyButton>
                        </section>

                        <div className="singlejob__block">
                            <h2 className="title title__mt85">Additional info</h2>
                            <hr/>

                            <h3 className="title title__fsz18">Employment type</h3>
                            <div className="singlejob__btns">
                                {employment_type.map((item, index) => (
                                    <button key={index} className="btn btn__employment">{item}</button>
                                ))}
                            </div>

                            <h3 className="title title__fsz18">Benefits</h3>
                            <div className="singlejob__btns">
                                {benefits.map((item, index) => (
                                    <button key={index} className="btn btn__benefits">{item}</button>
                                ))}
                            </div>
                        </div>

                        <div className="singlejob__block">
                            <h2 className="title title__mt85">Attached images</h2>
                            <hr/>

                            <div className="singlejob__images">
                                {pictures.map((item, index) => (
                                    <img src={item} alt="pic" key={index} className="singlejob__img" />
                                ))}
                            </div>
                        </div>

                        <Link to="/jobs" className="btn btn__return">Return to job board</Link>
                    </div>
                </div>

                <div className="singlejob__column">
                    <div className="singlejob__map">
                        <div className="singlejob__map-info">
                            <div className="singlejob__map-name">Department name. {name}</div>
                            <div className="singlejob__map-address"><FaMapMarkerAlt/> {address}</div>
                            <a className="singlejob__map-phone" href={phone}>{phone}</a>
                            <div className="singlejob__map-mail">{email}</div> 
                        </div>
                        <img src={map} alt="map" className="singlejob__map-details" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleJobPage;