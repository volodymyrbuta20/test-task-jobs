
import Select from "react-select";
import "./MySelect.scss";

const MySelect = ({options, onChange}) => {
    return (
        <Select 
            options={options} 
            onChange={selectedOption => onChange(selectedOption.value)} 
            classNamePrefix="custom-select" 
            placeholder="Sort by:"
            isSearchable={false}/>
    )

    // return (
    //     <select 
    //         value={value}
    //         onChange={e => onChange(e.target.value)}
    //         style={{padding: "5px 10px", border: "1px solid teal", color: "teal"}}
    //     >
    //         <option disabled value="">{defaultValue}</option>
    //         {options.map(option => 
    //             <option key={option.value} value={option.value}>{option.name}</option>
    //         )}
    //     </select>
    // )
}

export default MySelect;