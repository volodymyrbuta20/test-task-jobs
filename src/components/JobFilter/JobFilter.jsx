import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/MySelect/MySelect";

const JobFilter = () => {
    return (
        <div className="jobfilter">
            <MyInput placeholder="Search job"/>
            <MySelect options={[
                {value: "title", name: "Name"},
                {value: "body", name: "Description"}
            ]}/>
        </div>
    )
}

export default JobFilter;