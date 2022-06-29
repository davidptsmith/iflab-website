
const ProjectTable = ({ items }) => {
  return (
    <div>
      <dl className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        {showTableItems(items)}
      </dl>
    </div>
  );
};

export default ProjectTable;

//Loop through items and get return html for table item
function showTableItems(items) {
  var html = [];
  for (let i = 0; i < items.length; i++) {
    html.push(returnTableHTML(items[i][0], items[i][1]));
  }
  return html;
}

// Generate html for table items 
function returnTableHTML(heading, body, i) {
  return (
    <div key={i} className="border-t border-gray-200 pt-4">
      <dt className="font-medium text-gray-900">{heading}</dt>
      <dd className="mt-2 text-sm -mb-4 md:-mb-8 text-gray-500">{body}</dd>
    </div>
  );
}