import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import JobService from "../../API/JobService";
import useFetch from "../../hooks/useFetch";
import Header from "../../components/Header/Header";
import SimpleMap from "../../components/Map/Map";
import MySpinner from "../../UI/MySpinner/MySpinner";
import ErrorMessage from "../../UI/ErrorMessage/ErrorMessage";
import MyButton from "../../UI/MyButton/MyButton";
import {FaMapMarkerAlt} from "react-icons/fa";
import PostedDate from "../../utils/PostedDate";

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

    const spinner = isLoading ? <MySpinner/> : <View job={job}/>

    return (
        
        <>
            {isError ? <ErrorMessage/> : spinner}
        </>

    )
}

const View = ({job}) => {

    const {
        name, 
        title, 
        salary, 
        description, 
        email, 
        phone, 
        address, 
        createdAt,
        benefits = [], 
        pictures = [], 
        employment_type = [], 
        location={}
    } = job;

    const [years, month, days] = PostedDate(createdAt);

    const yy = years ? `${years} years` : "";
    const mm = month ? `${month} months` : "";
    const dd = days ? `${days} days` : "";

    return (

        <div className="singlejob">
            <div className="singlejob__wrapper">
                <div className="singlejob__column">
                    <div className="singlejob__info">
                        <Header/>
                        <hr/>
                        <section className="singlejob__main">
                            <MyButton className="btn btn__apply btn__apply-top">Apply now</MyButton>

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
                            <div className="singlejob__date">Posted {`${yy} ${mm} ${dd}`} ago</div>
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

                        <Link to="/" className="btn btn__return">Return to job board</Link>
                    </div>
                </div>

                <div className="singlejob__column">
                    <div className="singlejob__column-header">
                        <h2 className="title title__mt85">Contacts</h2>
                        <hr/>
                    </div>
                    <div className="singlejob__map">
                        <div className="singlejob__map-info">
                            <div className="singlejob__map-name">Department name: {name}</div>
                            <div className="singlejob__map-address"><FaMapMarkerAlt/> {address}</div>
                            <a className="singlejob__map-phone" href={phone}>{phone}</a>
                            <div className="singlejob__map-mail">{email}</div> 
                        </div>
                        <div className="singlejob__map-location">
                            <SimpleMap location={location}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleJobPage;