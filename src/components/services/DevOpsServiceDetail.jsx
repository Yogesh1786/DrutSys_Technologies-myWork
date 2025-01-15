// import { useParams } from "react-router-dom";

// const DevOpsServiceDetail = () => {
//   const { serviceId } = useParams();
  
//   // Fetch the service data based on serviceId or match it against the array
//   const selectedService = devOpsServices.find(service => service.title.replace(/\s+/g, '-').toLowerCase() === serviceId);

//   return (
//     <div className="flex flex-col items-center bg-gray-50 p-6">
//       <h1 className="text-3xl font-bold mb-4">{selectedService.title}</h1>
//       <img
//         src={selectedService.image}
//         alt={selectedService.title}
//         className="w-full max-w-3xl h-auto rounded-md shadow-lg mb-4"
//       />
//       <div
//         dangerouslySetInnerHTML={{ __html: selectedService.description }}
//         className="prose max-w-none text-gray-700 leading-relaxed"
//       />
//     </div>
//   );
// };

// export default DevOpsServiceDetail;
