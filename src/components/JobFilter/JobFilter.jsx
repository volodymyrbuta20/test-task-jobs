import MyInput from "../../UI/MyInput/MyInput";
import MySelect from "../../UI/MySelect/MySelect";

const JobFilter = ({filter, setFilter}) => {
    return (
        <div className="jobfilter">
            <MyInput 
                value={filter.query}
                placeholder="Search job"
                onChange={e => setFilter({...filter, query: e.target.value})}/>
            <MySelect 
                options={[
                    {value: "name", label: "Name"},
                    {value: "title", label: "Description"}
                ]}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}

export default JobFilter;