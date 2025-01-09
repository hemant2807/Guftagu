import React from "react";

const GenderCheckBox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control ">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : "" } `}>
          <span className="label-text">Male</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-100" 
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : "" } `}>
          <span className="label-text">Female</span>
          <input 
            type="checkbox" 
            className="checkbox border-slate-100"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;




//STARTER CODE FOR USE 
// import React from "react";

// const GenderCheckBox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control ">
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//       <div>
//         <label className={"label gap-2 cursor-pointer"}>
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox border-slate-900" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheckBox;
