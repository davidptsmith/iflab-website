import Link from "next/link";


const tags = [
    "Architecture",
    "Public Art",
    "Fabrication",
    "Computational Design",
    "Urban Design",
    "All",
    
]

export default function FilterButtons() {
  return (<div className="flex flex-wrap  ">
  
        {returnButtons()}
        
  
  </div>);
}

function returnButtons() {
  let arr = [];
  for (let index = 0; index < tags.length; index++) {
    const tag = tags[index];
      arr.push(
        <button
          key={index}
          className="insightsFilterButton"
          onClick={() => applyFiler(setText, tag)}
        >
          {tag}
        </button>
      );
  }

  return arr;
}